import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import All from "./All";
import FullStack from "./FullStack";
import DataScience from "./DataScience";
import CyberSecurity from "./CyberSecurity";
import Career from "./Career";
import { dataSet } from "./DataSet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='cardContainer'>
          <Routes>
            <Route path='/' element={<All dataSet={dataSet} />} />
            <Route
              path='/fullstack'
              element={<FullStack dataSet={dataSet} />}
            />
            <Route
              path='/datascience'
              element={<DataScience dataSet={dataSet} />}
            />
            <Route
              path='/cybersecurity'
              element={<CyberSecurity dataSet={dataSet} />}
            />
            <Route path='/career' element={<Career dataSet={dataSet} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
