describe("Helpers test (with setup and tear-down)", function () {
  beforeEach(function () {
    //init
    billAmtInput.value = 100;
    tipAmtInput.value = 5;
    submitPaymentInfo();
  });

  it("should calculate the tip percentage", function () {
    expect(sumPaymentTotal("tipPercent")).toEqual(5);
  });

  afterEach(function () {
    //teardown logic
    billAmtInput.value = "";
    tipAmtInput.value = "";
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    paymentId = 0;
  });
});
