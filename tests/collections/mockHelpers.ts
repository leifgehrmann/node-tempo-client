interface RequestBuilderConfig {
  port?: string;
  timeout?: number;
  protocol?: string;
  host: string;
  apiVersion: string;
  intermediatePath?: string;
  bearerToken?: string;
}

export default function getMockRequestBuilderOptions(
  options?: Partial<RequestBuilderConfig>,
): RequestBuilderConfig {
  const actualOptions = options || {};
  return {
    apiVersion: actualOptions.apiVersion || '3',
    bearerToken: actualOptions.bearerToken || 'sometoken',
    host: actualOptions.host || 'tempo.somehost.com',
    intermediatePath: actualOptions.intermediatePath,
    port: actualOptions.port || '8080',
    protocol: actualOptions.protocol || 'http',
    timeout: actualOptions.timeout,
  };
}
