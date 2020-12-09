import { Id } from '../../common/types';

export type User = {
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    catchPhrase: string;
  };
} & Id;
