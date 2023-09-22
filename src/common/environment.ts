export const executionEnvironments = {
  production: 'production',
  staging: 'staging',
  test: 'test',
  development: 'development',
} as const;

export type ExecutionEnvironment = 'production' | 'staging' | 'test' | 'development';

export const isDeployable = (env: ExecutionEnvironment) =>
  env === 'production' || env === 'staging';

export const getServerConfig = (env: ExecutionEnvironment) => ({
  protocol: isDeployable(env) ? 'https' : 'http',
  origin: env === 'production' ? 'etelie.com' : env === 'staging' ? 'qa.etelie.com' : 'localhost',
  apiHost:
    env === 'production' ? 'api.etelie.com' : env === 'staging' ? 'api.qa.etelie.com' : 'localhost',
  port: isDeployable(env) ? 443 : 402,
});
