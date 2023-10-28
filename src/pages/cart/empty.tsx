import { FC } from "react";
import NextLink from "next/link";
import { Box, Link, Typography } from "@mui/material";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import ShopLayout from "../../../components/layouts/ShopLayout";

interface Props {}

export const EmptyPage: FC<Props> = () => {
  return (
    <ShopLayout
      title="Carrito vacío"
      pageDescription="No hay artículos en este carrito"
    >
      <Box
        sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        justifyContent="center"
        height="calc(100vh - 200px)"
        alignItems="center"
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems={"center"}>
          <Typography marginLeft={2}>Su carrito está vacío</Typography>
          <NextLink href="/" passHref legacyBehavior>
            <Link typography="h3" color="secondary">
              Volver
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
