
// Please write a typescript project with unit test:

// For implementing function with this interface
//     merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []
// That returns sorted array by ascending.

// given
//      collection_1, collection_3 already sorted from min(0) to max
//      collection_2 already sorted from max to min(0)

// Please provide accessible repo of typescript project with unit test
// and provide how to setup dependency and execute code and unit test

// Note: Don't allow to use any sort function

export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    // พลิก collection_2 จากเรียงลง ให้เป็นเรียงขึ้น
    const reversed2: number[] = [];
    for (let i = collection_2.length - 1; i >= 0; i--) {
        reversed2.push(collection_2[i]);
    }
    console.log("reversed2 : ", reversed2)
    const result: number[] = [];
    let i = 0, j = 0, k = 0;

    while (i < collection_1.length || j < reversed2.length || k < collection_3.length) {
        const valI = i < collection_1.length ? collection_1[i] : Infinity;
        const valJ = j < reversed2.length ? reversed2[j] : Infinity;
        const valK = k < collection_3.length ? collection_3[k] : Infinity;

        if (valI <= valJ && valI <= valK) {
            result.push(valI);
            i++;
        } else if (valJ <= valI && valJ <= valK) {
            result.push(valJ);
            j++;
        } else {
            result.push(valK);
            k++;
        }
    }

    return result;
}
