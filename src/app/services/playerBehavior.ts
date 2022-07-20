import { Player, PlayerProfile } from '../models/player';
import { Propriety } from '../models/propriety';
import { boolRandom } from '../utils/random';

export const willPlayerBuy = (player: Player, property: Propriety) => {
  if (
    player.profile === PlayerProfile.Exigente &&
    property.rentalValue >= player.playerBehaviorConstraints[player.behavior]
  ) {
    return true;
  }

  if (
    player.profile === PlayerProfile.Cauteloso &&
    player.moneyAmount - property.saleCost >=
      player.playerBehaviorConstraints[player.behavior]
  ) {
    return true;
  }

  if (
    player.profile === PlayerProfile.Aleatorio &&
    boolRandom(
      player.playerBehaviorConstraints[player.behavior as unknown as number],
    )
  ) {
    return true;
  }

  return player.profile === PlayerProfile.Impulsivo;
};
