import { Behaviors, Player, PlayerProfile } from '../../models/player';
import { Propriety } from '../../models/propriety';
import { willPlayerBuy } from '../playerBehavior';

const playerMock: Player = {
  profile: PlayerProfile.Impulsivo,
  step: 0,
  moneyAmount: 100,
  behavior: Behaviors.BuyAll,
  playerBehaviorConstraints: {
    [Behaviors.FinalBalanceIsBiggerThan]: 0,
    [Behaviors.BuyPercentage]: 0,
    [Behaviors.BuyAll]: true,
    [Behaviors.RentShouldBeBiggerThan]: 0,
  },
};

const properyMock: Propriety = {
  owner: null,
  saleCost: 50,
  rentalValue: 10,
};

describe('playerBehavior suite tests', () => {
  it(`Impulsivo should buy always`, () => {
    const willBuy = willPlayerBuy(playerMock, properyMock);
    expect(willBuy).toBeTruthy();
  });

  it(`Cauteloso should buy if the final amount is bigger or equals than 80`, () => {
    const willBuy = willPlayerBuy(
      {
        ...playerMock,
        profile: PlayerProfile.Cauteloso,
        behavior: Behaviors.FinalBalanceIsBiggerThan,
        playerBehaviorConstraints: {
          ...playerMock.playerBehaviorConstraints,
          [Behaviors.FinalBalanceIsBiggerThan]: 80,
        },
      },
      { ...properyMock, saleCost: 20 },
    );
    expect(willBuy).toBeTruthy();
  });

  it(`Cauteloso should not buy if the final amount is lower than 80`, () => {
    const willBuy = willPlayerBuy(
      {
        ...playerMock,
        profile: PlayerProfile.Cauteloso,
        behavior: Behaviors.FinalBalanceIsBiggerThan,
        playerBehaviorConstraints: {
          ...playerMock.playerBehaviorConstraints,
          [Behaviors.FinalBalanceIsBiggerThan]: 80,
        },
      },
      { ...properyMock, saleCost: 21 },
    );
    expect(willBuy).toBeFalsy();
  });

  it(`Exigente should buy if the rental value is bigger or equals 50`, () => {
    const willBuy = willPlayerBuy(
      {
        ...playerMock,
        profile: PlayerProfile.Exigente,
        behavior: Behaviors.RentShouldBeBiggerThan,
        playerBehaviorConstraints: {
          ...playerMock.playerBehaviorConstraints,
          [Behaviors.RentShouldBeBiggerThan]: 50,
        },
      },
      { ...properyMock, rentalValue: 50 },
    );
    expect(willBuy).toBeTruthy();
  });

  it(`Exigente should not buy if the rental value is lower or equals 50`, () => {
    const willBuy = willPlayerBuy(
      {
        ...playerMock,
        profile: PlayerProfile.Exigente,
        behavior: Behaviors.RentShouldBeBiggerThan,
        playerBehaviorConstraints: {
          ...playerMock.playerBehaviorConstraints,
          [Behaviors.RentShouldBeBiggerThan]: 50,
        },
      },
      { ...properyMock, rentalValue: 49 },
    );
    expect(willBuy).toBeFalsy();
  });
});
