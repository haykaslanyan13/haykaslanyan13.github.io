import React from 'react';
import {useIsMobile} from "./hook/ui/is-mobile.hook";

function App() {
  const isMobile = useIsMobile()
  console.log(isMobile)
  return (
    <div>
      {isMobile ? (<div>mobile</div>) : (<div>desktop</div>)}
    </div>
  );
}

export default App;
