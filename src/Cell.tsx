interface Position {
    i: number,
    j: number
}

function Cell({ cell, position, sudokuPuzzle }: { cell: string, position: Position, sudokuPuzzle: Function }) {

    const cellChange = (e: any) => {
        if (e.target.value.length > 1) return
        if (/[a-zA-Z]/.test(e.target.value) || /\D+/.test(e.target.value)) return
        sudokuPuzzle(position, e.target.value)
    }

  return (
    <input
        onChange={cellChange}
        type="text"
        value={cell}
        className={`bg-black border-orange-400 border w-20 h-20 text-white text-5xl text-center
        ${position.j == 2 || position.j == 5 ? 'border-r-8' : ''}
        ${position.i == 2 || position.i == 5 ? 'border-b-8' : ''}`}  />
  )
}

export default Cell