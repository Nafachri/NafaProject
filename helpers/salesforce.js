const jsforce = require("jsforce");

class Salesforce {
  #salesforceCredential = {
    loginUrl:
      process.env.ENV === "production"
        ? "https://login.salesforce.com"
        : "https://dream-efficiency-247.my.salesforce.com/",
    // AIN
    // https://test.salesforce.com/
    username: process.env.SALESFORCE_USERNAME,
    password: process.env.SALESFORCE_PASSWORD + process.env.SALESFORCE_TOKEN,
  };

  constructor() {
    this.SF = null;
  }

  loginSalesforce = async () => {
    try {
      const SFConnection = new jsforce.Connection({
        loginUrl: this.#salesforceCredential.loginUrl,
      });
      await SFConnection.login(
        this.#salesforceCredential.username,
        this.#salesforceCredential.password
      );
      this.SF = SFConnection;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("error login salesforce");
      throw error;
    }
  };
}

module.exports = Salesforce;
