import { canBuy, getNexPlayerIndex, shouldCollectRent } from '../player';
import { Behaviors, PlayerProfile } from '../../models/player';

const playerMock = {
  rentalValue: 100,
  saleCost: 1000,
  owner: {
    moneyAmount: 10,
    profile: PlayerProfile.Aleatorio,
    step: 0,
    behavior: Behaviors.BuyAll,
    playerBehaviorConstraints: {
      [Behaviors.FinalBalanceIsBiggerThan]: 0,
      [Behaviors.BuyPercentage]: 0,
      [Behaviors.BuyAll]: false,
      [Behaviors.RentShouldBeBiggerThan]: 0,
    },
  },
};

describe('player suite tests', () => {
  it('should select the next player index for the turn', () => {
    const index = getNexPlayerIndex(0, 4);

    expect(index).toBe(1);
  });

  it('should select 0 if the last player already played', () => {
    const index = getNexPlayerIndex(3, 4);

    expect(index).toBe(0);
  });

  it('should not allow to buy if the house is already bought', () => {
    const allowed = canBuy(playerMock);

    expect(allowed).toBeFalsy();
  });

  it('should allow to buy if the house is not already bought', () => {
    const allowed = canBuy({
      rentalValue: 100,
      saleCost: 1000,
      owner: null,
    });

    expect(allowed).toBeTruthy();
  });

  it('should charge the rent', () => {
    const collect = shouldCollectRent(playerMock);

    expect(collect).toBeTruthy();
  });

  it('should not charge the rent', () => {
    const collect = shouldCollectRent({
      rentalValue: 100,
      saleCost: 1000,
      owner: null,
    });

    expect(collect).toBeFalsy();
  });
});
