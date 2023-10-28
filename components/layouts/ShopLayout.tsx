import { FC } from 'react';
import Head from 'next/head';
import Navbar from '../ui/Navbar';
import SideMenu from '../ui/SideMenu';

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: any;
}
const ShopLayout: FC<Props> = ({
  title,
  pageDescription,
  imageFullUrl,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta media='og:title' content={title} />
        <meta media='og:description' content={pageDescription} />
        <meta name='description' content={pageDescription} />
        {imageFullUrl && <meta media='og:image' content={imageFullUrl} />}
      </Head>
      <nav>
        <Navbar></Navbar>
      </nav>
      <SideMenu></SideMenu>

      {/* todo: sidebar */}

      <main
        style={{
          margin: '80px auto',
          maxWidth: '1440px',
          padding: '0px 30px',
        }}
      >
        {children}
      </main>

      <footer></footer>
    </>
  );
};

export default ShopLayout;
