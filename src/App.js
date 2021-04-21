import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Cards from "./Cards";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Card7 from "./Card7";
import Card8 from "./Card8";

// import PieChart from "../node_modules/react-minimal-pie-chart";
import stockData from "./StockData.js";

const App = () => {
  console.log(stockData);
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>My Stock Portfolio</h1>
      </div>

      {/* <Cards
      
      /> */}
      <Card1 />
      <Card2
        Quantity={stockData[2].Quantity}
        AvgCost={stockData[2].AvgCost}
        InvestedAmount={stockData[2].InvestedAmount}
      />
      <Card3
        InvestedAmount={stockData[3].InvestedAmount}
        PercentOfPortfolioValue={stockData[3].PercentOfPortfolioValue}
      />
      <Card4
        UnrealizedPandL={stockData[4].UnrealizedPandL}
        PercentReturn={stockData[4].PercentReturn}
      />
      <Card5 />
      <Card6
        Quantity={stockData[5].Quantity}
        AvgCost={stockData[5].AvgCost}
        InvestedAmount={stockData[5].InvestedAmount}
      />
      <Card7
        InvestedAmount={stockData[3].InvestedAmount}
        PercentOfPortfolioValue={stockData[3].PercentOfPortfolioValue}
      />
      <Card8
        UnrealizedPandL={stockData[4].UnrealizedPandL}
        PercentReturn={stockData[4].PercentReturn}
      />
    </>
  );
};

export default App;
