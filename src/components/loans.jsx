import React from "react";

import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  Separator,
  Text,
  Stack,
} from "@fluentui/react";

const Loans = (props) => {
  if (props.loansData.length === 0)
    return (
      <Text theme={props.customTheme}>
        No Loans found for this score and rate.
      </Text>
    );
  return (
    <Stack tokens={{ childrenGap: 20, padding: 20 }}>
      <Separator theme={props.customTheme}>
        Loans found : {props.loansData.length}
      </Separator>
      <DetailsList
        items={props.loansData}
        layoutMode={DetailsListLayoutMode.justified}
        selectionMode={SelectionMode.none}
      ></DetailsList>
    </Stack>
  );
};

export default Loans;
