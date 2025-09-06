import Navbar from '@/components/shared/Navbar';
import { JSX } from 'react';
import Footer from '@/components/shared/Footer';

export default function Page({
  children,
  navbar = true,
  cta = true,
  footer = true,
}: Readonly<{
  children: React.ReactNode;
  navbar?: boolean;
  cta?: boolean;
  footer?: boolean;
}>): JSX.Element {
  return (
    <>
      {navbar && <Navbar />}
      <main>{children}</main>
      {footer && <Footer />}
    </>
  );
}
