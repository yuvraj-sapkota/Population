import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { populationRecords } from "./components/Population/PopulationRecord";
import Heading from "./components/Heading";
import Details from "./components/Details";
function App() {
  const [data, setData] = useState(populationRecords);
  console.log(data);

  const [searchValue, setSearchValue] = useState("");
  const inputEvent = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="navbar ">
        <h1>Nepal Populaton </h1>
        <div className="img"></div>
        <div>
          <FiSearch className="icon" />
          <input
            type="text"
            placeholder="Enter place name to search"
            onChange={inputEvent}
          />
        </div>
      </div>
      <div className="helper1"></div>
      <Heading />
      <div className="helper2"></div>
      <Details data={data} searchValue={searchValue} />
    </>
  );
}
export default App;
