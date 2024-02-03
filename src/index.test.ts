import { SampleClass } from '.';

describe('SampleClass', () => {
  let sc: SampleClass;

  beforeAll(() => {
    sc = new SampleClass();
  });

  it('Initial load', () => {
    expect(sc.getSum()).toBe(0);
  });

  it('Add 2', () => {
    expect(sc.addToSum(2)).toBe(2);
    expect(sc.getSum()).toBe(2);
  });

  it('Add 2 again', () => {
    expect(sc.addToSum(2)).toBe(4);
    expect(sc.getSum()).toBe(4);
  });
});
