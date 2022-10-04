import type Board from '../src/types/Board'

/**
 * Loads a new board
 * @returns A board
 */
export default function getBoard(): Board {
    return [
        [0,0,0,-1,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,-1,-1,0,0],
        [0,0,0,0,-1]
    ]
}
