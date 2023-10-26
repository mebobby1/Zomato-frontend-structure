import React from "react";
import QuickSearchItems from "./QuickSearchItems";

const QuickSearch = () => {
  return (
    <div>
      {/* <!-- Quick Searches Part -->*/}

      <div className="container mt-5 mb-5">

        <div className="row">
          <div>
            
              <h3 className="heading">Quick Searches</h3>

              <p className="subheading">Discover restaurants by type of meal</p>
          </div>

        </div>

        <QuickSearchItems />

      </div>

    </div>
  );
};

export default QuickSearch;
