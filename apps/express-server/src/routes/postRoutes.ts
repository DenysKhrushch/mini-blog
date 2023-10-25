import express from 'express';
import {getPosts} from "../controllers/postController";

const router = express.Router();

router.get('/', getPosts);

// // Get a specific blog post by ID
// router.get('/:id', (req: Request, res: Response) => {
//   const postId = req.params.id;
//   const post = blogPosts.find((p) => p.id === postId);
//
//   if (!post) {
//     return res.status(404).json({ message: 'Blog post not found' });
//   }
//
//   res.json(post);
// });
//
// // Create a new blog post (not shown: you would handle this based on your data source, e.g., Contentful)
// router.post('/', (req: Request, res: Response) => {
//   // Handle creating a new blog post (e.g., with Contentful)
//   // Return the created post or an error response
//   res.status(501).json({ message: 'Not implemented' });
// });
//
// // Update an existing blog post (not shown: you would handle this based on your data source)
// router.put('/:id', (req: Request, res: Response) => {
//   // Handle updating an existing blog post (e.g., with Contentful)
//   // Return the updated post or an error response
//   res.status(501).json({ message: 'Not implemented' });
// });
//
// // Delete an existing blog post (not shown: you would handle this based on your data source)
// router.delete('/:id', (req: Request, res: Response) => {
//   // Handle deleting an existing blog post (e.g., with Contentful)
//   // Return a success or error response
//   res.status(501).json({ message: 'Not implemented' });
// });

export default router;
