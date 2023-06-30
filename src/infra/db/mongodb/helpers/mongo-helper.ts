import { MongoClient, type Collection } from 'mongodb'
export const MongoHelper = {
  client: MongoClient,
  async connect (url: string): Promise<void> {
    this.client = new MongoClient(url)
    await this.client.connect()
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  }
}
