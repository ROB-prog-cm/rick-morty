import React from 'react';
import Status from "./Category/Status";
import Species from "./Category/Species";
import Gender from "./Category/Gender";
import Search from "../Search/Search";

const Filters = ({
                   pageNumber,
                   setSearch,
                   setPageNumber,
                   updateStatus,
                   updateGender,
                   updateSpecies,
                 }) => {
  const clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    setPageNumber(1);
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <Search
        setPageNumber={setPageNumber}
        setSearch={setSearch}/>
      <div className="accordion my-3" id="accordionExample">
        <Status
          setPageNumber={setPageNumber}
          updateStatus={updateStatus}
        />
        <Species
          setPageNumber={setPageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          setPageNumber={setPageNumber}
          updateGender={updateGender}
        />
      </div>
      <div
        style={{cursor: "pointer"}}
        onClick={clear}
        className="text-primary text-decoration-underline text-center my-3"
      >
        Clear Filters
      </div>
    </div>
  );
};

export default Filters;
