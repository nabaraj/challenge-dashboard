import { render, screen } from "@testing-library/react";
import { sortingChallenge } from "./utils";
import App from "./App";

test("test sortingChallenge", () => {
  const dummyData = [
    {
      rating: 14,
      registered: 1089589325175.3094,
    },
    { rating: 32, registered: 1651379053910.9229 },
    { rating: 3, registered: 666157597867.0438 },
  ];
  let result = sortingChallenge(dummyData, "date");
  expect(result).toEqual([
    { rating: 32, registered: 1651379053910.9229 },
    { rating: 14, registered: 1089589325175.3094 },
    { rating: 3, registered: 666157597867.0438 },
  ]);
});
test("test sortingChallenge", () => {
  const dummyData = [
    {
      rating: 14,
      registered: 1089589325175.3094,
    },
    { rating: 2, registered: 1651379053910.9229 },
    { rating: 3, registered: 666157597867.0438 },
  ];
  let result = sortingChallenge(dummyData, "rating");
  expect(result).toEqual([
    {
      rating: 14,
      registered: 1089589325175.3094,
    },
    { rating: 3, registered: 666157597867.0438 },
    { rating: 2, registered: 1651379053910.9229 },
  ]);
});
