import { Route, Routes } from "react-router-dom";
import Character from "./pages/Character";
import CharacterList from "./pages/CharacterList";
import Search from "./pages/Search";

function App() {
  return (
    <div>
   {/*    <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/search" element={<Search />} />

        <Route path="/:id" element={<Character />} />

      </Routes> */}
      <Search />
    </div>
  );
}

export default App;
