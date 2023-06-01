import { LineNumber, Position, TypeDashboard } from "../types/GeneralTypes";

const baseLine: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const helperBlock = [
    [
        {
            i: 0,
            j: 0
        },
        {
            i: 0,
            j: 1
        },
        {
            i: 0,
            j: 2
        },
        {
            i: 1,
            j: 0
        },
        {
            i: 1,
            j: 1
        },
        {
            i: 1,
            j: 2
        },
        {
            i: 2,
            j: 0
        },
        {
            i: 2,
            j: 1
        },
        {
            i: 2,
            j: 2
        }
    ],
    [
        {
            i: 0,
            j: 3
        },
        {
            i: 0,
            j: 4
        },
        {
            i: 0,
            j: 5
        },
        {
            i: 1,
            j: 3
        },
        {
            i: 1,
            j: 4
        },
        {
            i: 1,
            j: 5
        },
        {
            i: 2,
            j: 3
        },
        {
            i: 2,
            j: 4
        },
        {
            i: 2,
            j: 5
        }
    ],
    [
        {
            i: 0,
            j: 6
        },
        {
            i: 0,
            j: 7
        },
        {
            i: 0,
            j: 8
        },
        {
            i: 1,
            j: 6
        },
        {
            i: 1,
            j: 7
        },
        {
            i: 1,
            j: 8
        },
        {
            i: 2,
            j: 6
        },
        {
            i: 2,
            j: 7
        },
        {
            i: 2,
            j: 8
        }
    ],
    [
        {
            i: 3,
            j: 0
        },
        {
            i: 3,
            j: 1
        },
        {
            i: 3,
            j: 2
        },
        {
            i: 4,
            j: 0
        },
        {
            i: 4,
            j: 1
        },
        {
            i: 4,
            j: 2
        },
        {
            i: 5,
            j: 0
        },
        {
            i: 5,
            j: 1
        },
        {
            i: 5,
            j: 2
        }
    ],
    [
        {
            i: 3,
            j: 3
        },
        {
            i: 3,
            j: 4
        },
        {
            i: 3,
            j: 5
        },
        {
            i: 4,
            j: 3
        },
        {
            i: 4,
            j: 4
        },
        {
            i: 4,
            j: 5
        },
        {
            i: 5,
            j: 3
        },
        {
            i: 5,
            j: 4
        },
        {
            i: 5,
            j: 5
        }
    ],
    [
        {
            i: 3,
            j: 6
        },
        {
            i: 3,
            j: 7
        },
        {
            i: 3,
            j: 8
        },
        {
            i: 4,
            j: 6
        },
        {
            i: 4,
            j: 7
        },
        {
            i: 4,
            j: 8
        },
        {
            i: 5,
            j: 6
        },
        {
            i: 5,
            j: 7
        },
        {
            i: 5,
            j: 8
        }
    ],
    [
        {
            i: 6,
            j: 0
        },
        {
            i: 6,
            j: 1
        },
        {
            i: 6,
            j: 2
        },
        {
            i: 7,
            j: 0
        },
        {
            i: 7,
            j: 1
        },
        {
            i: 7,
            j: 2
        },
        {
            i: 8,
            j: 0
        },
        {
            i: 8,
            j: 1
        },
        {
            i: 8,
            j: 2
        }
    ],
    [
        {
            i: 6,
            j: 3
        },
        {
            i: 6,
            j: 4
        },
        {
            i: 6,
            j: 5
        },
        {
            i: 7,
            j: 3
        },
        {
            i: 7,
            j: 4
        },
        {
            i: 7,
            j: 5
        },
        {
            i: 8,
            j: 3
        },
        {
            i: 8,
            j: 4
        },
        {
            i: 8,
            j: 5
        }
    ],
    [
        {
            i: 6,
            j: 6
        },
        {
            i: 6,
            j: 7
        },
        {
            i: 6,
            j: 8
        },
        {
            i: 7,
            j: 6
        },
        {
            i: 7,
            j: 7
        },
        {
            i: 7,
            j: 8
        },
        {
            i: 8,
            j: 6
        },
        {
            i: 8,
            j: 7
        },
        {
            i: 8,
            j: 8
        }
    ]
]

export const linearSolver = (iteration: TypeDashboard, k: number) => {

            // 2. Create to types of multidimensional arrays for easy checking
                // 2.1 dashboardHorizontal
                const horizontalDashboard = [...iteration];
                
                // 2.2 dashboardVertical
                const verticalDashboard = iteration[0].map((column, j) => iteration.map(line => line[j]))
                // 2.3 dashboardBLocks
                const preBlockDashboard = new Array(9).fill(new Array(9).fill(0));
                const blockDashboard = preBlockDashboard.map((block, iBlock) => block.map((square, jBlock) => {
                    const position = helperBlock[iBlock][jBlock];
                    const { i, j } = position;
                    return iteration[i][j] 
                }))
                console.log(blockDashboard, 'blockdashboard', iteration);

            // 3. Check lines
            const dashboardCheckLine = checkingArrays(horizontalDashboard)
            console.log(dashboardCheckLine, 'first process');

            // 4. Check columns
            const preDashboardCheckColumn = checkingArrays(verticalDashboard)
            // console.log(preDashboardCheckColumn, 'second process')

            // 5. Convert vertical back to horizontal dashboard
            const dashboardCheckColumn = preDashboardCheckColumn[0].map((row, j) => preDashboardCheckColumn.map(line => line[j]))
            console.log(dashboardCheckColumn, 'second process');

            // 6. Check blocks
            const preDashboardCheckBLock = checkingArrays(blockDashboard)
            console.log(preDashboardCheckBLock, 'pre third process');

            let dashboardCheckBlock = new Array(9).fill(new Array(9).fill(null));
            // console.log(dashboardCheckBlock, 'FIRST CHECK');

            dashboardCheckBlock = dashboardCheckBlock.map((line, i) => line.map((square: number, j) => {
                let position: Position = {
                    'iBlock': null,
                    'jBlock': null
                };

                helperBlock.forEach((block, iBlock) => {
                        block.forEach((squareHelper, jBlock) => {
                            if (squareHelper.i == i && squareHelper.j == j) {
                                // position = { iBlock, jBlock}
                                position.iBlock = iBlock,
                                position.jBlock = jBlock
                            }
                        })
                } )
                return preDashboardCheckBLock[position.iBlock][position.jBlock]
            }))
            console.log(dashboardCheckBlock, 'third process');
            
            // 7. Integrate into only one multidimensional array for an iteration
            iteration = integrateSquares(dashboardCheckLine, dashboardCheckColumn, dashboardCheckBlock)
            console.log(iteration, `Iteration: ${k}`);
            return iteration;

}



const integrateSquares = (firstDashboard: TypeDashboard, secondDashboard: TypeDashboard, thirdDashboard: TypeDashboard) => {

    const firstIntegration = dashboardIntegrator(firstDashboard, secondDashboard);
    console.log(firstIntegration, 'INTEGRATION 1');
    const secondIntegration = dashboardIntegrator(firstIntegration, thirdDashboard)
    console.log(firstIntegration, 'INTEGRATION 2');
    return secondIntegration

}

const dashboardIntegrator = (dashboardA: TypeDashboard, dashboardB: TypeDashboard) => {

    const result = dashboardA.map((line: LineNumber, i: number) => 
        line.map((square, j) => {
            if (typeof square === 'string') {
                const integrate = dashboardB[i][j].split('').filter((element: string) => dashboardA[i][j].indexOf(element) !== -1).join('')


                return integrate.length == 1 ? Number(integrate) : integrate;
            }
            return square
        })
        )
    return result

}


const checkingArrays = (dashboardNumber: TypeDashboard) => {
    const dashboardCheckArray = dashboardNumber.map((lineToTest: LineNumber) => {
        const result = lineToTest.map((square: number | string) => square != 0 && typeof square != 'string' ? square : square == 0 ? checkLine(lineToTest) :  String(square) + checkLine(lineToTest))
        return result;
    })
    return dashboardCheckArray;
}

const checkLine = (line: number[]): number | string => {
    const lackingNumbers: Array<number> = baseLine.filter(item => line.indexOf(item) == -1)
    return lackingNumbers.join('')
}

