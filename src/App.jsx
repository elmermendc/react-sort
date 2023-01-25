import React, { useState } from "react";
import "./App.css";
import Articles from "./Components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [ordenar, setOrdenar] = useState(articles);

  const ordenarDescendente = () => {
    const ordenado = [...ordenar].sort((a, b) => b.upvotes - a.upvotes);
    setOrdenar(ordenado);
  };
  const ordenarFecha = () => {
    const porFecha = [...ordenar].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setOrdenar(porFecha);
  };

  return (
    <div className="App">
      <div className="container mx-auto p-4">
        <label className="text-2xl text-gray-900 dark:text-white pr-2">
          Sort By
        </label>
        <button
          onClick={ordenarDescendente}
          data-testid="most-upvoted-link"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Most Upvoted
        </button>
        <button
          onClick={ordenarFecha}
          data-testid="most-recent-link"
          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          Most Recent
        </button>
      </div>
      <Articles articles={ordenar} />
    </div>
  );
}

export default App;
