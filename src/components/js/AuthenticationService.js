import axios from "axios";

class AuthenticationService {
  executeBasicAuthService(userName, password) {
    return axios.get(`http://localhost:8080/basicauth`, 
    {
      headers: {
        authorization: this.createBasicAuthToken(userName, password),
        'Access-Control-Allow-Origin' : '*'
      },
    }
    );
  }
  registerLogin(userName, password) {
    console.log("registerLogin:::" + userName);
    sessionStorage.setItem("AuthenticatedUser", userName);
    this.setupAxiosInterceptors(this.createBasicAuthToken(userName, password));
  }

  createBasicAuthToken(userName, password) {
    return "Basic " + window.btoa(userName + ":" + password);
  }

  logout() {
    console.log("logout userName:::");
    sessionStorage.removeItem("AuthenticatedUser");
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("AuthenticatedUser");
    if (user == null) {
      return false;
    }
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem("AuthenticatedUser");
    if (user == null) {
      return "";
    }
    return user;
  }

  setupAxiosInterceptors(basicAuthHeader) {
      console.log("In interceptors..")
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
