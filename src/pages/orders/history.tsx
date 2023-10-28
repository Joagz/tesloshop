import { FC } from "react";
import ShopLayout from "../../../components/layouts/ShopLayout";
import { Chip, Grid, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import NextLink from "next/link";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "paid",
    description: "Muestra si la orden está pagada",
    headerName: "Pagado",
    width: 200,
    renderCell: (params) => {
      // params's type is: GridValueGetterParams, but throws an error.

      return params.row.paid ? (
        <Chip color="success" label="Pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="No pagada" variant="outlined" />
      );
    },
  },
  { field: "fullname", headerName: "Nombre Completo", width: 300 },
  {
    field: "order",
    description: "Opciones de la orden",
    headerName: "Ver orden",
    width: 200,
    renderCell: (params) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} legacyBehavior passHref>
          <Link underline="always">Ver Orden</Link>
        </NextLink>
      );
    },
  },
];

const rows = [
  { id: 1, paid: false, fullname: "Joaquín Gómez" },
  { id: 2, paid: true, fullname: "Melissa Flores" },
  { id: 3, paid: false, fullname: "Hernando Vallejo" },
  { id: 4, paid: true, fullname: "Emin Reyes" },
  { id: 5, paid: true, fullname: "Fernando Herrera" },
  { id: 6, paid: false, fullname: "Carlos Sattieri" },
];

export const HistoryPage: FC = () => {
  return (
    <ShopLayout
      title={"Historial de ordenes"}
      pageDescription={"Historial de ordenes del cliente"}
    >
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid columns={columns} rows={rows} autoPageSize rowCount={10} />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
