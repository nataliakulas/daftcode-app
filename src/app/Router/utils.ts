import { compile } from 'path-to-regexp';
import { route } from './routes';

export const profilePath = compile(route.profile);
