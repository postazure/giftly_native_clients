let hostname = 'http://localhost:3000';
let instance;

export default class ApiClient {
  static est(hostname){
    if (instance) {
      return instance;
    } else {
      return instance = new ApiClient(hostname);
    }
  }

  constructor(hostname) {
    this.hostname = hostname;
    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  setUserToken(token) {
    let headers = this.getHeaders();
    headers['User-Token'] = token;
    this.setHeaders(headers);
    return token;
  }

  clearUserToken() {
    let headers = this.getHeaders();
    delete headers['User-Token'];
    this.setHeaders(headers);
  }

  setHeaders(obj) {
    this.headers = obj;
    return this.headers;
  }

  getHeaders() {
    return this.headers;
  }

  get(uriInfo, cb){
    let url = this._buildURL(uriInfo);
    let headers = uriInfo.headers || this.getHeaders();

    fetch(url,{
      method: 'GET',
      headers: headers
    })
    .then((response) => response.json())
    .then((responseData) => {
      cb(responseData)
    })
    .done();
  }

  post(uriInfo, data, cb) {
    let url = this._buildURL(uriInfo);
    let headers = uriInfo.headers || this.getHeaders();
    let jsonData = JSON.stringify(data)

    fetch(url,{
      method: 'POST',
      headers: headers,
      body: jsonData
    })
      .then((response) => response.json())
      .then((responseData) => {
        cb(responseData)
      })
      .done();
  }

  _buildURL(uriInfo) {
    let path = uriInfo.pathname;
    if (path) {
      return path;
    } else {

      let filteredUrl = [
        hostname, uriInfo.resource, uriInfo.id, uriInfo.action
      ].filter((val) => {
          return val !== undefined;
        }
      );

      return filteredUrl.join('/')
    }
  }
}
