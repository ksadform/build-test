import React from 'react';
import {lib1Util1Func1} from 'lib-1/dist'
import {lib2Util1Func1, lib2Util2Func4} from 'lib-2/dist'

const App = () => {
    lib1Util1Func1()
    lib2Util1Func1()
    lib2Util2Func4()
  return (
    <div>App</div>
  )
}

export default App;