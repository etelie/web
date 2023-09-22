/// <reference types="vite/client" />

import { ExecutionEnvironment } from './src/common/environment'

type NodeEnv = "development" | "test" | "production";

interface ImportMeta extends ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly EXECUTION_ENVIRONMENT: ExecutionEnvironment,
}
