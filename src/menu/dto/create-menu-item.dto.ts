import { IsString, IsNumber, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateMenuItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsBoolean()
  isAvailable: boolean;
}