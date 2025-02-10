/*eslint-disable */
import React, { useRef } from "react";
import { useEffect } from "react";

function Search({ setSearch }) {
  const inputRef = useRef(null);
  // console.log("Search was re-rendered");

  // console.log("cityData:", cityData);
  // function handleChange(cityName) {
  //   setCityData(cityName);
  // }

  // useEffect(() => {
  //   console.log("city data updated");
  // }, [cityData]);
  function handleClick() {
    setSearch(inputRef.current.value);
  }

  return (
    <form>
      <input
        type="text"
        name="city"
        id="city-data"
        placeholder="search city name"
        // onChange={(event) => handleChange(event.target.value)}
        ref={inputRef}
      />
      <button onClick={handleClick} type="button">
        Search
      </button>
    </form>
  );
}
// this only re render the component only if one of its props or state declared changed
export default React.memo(Search);
// export default Search;
