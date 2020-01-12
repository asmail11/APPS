import {Address} from './Address';
import {Grade} from './Grade';

export class Restaurant {
   restaurant_id: string;
   name: string;
   borough: string;
   cuisine: string;
   address: Address;
   grades: Grade[];
}
