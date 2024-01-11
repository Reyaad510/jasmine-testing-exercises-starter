describe("Payments test(with setup and teardown", function () {
  beforeEach(function () {
    // initalization logic
    billAmtInput.value = 20;
    tipAmtInput.value = 2;
  });

  it("should add bill amount and tip amounts", function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment1"]["billAmt"]).toEqual("20");
    expect(allPayments["payment1"].tipAmt).toEqual("2");
    expect(allPayments["payment1"].tipPercent).toEqual(10);
  });

  it("should not work if no bill/tip amounts not filled", function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(0);
  });

  afterEach(function () {
    //tear down logic
    paymentId = 0;
    allPayments = {};
    paymentTbody.innerHTML = "";
    billAmtInput.value = "";
    tipAmtInput.value = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
  });
});
