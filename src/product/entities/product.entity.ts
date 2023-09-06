import { Prisma } from '@prisma/client';

export class Product implements Prisma.ProductUncheckedCreateInput {
  id?: number;
  name: string;
  description: string;
  price: number;
  images?: string;
  class?: string;
}
