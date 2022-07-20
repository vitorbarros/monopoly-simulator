import { PlayerProfile } from '../models/player';
import gameInitialSetup from '../constants/gameInitialSetup';
import { datumRoll } from '../utils/datum';
import {
  canBuy,
  getNexPlayerIndex,
  isPlayerInGame,
  pickAWinner,
  playerHasMoneyToBuy,
  playerHasMoneyToRent,
  shouldCollectRent,
  shouldGetMoney,
} from './player';
import { willPlayerBuy } from './playerBehavior';

export type SimulateResponse = {
  vencedor: PlayerProfile;
  players: PlayerProfile[];
};

export const simulate = (): SimulateResponse => {
  const game = gameInitialSetup;
  const { players, datum, proprieties } = game;

  let playerTurnIndex = -1;

  while (game.maxTurns > 0) {
    playerTurnIndex = getNexPlayerIndex(playerTurnIndex, players.length);

    const player = players[playerTurnIndex];
    const turn = datumRoll(datum);

    const property = proprieties[turn];

    if (
      shouldCollectRent(property) &&
      playerHasMoneyToRent(player, property) &&
      isPlayerInGame(player)
    ) {
      const playerIndex = players.findIndex(
        p => p.profile === property.owner.profile,
      );

      game.players[playerIndex].moneyAmount += property.rentalValue;
      game.players[playerTurnIndex].moneyAmount -= property.rentalValue;
    }

    if (
      canBuy(property) &&
      willPlayerBuy(player, property) &&
      playerHasMoneyToBuy(player, property) &&
      isPlayerInGame(player)
    ) {
      game.proprieties[turn].owner = player;
      game.players[playerTurnIndex].moneyAmount -= property.saleCost;
    }

    game.players[playerTurnIndex].step += turn;
    game.maxTurns -= 1;

    if (shouldGetMoney(player)) {
      game.players[playerTurnIndex].moneyAmount += 100;
      game.players[playerTurnIndex].step = 0;
    }
  }

  return {
    players: game.players.map(p => p.profile),
    vencedor: pickAWinner(game).profile,
  };
};
