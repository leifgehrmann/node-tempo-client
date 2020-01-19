import axios from 'axios';

describe('Tempo REST API Documentation', () => {
  // This test is used to identify whether the documentation on Tempo's
  // website has updated. If the test fails, that means there must have been
  // some change to their API, and therefore should be addressed.
  it('has not changed', async () => {
    const response = await axios.get(
      'https://tempo-io.github.io/tempo-api-docs/',
      {
        responseType: 'text',
      },
    );
    expect(response.data).toMatchSnapshot();
  });
});
