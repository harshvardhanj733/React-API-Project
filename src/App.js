import Peoples from "./Components/Peoples";
import Navbar from './Components/Navbar';
import { useState } from "react";
import Loader from "./Components/Loader";

function App() {

  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Navbar setResult={setResult} setLoading={setLoading}/>
      {loading?<Loader/>:""}
      <Peoples result={result} loading={loading} setResult={setResult} setLoading={setLoading}/>
    </div>
  );
}

export default App;
