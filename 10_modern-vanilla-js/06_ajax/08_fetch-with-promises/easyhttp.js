class EasyHTTP {
  get(url){
    return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(json => resolve(json))
    .catch(err => reject(err))
    })
  }

  post(url, data){
    return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => resolve(json))
    .catch(err => reject(err))
    })
  }

  put(url, data){
    return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => resolve(json))
    .catch(err => reject(err))
    })
  }

  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('DELETED'))
      .catch(err => reject(err))
    })
  }
}
