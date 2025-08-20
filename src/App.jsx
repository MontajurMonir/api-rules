import React, { useEffect, useState } from "react";
import './App.css';
import Product from './components/Product';
// import from dummy json
import axios from 'axios';

const App = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function allData() {
      const { data } = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    allData();
  }, []);

  return (
    <>
      <div>
        {
          allData.map((item) => <h1 key={item.id}>{item.title}</h1>)
        }
      </div>
    </>
  );
};

export default App;