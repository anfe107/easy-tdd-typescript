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

  it('detects year 0 to be a non leap year', () => {
    expect(isLeapYear(0)).toBeFalsy();
  });

  it('detects year 2000 to be a leap year - divisible by 400', () => {
    expect(isLeapYear(2000)).toBeTruthy();
  });

  it('detects negative years e.g. -4 to be a non leap year', () => {
    expect(isLeapYear(-4)).toBeFalsy();
  });
});
