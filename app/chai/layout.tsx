export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Inner Layout Item</h1>
      {children}
    </>
  );
}
 