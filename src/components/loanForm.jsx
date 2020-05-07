import React, { useState } from "react";
import "../App.css";
import {
  Stack,
  Text,
  TextField,
  PrimaryButton,
  DefaultButton,
  Dropdown,
} from "@fluentui/react";
import { initializeIcons } from "@uifabric/icons";
initializeIcons();

const LoanForm = (props) => {
  const [ratesVal, setRates] = useState(0);
  const [creditScoreVal, setDropdown] = useState("");

  const handleInputChange = (event) => {
    setRates(event.target.value);
  };

  const handleDropdownChange = (event, item) => {
    setDropdown({ ...creditScoreVal, creditScore: item });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!creditScoreVal.creditScore) return;
    props.loanSearchUrl(
      `http://localhost:3000/loans?creditScore_gte=${
        creditScoreVal.creditScore.low
      }&creditScore_lte=${creditScoreVal.creditScore.high}&rate=${parseFloat(
        ratesVal
      )}`
    );
  };

  const refreshPage = (event) => {
    window.location.reload();
  };

  return (
    <Stack tokens={{ childrenGap: 20, padding: 20 }}>
      <Text theme={props.customTheme}>Search Loans </Text>
      <TextField
        label="Rate of interest"
        required
        type="number"
        name="rate"
        data-testid="rateField"
        value={ratesVal}
        onChange={handleInputChange}
      />
      <Dropdown
        placeholder="Select an option"
        label="What is your credit score? "
        data-testid="creditScoreField"
        options={[
          { key: 1, low: 750, high: 850, text: "750 - 850" },
          { key: 2, low: 700, high: 749, text: "700 - 749" },
          { key: 3, low: 649, high: 699, text: "649 - 699" },
          { key: 4, low: 648, high: 0, text: "648 or Less" },
        ]}
        required
        name="creditScore"
        onChange={handleDropdownChange}
      />
      <Stack horizontal tokens={{ childrenGap: 20 }} horizontalAlign="center">
        <PrimaryButton
          text="Search"
          allowDisabledFocus
          data-testid="searchButton"
          onClick={submitForm}
          disabled={ratesVal === "" || creditScoreVal === ""}
        />
        <DefaultButton
          text="Refresh"
          allowDisabledFocus
          data-testid="refreshButton"
          onClick={refreshPage}
        />
      </Stack>
    </Stack>
  );
};

export default LoanForm;
