import React, { useEffect, useState } from "react";
import './App.css';
import Product from './components/Product';
// import from dummy json
import axios from 'axios';

const App = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function allData() {
      const  allAPIdata  = await axios.get("https://dummyjson.com/products");
      setAllData(allAPIdata.data.products);
    }
    allData();
  }, []);

  return (
<>

{
  allData.map(item=>(
<>
    <h1>{item.title} </h1>
    <h1>{item.price} </h1>
</>

  ))
}
</>
  );
};

export default App;