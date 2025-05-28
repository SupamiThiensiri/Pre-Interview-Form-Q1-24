import { merge } from "../src/merge";

describe("merge function", () => {
  it("merges three arrays as required", () => {
    const c1 = [1, 3, 5, 7];
    const c2 = [10, 8, 6, 4, 2]; // descending
    const c3 = [0, 9, 11, 13];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,13]);
  });

  it("works with empty arrays", () => {
    expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
    expect(merge([], [], [])).toEqual([]);
  });

  it("works with single element arrays", () => {
    expect(merge([1], [2], [3])).toEqual([1,2,3]);
    expect(merge([1], [1], [1])).toEqual([1,1,1]);
  });
});
