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

  async addUser(formData, postURL) {
    const data = {
      name: formData.get('modalName').trim(),
      phone: formData.get('modalPhone').trim(),
      gender: formData.get('modalGender').trim(),
      height: formData.get('modalHeight').trim(),
      weight: formData.get('modalWeight').trim(),
      age: formData.get('modalAge').trim(),
      activ: formData.get('modalActiv').trim(),
    };
    const response = await fetch(postURL, {
      method: this.postReq,
      headers: this.contentTypeHeader,
      body: JSON.stringify(data),
    });
    if (response.status >= 200 && response.status < 300) {
      this.needData = await response.json();
      return this.needData;
    }
    return `ERROR!!, ${await response.json()}, ${response.status}`;
  }

  // async addFood(formData, postURL) {
  //   const data = { name: formData.get('name'), price: formData.get('price') };
  //   const response = await fetch(postURL, {
  //     method: this.postReq,
  //     headers: this.contentTypeHeader,
  //     body: JSON.stringify(data),
  //   });
  //   if (response.status >= 200 && response.status < 300) {
  //     this.needData = await response.json();
  //     return this.needData;
  //   }
  //   return `ERROR!!, ${await response.json()}, ${response.status}`;
  // }

  async getDataByID(getURL, id) {
    const response = await fetch(`${getURL}/${id}`);
    if (response.status >= 200 && response.status < 300) {
      this.needData = await response.json();
      return this.needData;
    }
    return `ERROR!!, ${await response.json()}, ${response.status}`;
  }

  async deleteDataByID(deleteURL, id) {
    const response = await fetch(`${deleteURL}/${id}`, {
      method: this.deleteReq,
      headers: this.contentTypeHeader,
    });
    if (response.status >= 200 && response.status < 300) {
      this.needData = await response.json();
      return this.needData;
    }
    return `ERROR!!, ${await response.json()}, ${response.status}`;
  }

  async projectFoodRequestControl() {
    console.log(this.url);
    // console.log(await this.getData(this.urlContactData));
    // // console.log(await this.getData(this.urlFoodData));

    // const id1 = '91dedc74-7357-4810-b9bc-ce0ea544c5e7';
    // console.log(await this.getDataByID(this.urlContactData, id1));

    // const id2 = 'd20a3585-2234-4e4d-a626-bfd36736c636';
    // console.log(await this.getDataByID(this.urlContactData, id2));

    // const id3 = '269ce89e-e714-4793-b5bb-01725db24e3c';
    // console.log(await this.getDataByID(this.urlContactData, id3));

    // console.log(await this.deleteDataByID(this.urlContactData, id1));
    // console.log(await this.deleteDataByID(this.urlContactData, id2));
    // console.log(await this.deleteDataByID(this.urlContactData, id3));

    // console.log(await this.getData(this.urlContactData));
  }
}
