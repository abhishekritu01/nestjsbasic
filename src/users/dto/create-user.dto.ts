import { IsEmail, IsString, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['Intern', 'Employee', 'Admin'], {
    message: 'Invalid role. Must be one of Intern, Employee or Admin',
  })
  role: 'Intern' | 'Employee' | 'Admin';
}
