import iziToast from 'izitoast';

const API_KEY = '45273601-269fa7243c6da01438f09c62a';

export const getImagesFromAPI = (searchQuery) => {
  const requestQuery = `key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal`;

  return fetch(`https://pixabay.com/api?${requestQuery}`, {
    referrerPolicy: 'unsafe-url',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
        throw new Error(response.statusText);
      })
    .then((data) => {
      return data.hits;
    })
    .catch(() => {
      iziToast.error('Error while fetching images. Please try again!');
    });
}