import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, createTheme } from "@fluentui/react";
import Loans from "./components/loans";
import LoanForm from "./components/loanForm";
import "./App.css";

function App() {
  const [loans, setLoans] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/loans");
  const [isLoading, setIsLoading] = useState(false);

  //Recat hook to make an async call. Used axios here.
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setLoans(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  const loanSearchUrl = (url) => {
    setUrl(url);
  };

  //Theme for the textfield headings
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
            <LoanForm loanSearchUrl={loanSearchUrl} customTheme={theme} />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg9">
            {isLoading ? (
              <Text theme={theme}>Loading ...</Text>
            ) : (
              <Loans loadData={loans} customTheme={theme} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
