import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email: string;
  @IsOptional()
  @IsString()
  name?: string;
  @IsString()
  @IsOptional()
  @MinLength(6)
  senha: string;
}
