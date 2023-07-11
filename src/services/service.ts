import axios, { AxiosInstance } from 'axios';
import config from 'config';

export default abstract class Service {
    abstract fetch(params: any): any;

    public api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: config.get('service_base_url')
        });
    }

    public async get(url: string): Promise<any> {
        try {
            return await this.api.get(url);
        } catch (err) {
            throw new Error('Something went wrong');
        }
    }

    public async post(url: string, data: JSON | any): Promise<any> {
        try {
            return await this.api.post(url, data);
        } catch (err) {
            throw new Error('Something went wrong');
        }
    }
}
