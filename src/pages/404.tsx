import { Box, Typography } from '@mui/material';
import ShopLayout from '../../components/layouts/ShopLayout';

const NotFound = () => {
  return (
    <ShopLayout
      title={'Página no encontrada'}
      pageDescription={'No hay nada que mostrar aquí.'}
    >
      <Box
        sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}
        justifyContent={'center'}
        height='calc(100vh - 200px)'
        alignItems={'center'}
      >
        <Typography variant='h1' component='h1' fontSize={70} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2}>
          No encontramos ninguna página aquí
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default NotFound;
