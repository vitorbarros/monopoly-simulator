import gameInitialSetup from '../../constants/gameInitialSetup';
import { datumRoll } from '../datum';

describe('datum suite tests', () => {
  it(`should return a number between 1 and ${gameInitialSetup.datum}`, () => {
    const datum = datumRoll(gameInitialSetup.datum);

    const expected = datum >= 0 && datum < gameInitialSetup.datum;

    expect(expected).toBeTruthy();
  });
});
