import { Request, Response } from 'express';
import ContentfulService from '../services/ContentfulService';

export async function getPosts(req: Request, res: Response) {
  try {
    const posts = await ContentfulService.getPosts()

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function addPost(req: Request, res: Response) {
  try {
    const space = await this.clientManager.getSpace(process.env.CONTENTFUL_SPACE_ID as string);
    const environment = await space.getEnvironment('master');

    const entry = await environment.createEntry('blogPost', {
      fields: {
        title: { 'en-US': 'title' },
        content: { 'en-US': 'content' }
      }
    });

    res.status(200).send(entry);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
}
