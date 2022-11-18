import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  constructor(private httpService: HttpService) {}

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.httpService.axiosRef.get(url);
      return data;
    } catch (error) {
      throw new Error('This is an error - check logs');
    }
  }
}
