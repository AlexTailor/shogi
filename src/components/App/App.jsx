import "./App.css";
import Board from "../Board/Board";
import Navbar from "../Navbar/Navbar";
import { PlayerProvider } from "../../context/PlayerProvider";

function App() {
  return (
    <div className="App">
      <PlayerProvider>
        <Navbar />
        <Board />
      </PlayerProvider>
    </div>
  );
}

export default App;
