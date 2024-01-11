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

  it("should not create current Payment if no bill/tip amounts not filled", function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it("should append a new table with bill total, tip amount, and tip percent", function () {
    submitPaymentInfo();
    let paymentUI = document.querySelectorAll("#paymentTable tbody tr td");
    expect(paymentUI[0].innerText).toEqual("$20");
    expect(paymentUI[1].innerText).toEqual("$2");
    expect(paymentUI[2].innerText).toEqual("10%");
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
