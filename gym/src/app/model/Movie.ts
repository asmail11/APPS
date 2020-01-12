import {Actor} from './Actor';
import {Director} from './Director';

export class Movie {
  _id: string;
  title: string;
  genre: string;
  summary: string;
  country: string;
  year: number;
  director: Director;
  actors: Actor[];
}
