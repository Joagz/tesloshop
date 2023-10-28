import { Grid, Typography } from "@mui/material";
import { FC } from "react";

interface Props {}

export const OrderSummary: FC<Props> = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>C. Productos:</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>3 items</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal:</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>$155</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Impuestos (15%):</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>$35.34</Typography>
      </Grid>

      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Total:</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end" sx={{ mt: 2 }}>
        <Typography variant="subtitle1">$186.34</Typography>
      </Grid>
    </Grid>
  );
};

export default OrderSummary;
