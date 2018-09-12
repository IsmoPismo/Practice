class EasyHTTP {
  async get(url){
    const response = await fetch(url)
    const data = await response.json();
    return data
    }


  async post(url, data){
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  async put(url, data){
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  async delete(url){
    const res = fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });
    const message = await 'Deleted successfully';
    return message;
  }
}

export const http = new EasyHTTP();
