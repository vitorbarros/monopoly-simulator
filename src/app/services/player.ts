import { Propriety } from '../models/propriety';
import { Player, PlayerProfile } from '../models/player';
import { boolRandom } from '../utils/random';
import gameInitialSetup from '../constants/gameInitialSetup';
import { Game } from '../models/game';

export const getNexPlayerIndex = (index: number, numberOfPlayers): number => {
  const nextIndex = index + 1;

  if (nextIndex >= numberOfPlayers) {
    return 0;
  }

  return nextIndex;
};

export const canBuy = (property: Propriety) => !property.owner;

export const shouldCollectRent = (property: Propriety) =>
  property.owner && property.owner.profile;

export const playerHasMoneyToRent = (player: Player, property: Propriety) => {
  return player.moneyAmount > property.rentalValue;
};

export const playerHasMoneyToBuy = (player: Player, property: Propriety) => {
  return player.moneyAmount > property.saleCost;
};

export const shouldGetMoney = (player: Player) =>
  player.step >= gameInitialSetup.proprieties.length;

export const pickAWinner = (game: Game): Player => {
  const { players } = game;
  const playersSorted = players.sort((a, b) => b.moneyAmount - a.moneyAmount);

  return playersSorted[0];
};

export const isPlayerInGame = (player: Player) => player.moneyAmount > 0;
