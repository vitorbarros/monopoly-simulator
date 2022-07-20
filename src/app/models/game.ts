import type { Player } from './player';
import type { Propriety } from './propriety';

export type Game = {
  maxTurns: number;
  players: Player[];
  proprieties: Propriety[];
  datum: number;
  winner: Player | null;
};
