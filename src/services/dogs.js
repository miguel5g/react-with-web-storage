async function getRandomDog() {
  return fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then((data) => ({
      image: data.message,
      name: data.message.split('/')[4],
    }));
}

export { getRandomDog };
