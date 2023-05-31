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
        className='bg-black border-pink-500 border w-20 h-20 text-white text-5xl text-center' />
  )
}

export default Cell