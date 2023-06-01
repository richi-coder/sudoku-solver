import { LineNumber, TypeDashboard } from "../types/GeneralTypes";

const baseLine: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

export const linearSolver = (iteration: TypeDashboard, k: number) => {

    // 2. Create to types of multidimensional arrays for easy checking
                // 2.1 dashboardHorizontal
                const horizontalDashboard = [...iteration];
                // console.log(horizontalDashboard, 'horizontal');
                // 2.2 dashboardVertical
                const verticalDashboard = iteration[0].map((column, j) => iteration.map(line => line[j]))
                // console.log(verticalDashboard, 'vertical');

            // 3. Check lines
            const dashboardCheckLine = checkingArrays(horizontalDashboard)
            // console.log(dashboardCheckLine, 'first process');

            // 4. Check columns
            const preDashboardCheckColumn = checkingArrays(verticalDashboard)
            // console.log(preDashboardCheckColumn, 'second process')

            // 5. Convert vertical back to horizontal dashboard
            const dashboardCheckColumn = preDashboardCheckColumn[0].map((row, j) => preDashboardCheckColumn.map(line => line[j]))
            // console.log(dashboardCheckColumn, 'second horizontal');
            
            // 6. Integrate into only one multidimensional array for an iteration
            iteration = integrateSquares(dashboardCheckLine, dashboardCheckColumn)
            console.log(iteration, `Iteration: ${k}`);
            return iteration;

}



const integrateSquares = (firstDashboard: any, secondDashboard: any) => {

    const integratedSquares = firstDashboard.map((line: LineNumber, i: number) => 
        line.map((square, j) => {
            if (typeof square === 'string') {
                const integrate = secondDashboard[i][j].split('').filter((element: string) => firstDashboard[i][j].indexOf(element) !== -1).join('')
                return integrate.length == 1 ? Number(integrate) : 0;
            }
            return square
        })
        )
    return integratedSquares

}


const checkingArrays = (dashboardNumber: TypeDashboard) => {
    const dashboardCheckLine = dashboardNumber.map((lineToTest: LineNumber) => {
        const result = lineToTest.map((square: number) => square != 0 ? square : square == 0 ? checkLine(lineToTest) :  String(square) + checkLine(lineToTest))
        return result;
    })
    // console.log(dashboardCheckLine, 'checklines');
    return dashboardCheckLine;
}

const checkLine = (line: number[]): number | string => {
    const lackingNumbers: Array<number> = baseLine.filter(item => line.indexOf(item) == -1)
    return lackingNumbers.join('')
}

