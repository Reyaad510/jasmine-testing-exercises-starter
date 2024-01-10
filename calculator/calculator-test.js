it("should calculate the monthly rate correctly", function () {
  const loanValues = {
    amount: 100000,
    years: 10,
    rate: 7.5,
  };
  expect(calculateMonthlyPayment(loanValues)).toEqual("624.53");
});

it("should return a result with 2 decimal places", function () {
  // ..
});

/// etc
