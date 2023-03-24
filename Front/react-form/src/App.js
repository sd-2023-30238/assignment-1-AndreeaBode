import React, { useState } from "react";
import {Route, Routes} from "react-router-dom";
import DreamCatch from "./components/dreamPage/DreamCatch";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DreamCatch />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

