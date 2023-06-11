import {
    IsArray,
    IsBoolean,
    IsDefined,
    IsEmail,
    IsNotEmpty,
    IsNotEmptyObject,
    IsNumber,
    IsObject,
    IsOptional,
    IsString,
    ValidateNested,
  } from 'class-validator';
  
export class CreateBookingDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    type: string

    @IsNotEmpty()
    @IsString()
    fromAirport: string

    @IsNotEmpty()
    @IsString()
    toAirport: string

    @IsNotEmpty()
    @IsString()
    mobileNumber: string

    @IsNotEmpty()
    departureDate: string

    @IsOptional()
    returnDate: string

}