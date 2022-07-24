const API_URL = 'https://26.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onFail) => {
  fetch(`${API_URL}/data`)
    .then((response) => {
      if (response.ok) {
        response.json()
          .then((photos) => {
            onSuccess(photos);});
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    API_URL,
    {
      method: 'POST',
      'Content-Type': 'multipart/form-data',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
