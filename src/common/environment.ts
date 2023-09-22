export const executionEnvironments = {
  production: 'production',
  staging: 'staging',
  test: 'test',
  development: 'development',
} as const;

export type ExecutionEnvironment =
  (typeof executionEnvironments)[keyof typeof executionEnvironments];

export const executionEnvironment = import.meta.env.CLIENT__EXECUTION_ENVIRONMENT;

export const isProduction = executionEnvironment === 'production';
export const isStaging = executionEnvironment === 'staging';
export const isTest = executionEnvironment === 'test';
export const isDevelopment = executionEnvironment === 'development';

export const isDeployable = isProduction || isStaging;

export const serverConfig = {
  protocol: isDeployable ? 'https' : 'http',
  origin: isProduction ? 'etelie.com' : isStaging ? 'qa.etelie.com' : 'localhost',
  apiHost: isProduction ? 'api.etelie.com' : isStaging ? 'api.qa.etelie.com' : 'localhost',
  port: isDeployable ? 443 : 402,
};
