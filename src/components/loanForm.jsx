import React, { useState } from "react";
import "../App.css";
import {
  Stack,
  Text,
  TextField,
  PrimaryButton,
  DefaultButton,
} from "@fluentui/react";

import { initializeIcons } from "@uifabric/icons";

initializeIcons();

const LoanForm = (props) => {
  const initialFormState = { creditScore: "", rate: "" };
  const [loans, setLoans] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setLoans({ ...loans, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (!loans.creditScore || !loans.rate) return;

    props.loanSearch(loans);
  };

  const refreshPage = (event) => {
    window.location.reload();
  };

  return (
    <Stack tokens={{ childrenGap: 20, padding: 20 }}>
      <Text theme={props.customTheme}>
        Search based on Credit Score and Rate of Interest
      </Text>

      <TextField
        label="What is your credit score? "
        required
        type="number"
        name="creditScore"
        value={loans.creditScore}
        onChange={handleInputChange}
      />
      <TextField
        label="Rate of interest"
        required
        type="number"
        name="rate"
        value={loans.rate}
        onChange={handleInputChange}
      />

      <Stack horizontal tokens={{ childrenGap: 20 }} horizontalAlign="center">
        <PrimaryButton
          text="Search"
          allowDisabledFocus
          disabled={loans.creditScore === "" || loans.rate === ""}
          onClick={submitForm}
        />
        <DefaultButton
          text="Refresh"
          allowDisabledFocus
          onClick={refreshPage}
        />
      </Stack>
    </Stack>
  );
};

export default LoanForm;
