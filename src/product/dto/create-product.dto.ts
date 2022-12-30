import { IsNumber, IsString, IsUrl } from 'class-validator';
import { Product } from '../entities/product.entity';

export class CreateProductDto extends Product {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  price: number;
  @IsUrl()
  images: string;
  @IsString()
  class: string;
}
