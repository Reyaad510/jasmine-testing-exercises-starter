it("should calculate the monthly rate correctly", function () {
  const loanValues = {
    amount: 100000,
    years: 10,
    rate: 7.5,
  };
  expect(calculateMonthlyPayment(loanValues)).toEqual("624.53");
});

it("should return a result with 2 decimal places", function () {
  const loanValues = {
    amount: 123456,
    years: 7,
    rate: 9.5,
  };
  expect(calculateMonthlyPayment(loanValues)).toEqual("976.84");
});

it("should be able to calculate with high loan amounts", function () {
  const loanValues = {
    amount: 200999,
    years: 7,
    rate: 9.5,
  };
  expect(calculateMonthlyPayment(loanValues)).toEqual("1590.73");
});
