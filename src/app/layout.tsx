const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

/**
 * Manage <head> HTML elements
 */
export const metadata = {
  title: "etelie",
};

export default RootLayout;
