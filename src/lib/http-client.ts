/**
 * HttpClient
 * Add new methods as need arises. So far Pokemon api only offers GET
 */
export default class HttpClient {
  async get(path: string) {
    let response = await fetch(path);
    let data = await response.json();
    return data;
  }
}
