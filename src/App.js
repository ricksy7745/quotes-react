import './App.css';
import React, {useState, useEffect} from 'react';
import { getAllQuotes, filterQuotes } from "./Services";

function App() {

  const[showSubcategories, setShowSubcategories] = useState(false);
  const[filterMode, setFilterMode] = useState(0)
  const[subOne, setSubOne] = useState("");
  const[subTwo, setSubTwo] = useState("");
  const[subThree, setSubThree] = useState("");

  const[shownQuotes, setShownQuotes] = useState(null);
  useEffect(() => {
    setShownQuotes(getAllQuotes());
  }, []);

  function handleSource(e) {
    setShowSubcategories(true)
    setShownQuotes(getAllQuotes())
    setFilterMode(1)
    setSubOne("Film")
    setSubTwo("Book")
    setSubThree("Music")
  }

  function handleTheme(e) {
    if(!showSubcategories) {
      setShowSubcategories(true)
    }
    setShownQuotes(getAllQuotes())
    setFilterMode(2)
    setSubOne("Love")
    setSubTwo("Self")
    setSubThree("Life")
  }

  function handleEra(e) {
    if(!showSubcategories) {
      setShowSubcategories(true)
    }
    setShownQuotes(getAllQuotes())
    setFilterMode(3)
    setSubOne("1950 - 1980")
    setSubTwo("1980 - 2010")
    setSubThree("2010 - present")
  }

  function handleFilter(filterKey) {
    setShownQuotes(filterQuotes(filterMode + filterKey))
  }

  return (
    <div className="App">
      <div className="title"><h1>React Framework for Handling Cards</h1></div>

      <div className="navbar">
        <div><h3>Filter quotes based on:</h3></div>
        <div>
          <button className="button" onClick={handleSource}>Source</button>
          <button className="button" onClick={handleTheme}>Theme</button>
          <button className="button" onClick={handleEra}>Era</button>
        </div>
        {showSubcategories && (<div>
          <button className="button" onClick={() => handleFilter(0)}>{subOne}</button>
          <button className="button" onClick={() => handleFilter(3)}>{subTwo}</button>
          <button className="button" onClick={() => handleFilter(6)}>{subThree}</button>
        </div>) }
      </div>

      <div className="quote-holder">
        <ul>
          {shownQuotes?.map(item => (
            <li className="quote" key={item.quote}>"{item.quote}" - {item.author}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
