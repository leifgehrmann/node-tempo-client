import axios from 'axios';
import { HttpClient } from './httpClient';
import { RequestConfig } from './requestConfig';

const axiosHttpClient: HttpClient = async (requestConfig: RequestConfig) => {
  const response = await axios({
    adapter: requestConfig.adapter,
    data: requestConfig.body,
    headers: requestConfig.headers,
    method: requestConfig.method,
    timeout: requestConfig.timeout,
    url: requestConfig.url,
  });
  return response.data;
};

export default axiosHttpClient;
