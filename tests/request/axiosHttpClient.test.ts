import axiosHttpClient from '../../src/request/axiosHttpClient';
import { IRequestConfig } from '../../src/request/iRequestConfig';

describe('axiosHttpClient', () => {
  it('Maps requestConfig correctly', async () => {
    const requestConfig: IRequestConfig = {
      url: 'http://www.example.com',
      method: 'GET',
      body: {
        hello: 'world',
      },
      timeout: 1234,
      headers: {
        Authorization: 'Bearer myToken',
      },
    };

    // Thankfully axios has a way to mock the network request
    const adapter = async (axiosRequestConfig: any) => ({
      data: {
        someOtherResponse: 'lorem ipsum',
        theOriginalRequestConfig: requestConfig,
        theAxiosRequestConfig: axiosRequestConfig,
      },
    });

    requestConfig.adapter = adapter;

    const result = await axiosHttpClient(requestConfig);

    const expectedAxiosRequestConfig = {
      url: 'http://www.example.com',
      method: 'get',
      data: '{"hello":"world"}',
      timeout: 1234,
      headers: {
        Authorization: 'Bearer myToken',
      },
    };

    expect(result.someOtherResponse).toEqual('lorem ipsum');
    expect(result.theOriginalRequestConfig).toEqual(requestConfig);
    expect(result.theAxiosRequestConfig).toMatchObject(
      expectedAxiosRequestConfig,
    );
  });
});
