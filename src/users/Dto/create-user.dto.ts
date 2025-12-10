import { IsEnum, IsString, IsNotEmpty } from 'class-validator';
export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsEnum(['INTERN', 'ADMIN', 'SUPERADMIN'],{message: 'role must be INTERN, ADMIN or SUPERADMIN'})
    role: 'INTERN' | 'ADMIN' | 'SUPERADMIN'
    
}