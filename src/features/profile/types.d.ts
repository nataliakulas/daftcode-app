import { Id } from '../../common/types';

export type Post = {
  title: string;
  body: string;
} & Id;
