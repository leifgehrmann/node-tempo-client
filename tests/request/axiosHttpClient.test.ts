import axiosHttpClient from '../../src/request/axiosHttpClient';
import { RequestConfig } from '../../src/request/requestConfig';

interface MockData {
  data: {
    someOtherResponse: string;
    theOriginalRequestConfig: RequestConfig;
    theAxiosRequestConfig: RequestConfig;
  };
}

describe('axiosHttpClient', () => {
  it('Maps requestConfig correctly', async () => {
    const requestConfig: RequestConfig = {
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
    requestConfig.adapter = async (axiosRequestConfig: RequestConfig): Promise<MockData> => ({
      data: {
        someOtherResponse: 'lorem ipsum',
        theOriginalRequestConfig: requestConfig,
        theAxiosRequestConfig: axiosRequestConfig,
      },
    });

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
