import type Board from '../types/Board'
import type Coords from '../types/Coords'


/**
 * Checks if the value at coordinates (x, y) is a bomb.
 * A cell is considered to be a bomb is its value is -1.
 * 
 * @param b The board
 * @param tuple A tuple [x, y] where x indicates 
 * @returns If there is a bomb in the given coordinates
 */
export function isBomb(b: Board, [x, y]: Coords): boolean {
    // TO DO: Check if the value at the coordinates is a bomb
    return b[x][y] === 0 ? false : true
}

/**
 * Neighbors function takes a board and some coordinates.
 * It returns an array of coordinates of all the neighboring locations.
 * Diagonal neighbours are also valid.
 * 
 * @param b The board
 * @param tuple A tuple [x, y] where x indicates 
 * @returns The coordinates of all neighbors
 */
export const neighbors = (b: Board, [x, y]: Coords): Coords[] => {
    // TO DO: Return all the neighbors coordinates
    //These will always be the surrounding neighbors of the given coordinates
    let arr = [
        [x-1, y-1],
        [x-1, y],
        [x-1, y+1],
        [x, y-1],
        [x, y],
        [x, y+1],
        [x+1, y-1],
        [x+1, y],
        [x+1, y+1]
    ]

    let neighborArr = []

    //must remove any coordinates that lie outside of the grid, 0 indexed so must be >= 0 and < 5
    for (let i = 0; i < arr.length; i++) {
        if(arr[i][0] >= 0 && arr[i][0] < 5 && arr[i][1] >=0 && arr[i][1] < 5) {
            neighborArr.push(arr[i])
        }
    }
    return neighborArr;
}

/**
 * Given the board and some coordinates the function is returns the count
 * of bombs neightbouring the coordinates.
 * The coordinates given will never be the location of a bomb.
 * 
 * @param b The board
 * @param tuple A tuple [x, y] where x indicates 
 * @returns The number of bombs in the neighbors of the given coordinates
 */
export const neighborBombCount = (b: Board, [x, y]: number[]): number => {
    // TO DO: Get the number of bombs in the neighbors
    let count = 0

    //invoke the neighbors function to get the array of neighbors
    let arr = neighbors(b, [x,y])
    for ( let i = 0; i < arr.length; i++) {

    //invoke isBomb function to determine which neighbors are bombs, incrementing count for each bomb.
        if(isBomb(b, arr[i]) !== false) count++  
    }
    return count
}
