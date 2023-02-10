//TODO: async/await

const postData = async (url, data) => {
  let resolve = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  if (!resolve.ok) {
    throw new Error();
  }

  return await resolve.json(); //возвращаем промис
};

async function getResource(url) {
  let res = await fetch(url);
  //проверка если не ок то ошибка
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
}

export { postData, getResource };
