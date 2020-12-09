import { User } from '../types';

export const adaptUsers = (users: User[]) => users.map((user: User) => adaptUser(user));

export const adaptUser = ({ id, name, email, phone, website }: User) => ({ id, name, email, phone, website });
