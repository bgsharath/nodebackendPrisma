import client from '../config/elasticClient';
import { Document } from '../models';

export class ElasticService {
  async createIndex(index: string): Promise<unknown> {
    return client.indices.create({ index });
  }

  async addDocument(index: string, document: Document): Promise<unknown> {
    return client.index({
      index,
      id: document.id,
      document,
    });
  }

  async search(index: string, query: object): Promise<unknown> {
    return client.search({
      index,
      body: {
        query,
      },
    });
  }

  async deleteIndex(index: string): Promise<unknown> {
    return client.indices.delete({ index });
  }
}

export const elasticService = new ElasticService();
