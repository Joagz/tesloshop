import { Box } from "@mui/material";
import Head from "next/head";
import { FC } from "react";

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[] | any;
}

export const AuthLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="calc(100vh - 200px)"
        >
          {children}
        </Box>
      </main>
    </>
  );
};

export default AuthLayout;
