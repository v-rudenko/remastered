import React, { useState } from 'react';
import './App.css';

// import './components/header/SearchSelector.css';
import Search from './components/Search';
import SearchSelector from './components/header/SearchSelector';
import Images from './components/Images';
import Extended from './components/Extended';

const App = () => {

  const [page, setPage] = useState("search");

  const searchSelectedHandler = (search) => {

    // setPage(search)

    // setPage( () => {return search})
    setPage(search);

  }

  if (page === "search"){
    return (
      <div>
        <SearchSelector onSearchSelected={searchSelectedHandler} page={page} />
        <Search/>
      </div>
    );
  } else if (page === "images") {
    return (
      <div>
        <SearchSelector onSearchSelected={searchSelectedHandler} page={page}/>
        <Images/>
      </div>
    );
  } else if (page === "extended") {
    return (
      <div>
        <SearchSelector onSearchSelected={searchSelectedHandler} page={page}/>
        <Extended/>
      </div>
    );
  }
};

export default App;
