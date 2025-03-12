import { isLeapYear } from './leap-year';

describe('leap year algorithm', () => {
  it('detects a leap year', () => {
    expect(isLeapYear(1996)).toBeTruthy();
  });

  it('detects a non leap year', () => {
    expect(isLeapYear(1997)).toBeFalsy();
  });

  it('detects a century year as a non leap year', () => {
    expect(isLeapYear(1900)).toBeFalsy();
  });
});
