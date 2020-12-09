import { Post } from '../types';

export const adaptPosts = (posts: Post[]) => posts.map((post: Post) => adaptPost(post));

export const adaptPost = ({ id, title, body }: Post) => ({
  id: id.toString(),
  title,
  body,
});
