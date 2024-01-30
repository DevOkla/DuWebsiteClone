// src/App.js
import React, { useState } from "react";
import CardCarousel from "./components/CardCarousel";
import cardData from "./cardData";

const App = () => {
  // State to track selected filter buttons
  const [selectedPlanType, setSelectedPlanType] = useState("");
  const [selectedContractType, setSelectedContractType] = useState("");

  // Function to handle filter button changes
  const handleRadioChange = (e, type) => {
    const value = e.target.value;
    if (type === "planType") {
      setSelectedPlanType(value);
    } else if (type === "contractType") {
      setSelectedContractType(value);
    }
  };

  // State to track whether filters should be hidden or not
  const [filtersHidden, setFiltersHidden] = useState(false);

  // Function to handle "Hide filters" button click
  const handleHideFiltersClick = () => {
    setFiltersHidden(!filtersHidden);
  };

  return (
    <div className="p-8 bg-bgLightGray">
      <div className="flex flex-col w-full md:flex-row">
        <h1 className="text-2xl font-bold mb-24 mr-6 flex-1">
          Already have a phone? Choose your Power Plan:
        </h1>
        <div className="flex flex-1 justify-end flex-col md:flex-row-reverse mb-16">
          <button
            className="w-fit text-CardPink mb-2 bg-white border-2 rounded-lg border-gray-200 h-fit mx-4 py-1 px-3 hover:bg-CardPink hover:text-white transition-all duration-200"
            onClick={handleHideFiltersClick}
          >
            {filtersHidden ? "Show Filters" : "Hide Filters"}
          </button>{" "}
          <form className="flex-1 justify-center">
            <fieldset
              className={`flex  w-full ${filtersHidden ? "hidden" : ""}`}
              style={{ visibility: filtersHidden ? "hidden" : "visible" }}
            >
              <div className="filters flex flex-row flex-wrap gap-4 justify-start items-start flex-1">
                <h3 className="text-gray-400">Show plans with:</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <input
                      className="w-6 h-6 text-blue-700 bg-blue-700 cursor-pointer"
                      type="radio"
                      value="flexi"
                      id="flexi"
                      name="planType"
                      onChange={(e) => handleRadioChange(e, "planType")}
                      checked={selectedPlanType === "flexi"}
                    />
                    <label htmlFor="flexi">
                      Flexi minutes (national & int'l)
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      className="w-6 h-6 text-blue-700 bg-blue-700 cursor-pointer"
                      type="radio"
                      id="national"
                      value="national"
                      name="planType"
                      onChange={(e) => handleRadioChange(e, "planType")}
                      checked={selectedPlanType === "national"}
                    />
                    <label htmlFor="national">National minutes</label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <input
                      className="w-6 h-6 text-blue-700 bg-blue-700 cursor-pointer"
                      type="radio"
                      id="contract"
                      value="contract"
                      name="contractType"
                      onChange={(e) => handleRadioChange(e, "contractType")}
                      checked={selectedContractType === "contract"}
                    />
                    <label htmlFor="contract">12-month contract</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      className="w-6 h-6 text-blue-700 bg-blue-700 cursor-pointer"
                      type="radio"
                      id="noContract"
                      value="noContract"
                      name="contractType"
                      onChange={(e) => handleRadioChange(e, "contractType")}
                      checked={selectedContractType === "noContract"}
                    />
                    <label htmlFor="noContract">No contract</label>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>{" "}
        </div>
      </div>
      <CardCarousel data={cardData} />
    </div>
  );
};

export default App;
