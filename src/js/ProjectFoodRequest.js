export default class ProjectFoodRequest {
  constructor(url) {
    this.url = url;
    this.contentTypeHeader = { 'Content-Type': 'application/json;charset=utf-8' };

    this.urlContactData = `${this.url}contactData`;
    this.urlFoodData = `${this.url}foodData`;

    this.getReq = 'GET';
    this.postReq = 'POST';
    this.deleteReq = 'DELETE';
    this.putReq = 'PUT';

    this.needData = null;
  }

  async getData(getURL) {
    const response = await fetch(`${getURL}`);
    if (response.status >= 200 && response.status < 300) {
      this.needData = await response.json();
      return this.needData;
    }
    return `ERROR!!, ${await response.json()}, ${response.status}`;
  }

  async projectFoodRequestControl() {
    console.log(await this.getData(this.urlContactData));
    console.log(await this.getData(this.urlFoodData));
  }
}
