import { MinHeap } from 'datastructures-js';

export class SampleClass {
  sum: number;
  constructor() {
    this.sum = 0;
  }

  addToSum(val: number): number {
    this.sum += val;

    return this.sum;
  }

  getSum(): number {
    return this.sum;
  }
}

const a = new MinHeap<number>();
a.push(100);
console.log(a.top());
