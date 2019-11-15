import axiosHttpClient from '../../src/request/axiosHttpClient';
import { IRequestConfig } from '../../src/request/iRequestConfig';

describe('axiosHttpClient', () => {
  it('Maps requestConfig correctly', async () => {
    // Use axios's method for mocking a network request:
    // https://github.com/axios/axios/tree/master/lib/adapters
    const adapter = async (config: any) => {
      return {
        data: {
          someOtherResponse: 'lorem ipsum',
          theOriginalRequestConfig: requestConfig,
          theAxiosRequestConfig: config
        }
      };
    };

    const requestConfig: IRequestConfig = {
      adapter,
      url: 'http://www.example.com',
      method: 'GET',
      body: {
        hello: 'world'
      },
      timeout: 1234,
      headers: {
        Authorization: 'Bearer myToken'
      }
    };

    const result = await axiosHttpClient(requestConfig);

    const expectedAxiosRequestConfig = {
      url: 'http://www.example.com',
      method: 'get',
      data: '{"hello":"world"}',
      timeout: 1234,
      headers: {
        Authorization: 'Bearer myToken'
      }
    };

    expect(result.someOtherResponse).toEqual('lorem ipsum');
    expect(result.theOriginalRequestConfig).toEqual(requestConfig);
    expect(result.theAxiosRequestConfig).toMatchObject(
      expectedAxiosRequestConfig
    );
  });
});
