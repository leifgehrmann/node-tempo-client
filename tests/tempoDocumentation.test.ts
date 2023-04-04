import axios from 'axios';
import { JSDOM } from 'jsdom';
import format from 'xml-formatter';

let responseData = '<html lang="en-us"></html>';
let htmlDoc: Document = new JSDOM(responseData).window.document;

// This test is used to identify whether the documentation on Tempo's
// website has updated. If the test fails, that means there must have been
// some change to their API, and therefore should be addressed.
describe('Tempo REST API Documentation', () => {
  beforeAll(async () => {
    const response = await axios.get(
      'https://apidocs.tempo.io/',
      {
        responseType: 'text',
      },
    );
    if (typeof response.data !== 'string') {
      throw new Error('Response data was not a string. Might it be a network error?');
    }
    responseData = response.data;
    htmlDoc = new JSDOM(responseData).window.document;
  });

  it('has not changed', () => {
    expect(responseData).toMatchSnapshot();
  });

  it('formatted XML has not changed', () => {
    expect(format(responseData, {
      collapseContent: true,
      indentation: '',
      lineSeparator: '\n',
    })).toMatchSnapshot();
  });

  it('has the same panel-heading', () => {
    const elements = [...htmlDoc.querySelectorAll('.panel-heading')];
    const descriptions = elements.map((element) => element.textContent);
    expect(descriptions).toMatchSnapshot();
  });

  it('has the same method_descriptions', () => {
    const elements = [...htmlDoc.querySelectorAll('.method_description')];
    const descriptions = elements.map((element) => element.textContent);
    expect(descriptions).toMatchSnapshot();
  });

  it('has the same resource-description', () => {
    const elements = [...htmlDoc.querySelectorAll('.resource-description')];
    const descriptions = elements.map((element) => element.textContent);
    expect(descriptions).toMatchSnapshot();
  });
});
