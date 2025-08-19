import SharedNavbar from '@/components/shared/Navbar';

export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SharedNavbar />
      <main>{children}</main>
    </>
  );
}
