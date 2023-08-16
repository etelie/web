/// <reference types="vite/client" />

type NodeEnv = "development" | "test" | "production";

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;

  readonly BUILD_TAG?: string; // Required in prod and qa
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
