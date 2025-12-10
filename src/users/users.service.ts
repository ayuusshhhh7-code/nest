import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user.dto';
import { UpdateUserDto } from './Dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": 'John Doe',
            "role": 'ADMIN'
        },
        {
            "id": 2,
            "name": 'Jane Smith',
            "role": 'INTERN'      
        },
        {
            "id": 3,
            "name": 'Alice Johnson',
            "role": 'SUPERADMIN'  
        },
        {
            "id": 4,
            "name": 'Bob Brown',
            "role": 'ADMIN'
        }

    ]

    findAll(role?: 'INTERN' | 'ADMIN' | 'SUPERADMIN') {
        if (role) {
            const rolesArray= this.users.filter(user => user.role === role);
            if(rolesArray.length ===0) throw new
            NotFoundException(`No users with role ${role} found`)
            return rolesArray
        }

        return this.users;

    }


    findOne(id: number ) {
        const user= this.users.find(user => user.id === id)
        if (!user){
            throw new NotFoundException(`User with id ${id} not found`)
        }
        return user
    }

    create(UpdateUserDto: CreateUserDto) {
        const usersByHighestId = [ ...this.users ].sort((a, b) => b.id - a.id)
        const newUser={
            id: usersByHighestId[0].id +1,
            ...UpdateUserDto
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users= this.users.map(user => {
            if (user.id=== id){
                return { ...user, ...updateUserDto}
            }
            return user
    })
        return this.findOne(id)
    }
    delete(id: number) {
        const removedUser= this.findOne(id)

        this.users= this.users.filter(user => user.id !== id)
        return removedUser
    }
    

}
