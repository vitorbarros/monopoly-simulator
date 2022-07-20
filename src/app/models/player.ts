export enum Behaviors {
  BuyAll = 'buyAll',
  RentShouldBeBiggerThan = 'rentShouldBeBiggerThan',
  FinalBalanceIsBiggerThan = 'finalBalanceIsBiggerThan',
  BuyPercentage = 'buyPercentage',
}

export enum PlayerProfile {
  Impulsivo = 'impulsivo',
  Exigente = 'exigente',
  Cauteloso = 'cauteloso',
  Aleatorio = 'aleatorio',
}

export type Player = {
  profile: PlayerProfile;
  moneyAmount: number;
  behavior: Behaviors;
  step: number;
  playerBehaviorConstraints: {
    [Behaviors.BuyAll]: boolean;
    [Behaviors.RentShouldBeBiggerThan]: number;
    [Behaviors.FinalBalanceIsBiggerThan]: number;
    [Behaviors.BuyPercentage]: number;
  };
};
