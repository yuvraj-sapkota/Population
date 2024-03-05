function Details({ data, searchValue }) {
  return (
    <>
      {data
        .filter((value) => {
          if (searchValue === "") {
            return value;
          } else if (
            value.District.toLowerCase().includes(searchValue.toLowerCase())
          ) {
            return value;
          }
        })

        .map((currentData, index) => {
          return (
            <>
              <div className="Details">
                <div className="district data">{currentData.District}</div>
                <div className="district">{currentData.LocalLevelName}</div>
                <div className="district">{currentData.TotalFamilyNumber}</div>
                <div className="district">
                  {currentData.TotalHouseholdNumber}
                </div>
                <div className="district">{currentData.TotalMale}</div>
                <div className="district">{currentData.TotalFemale}</div>
                <div className="district">{currentData.TotalPopulation}</div>
              </div>
            </>
          );
        })}
    </>
  );
}

export default Details;
