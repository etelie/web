/// <reference types="vite/client" />

type NodeEnv = "development" | "test" | "production";

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly NODE_ENV: NodeEnv;
  /*
  Plan is to separate the web server entirely from the application's data layer,
    forcing the web server to query HTTP APIs provided by the service layer for
    database interactions and authentication.

  readonly DATABASE_URL: string;
  readonly NEXTAUTH_SECRET: string;
  readonly NEXTAUTH_URL: string;
  */
  readonly DISCORD_CLIENT_ID: string;
  readonly DISCORD_CLIENT_SECRET: string;

  readonly BUILD_TAG?: string; // Required in prod and qa
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
