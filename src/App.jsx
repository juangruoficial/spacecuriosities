import { useState } from "react";
import "./App.css";
import spaceCuriosities from "./db/spaceCuriosities.json";
import { getRandom } from "./utilities/random.js";
import SpaceCuriositiesBox from "./components/SpaceCuriositiesBox";

const listBg = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6"];
function App() {
  const [spaceCuriosity, setSpaceCuriosity] = useState(
    getRandom(spaceCuriosities)
  );
  const [currentBg, setCurrentBg] = useState(getRandom(listBg));

  const handleChangeInfo = () => {
    setSpaceCuriosity(getRandom(spaceCuriosities));
    setCurrentBg(getRandom(listBg));
  };

  return (
    <main className={`App ${currentBg}`}>
      <SpaceCuriositiesBox
        handleChangeInfo={handleChangeInfo}
        spaceCuriosity={spaceCuriosity}
      />
    </main>
  );
}

export default App;
