import Navbar from '@/components/shared/Navbar';

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
}>) {
  return (
    <>
      {navbar && <Navbar />}
      <main>{children}</main>
    </>
  );
}
