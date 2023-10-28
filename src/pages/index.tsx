/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Typography,
} from '@mui/material';
import ShopLayout from '../../components/layouts/ShopLayout';
import { initialData } from '../../database/products';
import { ProductList } from '../../components/products';

export default function Home() {
  return (
    <ShopLayout
      title='Teslo-Shop | Home'
      pageDescription='Encuentra los mejores productos de Teslo en Teslo-Shop'
    >
      <Typography variant='h1' component='h1'>
        Tienda
      </Typography>
      <Typography sx={{ mb: 1 }} variant='h2' component='h2'>
        Todos los productos
      </Typography>
    
      <ProductList products={initialData.products as any} />
    </ShopLayout>
  );
}
