import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createProductDto: CreateProductDto) {
    try {
      return await this.prisma.product.create({
        data: { ...createProductDto },
      });
    } catch (e) {
      if (e.code === 'P2002') {
        return { Erro: 'Já existe um produto com esse nome!' };
      }
    } finally {
      this.prisma.onModuleDestroy();
    }
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) {
      return { Erro: `Produto não encontrado com o ID:${id}` };
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.prisma.product.update({
        where: { id },
        data: { ...updateProductDto },
      });
      return product;
    } catch (e) {
      if (e.code === 'P2002') {
        return { Erro: 'Já existe um produto com esse nome!' };
      }
    }
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
