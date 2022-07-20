import type { Game } from '../models/game';
import { Behaviors, PlayerProfile } from '../models/player';

const gameInitialSetup: Game = {
  maxTurns: 1000,
  datum: 6,
  winner: null,
  players: [
    {
      profile: PlayerProfile.Impulsivo,
      moneyAmount: 300,
      step: 0,
      behavior: Behaviors.BuyAll,
      playerBehaviorConstraints: {
        [Behaviors.BuyAll]: true,
        [Behaviors.BuyPercentage]: 0,
        [Behaviors.FinalBalanceIsBiggerThan]: 0,
        [Behaviors.RentShouldBeBiggerThan]: 0,
      },
    },
    {
      profile: PlayerProfile.Exigente,
      moneyAmount: 300,
      step: 0,
      behavior: Behaviors.RentShouldBeBiggerThan,
      playerBehaviorConstraints: {
        [Behaviors.BuyAll]: true,
        [Behaviors.BuyPercentage]: 0,
        [Behaviors.FinalBalanceIsBiggerThan]: 0,
        [Behaviors.RentShouldBeBiggerThan]: 50,
      },
    },
    {
      profile: PlayerProfile.Cauteloso,
      moneyAmount: 300,
      step: 0,
      behavior: Behaviors.FinalBalanceIsBiggerThan,
      playerBehaviorConstraints: {
        [Behaviors.BuyAll]: true,
        [Behaviors.BuyPercentage]: 0,
        [Behaviors.FinalBalanceIsBiggerThan]: 80,
        [Behaviors.RentShouldBeBiggerThan]: 0,
      },
    },
    {
      profile: PlayerProfile.Aleatorio,
      moneyAmount: 300,
      step: 0,
      behavior: Behaviors.BuyAll,
      playerBehaviorConstraints: {
        [Behaviors.BuyAll]: true,
        [Behaviors.BuyPercentage]: 50,
        [Behaviors.FinalBalanceIsBiggerThan]: 0,
        [Behaviors.RentShouldBeBiggerThan]: 0,
      },
    },
  ],
  proprieties: [
    {
      saleCost: 100,
      rentalValue: 10,
      owner: null,
    },
    {
      saleCost: 200,
      rentalValue: 20,
      owner: null,
    },
    {
      saleCost: 300,
      rentalValue: 30,
      owner: null,
    },
    {
      saleCost: 400,
      rentalValue: 40,
      owner: null,
    },
    {
      saleCost: 500,
      rentalValue: 50,
      owner: null,
    },
    {
      saleCost: 150,
      rentalValue: 15,
      owner: null,
    },
    {
      saleCost: 160,
      rentalValue: 16,
      owner: null,
    },
    {
      saleCost: 180,
      rentalValue: 18,
      owner: null,
    },
    {
      saleCost: 190,
      rentalValue: 19,
      owner: null,
    },
    {
      saleCost: 250,
      rentalValue: 25,
      owner: null,
    },
    {
      saleCost: 260,
      rentalValue: 26,
      owner: null,
    },
    {
      saleCost: 270,
      rentalValue: 27,
      owner: null,
    },
    {
      saleCost: 280,
      rentalValue: 28,
      owner: null,
    },
    {
      saleCost: 290,
      rentalValue: 29,
      owner: null,
    },
    {
      saleCost: 35,
      rentalValue: 3.5,
      owner: null,
    },
    {
      saleCost: 36,
      rentalValue: 2.6,
      owner: null,
    },
    {
      saleCost: 37,
      rentalValue: 2.7,
      owner: null,
    },
    {
      saleCost: 38,
      rentalValue: 2.8,
      owner: null,
    },
    {
      saleCost: 39,
      rentalValue: 2.9,
      owner: null,
    },
    {
      saleCost: 45,
      rentalValue: 4.5,
      owner: null,
    },
  ],
};

export default gameInitialSetup;
