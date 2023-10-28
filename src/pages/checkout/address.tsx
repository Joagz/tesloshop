import { FC } from "react";
import ShopLayout from "../../../components/layouts/ShopLayout";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

interface Props {}

export const AddressPage: FC<Props> = () => {
  return (
    <ShopLayout
      title="Dirección"
      pageDescription="Confirmar dirección de destino"
    >

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid xs={12} sm={6} padding={2}>
          <Typography variant="h1" component="h1">Confirmar dirección de destino</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Nombre" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Apellido" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6} display={"flex"}>
          <Select variant="standard" sx={{ mr: 2 }} disableUnderline value={1}>
            <MenuItem value={1}>Ar. (+54)</MenuItem>
            <MenuItem value={2}>Mx. (+52)</MenuItem>
            <MenuItem value={3}>Ch. (+56)</MenuItem>
            <MenuItem value={4}>Uru. (+598)</MenuItem>
            <MenuItem value={5}>Par. (+595)</MenuItem>
          </Select>
          <TextField label="Teléfono" variant="filled" fullWidth />
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Código postal" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Ciudad" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Localidad" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Dirección" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Dirección 2 (opcional)"
            variant="filled"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel variant="filled">País</InputLabel>
            <Select variant="filled" value={1}>
              <MenuItem value={1}>Argentina</MenuItem>
              <MenuItem value={2}>México</MenuItem>
              <MenuItem value={3}>Chile</MenuItem>
              <MenuItem value={4}>Uruguay</MenuItem>
              <MenuItem value={5}>Paraguay</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }} display={"flex"} justifyContent={"center"}>
        <Button color={"secondary"} className="circular-btn" size="large">
          Revisar pedido
        </Button>
      </Box>
    </ShopLayout>
  );
};

export default AddressPage;
