"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("../src/merge");
describe("merge function", () => {
    // รวมอาร์เรย์ทั้งสามตามความต้องการ
    it("merges three arrays as required", () => {
        const c1 = [1, 3, 5, 7];
        const c2 = [10, 8, 6, 4, 2];
        const c3 = [0, 9, 11, 13];
        const result = (0, merge_1.merge)(c1, c2, c3);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13]);
    });
    //อาร์เรย์ที่ว่างเปล่า
    it("works with empty arrays", () => {
        expect((0, merge_1.merge)([], [3, 2, 1], [])).toEqual([1, 2, 3]);
        expect((0, merge_1.merge)([], [], [])).toEqual([]);
    });
    //ทำงานกับอาร์เรย์เดียว
    it("works with single element arrays", () => {
        expect((0, merge_1.merge)([1], [2], [3])).toEqual([1, 2, 3]);
        expect((0, merge_1.merge)([1], [1], [1])).toEqual([1, 1, 1]);
    });
});
