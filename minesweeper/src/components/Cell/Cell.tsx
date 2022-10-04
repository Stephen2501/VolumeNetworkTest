// import { isBomb } from '../../helpers/misc'
import type Board from '../../types/Board'
import Bomb from './Bomb'
import './Cell.css'

interface CellProps {
    board: Board;
    isSelected?: boolean;
    onClick: () => void;
    x: number;
    y: number;
}

function Cell({ board, isSelected = false, onClick, x, y }: CellProps) {
    // If the value is a bomb
    if (board[x][y] === -1) {
        return (
            <div className="board-cell">
                <Bomb />
            </div>
        )
    }

    const cellClasses = isSelected
        ? 'board-cell clickable selected'
        : 'board-cell clickable'

    // Default case
    return (
        <div className={cellClasses} onClick={onClick}>
            &nbsp;
        </div>
    )
}

export default Cell
