import {ClientAPI, createClient} from "contentful-management";
import client from "../config/contentfulClient";

class ContentfulService {
  private clientManager: ClientAPI;

  constructor() {
    this.clientManager = createClient({
      accessToken: process.env.CONTENTFUL_CMA_TOKEN as string,
    });
  }

  async getPosts() {
    try {
      const entries = await client.getEntries({ content_type: 'blogPost' });
      return entries.items;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch posts');
    }
  }

  async getPostById(postId: string) {
    try {
      const entry = await client.getEntry(postId);
      return entry;
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to fetch post with ID ${postId}`);
    }
  }

  async createPost(title: string, content: string) {
    try {
      const space = await this.clientManager.getSpace(process.env.CONTENTFUL_SPACE_ID as string);
      const environment = await space.getEnvironment('master');

      const entry = await environment.createEntry('blogPost', {
        fields: {
          title: { 'en-US': title },
          content: { 'en-US': content }
        }
      });

      return entry;
    } catch (error) {
      console.error(error);
      throw new Error('Server Error');
    }
  }
}

export default new ContentfulService();
