import React, {useEffect} from "react";
import { getChannel } from './network'

function App() {
  useEffect(() => {
    (async () => {
        await getChannel()
    })()
  }, [])
  return (
    <div className="display-4">
      Test
    </div>
  );
}

export default App;
