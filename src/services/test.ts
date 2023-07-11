import Service from './service';

export default class TestService extends Service {
  public async fetch() {
    const url = `/service2/`;
    return await this.get(url);
  }
}
