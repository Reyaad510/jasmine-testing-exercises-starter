describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should append a new table row with server name", function () {
    submitServerInfo();
    updateServerTable();

    let serverNameUI = document.querySelector("#serverTable tbody tr td");
    expect(serverNameUI.innerText).toEqual("Alice");
  });

  afterEach(function () {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = {};
  });
});
