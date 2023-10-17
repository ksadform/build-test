
// import { lib1Util1Func1 } from 'lib-1'
import { lib1Util1Func1 } from 'lib-1/dist'

export const lib2Util2Func1 = () => console.log('print-lib2Util2Func1')
export const lib2Util2Func2 = () => console.log('print-lib2Util2Func2')
export const lib2Util2Func3 = () => console.log('print-lib2Util2Func3')
export const lib2Util2Func4 = () => {
    lib1Util1Func1()
    console.log('print-lib2Util2Func4 using lib1Util1Func1')
}
