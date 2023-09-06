import { IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';
import { Product } from '../entities/product.entity';

export class CreateProductDto extends Product {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  price: number;
  @IsUrl()
  @IsOptional()
  images?: string;
  @IsString()
  @IsOptional()
  class?: string;
}
