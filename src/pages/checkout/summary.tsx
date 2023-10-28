import {
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Box,
  Button,
  Link,
} from "@mui/material";
import { FC } from "react";
import { CartList, OrderSummary } from "../../../components/cart";
import ShopLayout from "../../../components/layouts/ShopLayout";
import NextLink from "next/link";

interface Props {}

export const SummaryPage: FC<Props> = () => {
  return (
    <ShopLayout
      title="Carrito - 3"
      pageDescription="Carrito de compras de la tienda"
    >
      <Typography variant="h1" component="h1">
        Resumen de la orden
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <CartList></CartList>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  Dirección de entrega
                </Typography>
                <NextLink href={`/checkout/address`} passHref legacyBehavior>
                  <Link variant="body1" underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography>Fernando Herrera</Typography>
              <Typography>342 algun lugar</Typography>
              <Typography>Stittsville, HYA 235</Typography>
              <Typography>Canadá</Typography>
              <Typography>+1 123124234</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Resumen de compra</Typography>
                <NextLink href={`/cart`} passHref legacyBehavior>
                  <Link variant="body1" underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar Compra
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
