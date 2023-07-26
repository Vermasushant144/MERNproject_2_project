import Navbar from './component/navbar';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path = "/" element = {<Create />} />
        <Route exact path = "/all" element = {<Read />} />
        <Route exact path = "/:id" element = {<Update />} />
      </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
