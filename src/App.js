import React from "react";
import { Text, createTheme } from "@fluentui/react";
import Loans from "./components/loans";
import LoanForm from "./components/loanForm";
import "./App.css";
import useFetch from "./useFetch";

function App() {
  const [{ loans, isLoading, isError }, setUrl] = useFetch(
    "http://localhost:3000/loans",
    []
  );

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
            {isError && (
              <Text
                theme={theme}
                data-testid="isError"
                style={{ color: "red" }}
              >
                Something went wrong ...
              </Text>
            )}
            {isLoading ? (
              <Text theme={theme} data-testid="isLoading">
                Loading ...
              </Text>
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
