import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    fullname: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(50)
    email: string;

    @IsNumber()
    @IsNotEmpty()
    @IsInt()
    age: number;

    @IsNumber()
    @IsNotEmpty()
    @IsInt()
    phone: number;

    @IsString()
    @MaxLength(50)
    @IsOptional()
    country?: string;

    @IsString()
    @MaxLength(50)
    @IsOptional()
    city?: string;

}

export class UpdateUserDTO extends PartialType(CreateUserDto) { }
