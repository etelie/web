import { getServerSession } from "next-auth/next";
import { SessionProvider } from "next-auth/react";
import { authOptions } from "~/server/auth";

interface RootLayoutParams {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutParams) => {
  let session;

  try {
    const [sessionRes] = await Promise.allSettled([getServerSession(authOptions)]);

    if (sessionRes.status === "fulfilled") {
      session = sessionRes.value;
    } else {
      console.error(sessionRes);
    }
  } catch (error) {
    console.error(error);
  }

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
};

/**
 * Manage <head> HTML elements
 */
export const metadata = {
  title: "etelie",
};

export default RootLayout;
