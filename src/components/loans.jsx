import React, { useState, useEffect } from "react";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  Separator,
  Stack,
} from "@fluentui/react";

const Loans = (props) => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    setLoans(props.loadData);
  }, [props.loadData]);

  return (
    <Stack tokens={{ childrenGap: 20, padding: 20 }}>
      <Separator theme={props.customTheme}>
        Loans found : {loans.length}
      </Separator>
      <DetailsList
        items={loans}
        layoutMode={DetailsListLayoutMode.justified}
        selectionMode={SelectionMode.none}
      ></DetailsList>
    </Stack>
  );
};

export default Loans;
