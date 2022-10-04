import { isBomb, neighbors, neighborBombCount } from './misc'

const board = [
    [0,0,0,-1,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,-1,-1,0,0],
    [0,0,0,0,-1]
]

test('check `isBomb` function', () => {
    expect(isBomb(board, [1, 1])).toBeFalsy();
    expect(isBomb(board, [0, 3])).toBeTruthy();
    expect(isBomb(board, [4, 4])).toBeTruthy();
    expect(isBomb(board, [0, 4])).toBeFalsy();
});

test('check `neighbors` function', () => {
    const t1 = JSON.stringify(neighbors(board, [1, 1]))
    expect(t1).toBe('[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]');


    const t2 = JSON.stringify(neighbors(board, [4, 4]))
    expect(t2).toBe('[[3,3],[3,4],[4,3],[4,4]]');
});

test('check `neighborBombCount` function', () => {
    expect(neighborBombCount(board, [1, 1])).toBe(0);
    expect(neighborBombCount(board, [2, 2])).toBe(2);
    expect(neighborBombCount(board, [3, 4])).toBe(1);
    expect(neighborBombCount(board, [1, 3])).toBe(1);
});
