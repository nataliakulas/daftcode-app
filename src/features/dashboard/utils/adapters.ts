import { User } from '../types';

export const adaptUsers = (users: User[]) => users.map((user: User) => adaptUser(user));

export const adaptUser = ({ id, name, email, phone, website, company }: User) => ({
  id: id.toString(),
  name,
  email,
  phone,
  website,
  company,
});
