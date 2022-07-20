import { Player } from './player';

export type Propriety = {
  rentalValue: number;
  saleCost: number;
  owner: Player | null;
};
