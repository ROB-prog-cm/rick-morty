import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Paginantion/Pagination";
import Spinner from "./components/Spinner/Spinner";
import CardDetails from "./components/Cards/CradDetalis";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<CardDetails/>}/>
      </Routes>
    </Router>
  )
}


const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true)
  const [status, updateStatus] = useState("");
  const [gender, updateGender] = useState("");
  const [species, updateSpecies] = useState("");
  const [fetchedData, updateFetchedData] = useState({results: []});
  const [search, setSearch] = useState("");
  const {info, results} = fetchedData;

  const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
    (async function () {
      let data = await fetch(API).then((res) => res.json());
      updateFetchedData(data);
      setIsLoading(false)
    })();
  }, [API]);

  return (
    <div className='app'>
      <h1 className='text-center my-4'>Rick & <span className='text-primary'>Morty</span></h1>
      {
        isLoading ? <Spinner/> :
          <>
            <div className='container'>
              <div className='row'>
                <Filters
                  setSearch={setSearch}
                  pageNumber={pageNumber}
                  status={status}
                  updateStatus={updateStatus}
                  updateGender={updateGender}
                  updateSpecies={updateSpecies}
                  setPageNumber={setPageNumber}
                />
                <div className="col-8">
                  <div className="row">
                    <Cards page='/' results={results}/>
                  </div>
                </div>
              </div>
            </div>
            <Pagination
              info={info}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          </>
      }
    </div>
  );
};

export default App;
