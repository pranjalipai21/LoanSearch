import React, { useState } from "react";
import "./App.css";
import { Text, createTheme } from "@fluentui/react";
import { getLoans } from "./services/fakeLoanServices";
import Loans from "./components/loans";
import LoanForm from "./components/loanForm";

function App() {
  const loansData = getLoans();
  const [loans, setLoans] = useState(loansData);

  const loanSearch = (loan) => {
    const newArray = loans.filter(function (el) {
      return (
        el.creditScore === parseInt(loan.creditScore) &&
        Math.round(el.rate) === parseFloat(loan.rate)
      );
    });
    setLoans(newArray);
  };

  const theme = createTheme({
    fonts: {
      medium: {
        fontSize: "20px",
        fontWeight: "bold",
      },
    },
  });

  return (
    <div className="ms-Fabric" dir="ltr">
      <div className="ms-Grid">
        <div className="ms-Grid-row App-header ">
          <Text variant="xxLarge">Loans for All</Text>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg3">
            <LoanForm loanSearch={loanSearch} customTheme={theme} />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg9">
            <h2>
              <Loans loansData={loans} customTheme={theme} />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
