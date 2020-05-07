import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import useFetch from "../useFetch";

test("useFetch performs GET request", async () => {
  const initialValue = [];
  /* 
  Mock network call. Instruct axios-mock-adapter 
  to return with expected data and status code of 200.
  */
  const mock = new MockAdapter(axios);

  const mockData = "response";
  const url = "http://mock";
  mock.onGet(url).reply(200, mockData);

  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch(url, initialValue)
  );

  expect(result.current[0].loans).toEqual([]);
  expect(result.current[0].isLoading).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current[0].loans).toEqual("response");
  expect(result.current[0].isLoading).toBeFalsy();
});
