import {Controller, Get, Param, Post, Body, Patch, Delete, Query, ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './Dto/create-user.dto';
import { UpdateUserDto } from './Dto/update-user.dto';  

@Controller('users')
export class UsersController {

    constructor( private readonly usersService: UsersService) {}
    // Controller methods will go here
    @Get()  
    findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'SUPERADMIN') 
    {
        return this.usersService.findAll(role);
    }

    @Get(':id')
    findOne(@Param('id') id: number) 
    {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) UpdateUserDto: UpdateUserDto) {
        return this.usersService.update(id, UpdateUserDto);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id);
    }

}

