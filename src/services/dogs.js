function breadMapper([key, values]) {
  if (values.length === 0) return { name: key, value: key.toLowerCase() };

  return values.map((value) => ({
    name: `${key} ${value}`,
    value: `${key}/${value}`.toLowerCase(),
  }));
}

async function getAllBreads() {
  const data = await fetch('https://dog.ceo/api/breeds/list/all').then((response) =>
    response.json()
  );

  return Object.entries(data.message).flatMap(breadMapper);
}

async function getRandomDog(bread) {
  if (!bread) throw new Error('Invalid bread name');

  return fetch(`https://dog.ceo/api/breed/${bread}/images/random`)
    .then((response) => response.json())
    .then((data) => ({
      image: data.message,
      name: bread.split('/').join(' '),
    }));
}

export { getAllBreads, getRandomDog };
