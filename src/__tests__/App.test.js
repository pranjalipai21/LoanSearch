import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, screen, wait } from "@testing-library/react";

import App from "../App";

test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("App loads with initial state empty textfields and disabled search button and a Table with values", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("rateField").textContent).toBe("");
  expect(getByTestId("creditScoreField").firstChild.textContent).toBe(
    "Select an option"
  );
  expect(getByTestId("searchButton")).toHaveClass("is-disabled");
});

test("When user form is updated and button is clicked", async () => {
  const { getByTestId } = render(<App />);

  const inputRate = getByTestId("rateField");

  const newRate = 6;
  fireEvent.change(inputRate, { target: { value: newRate } });
  fireEvent.click(getByTestId("creditScoreField"));
  fireEvent.click(screen.getByTitle("700 - 749"));
  fireEvent.click(getByTestId("searchButton"));

  expect(getByTestId("isLoading").textContent).toBe("Loading ...");
});
