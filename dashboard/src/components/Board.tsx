import Allocation from "./Allocation"
import Performance from "./Performance"
import Info from "./Info"
import Position from "./Position"

const Board = () => {
  return (
    <div className="board">
      <Info />
      <Allocation />
      <Performance />
      <Position />
    </div>
  )
}

export default Board
