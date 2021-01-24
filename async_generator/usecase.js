async function* fetchUsers() {
  let url = "https://jsonplaceholder.typicode.com/users/1";

  while (url) {
    let response = await fetch(url);
    let data = await response.json();

    let userId = url.split("/")[url.split("/").length - 1];

    url = url.replace(/[0-9]+$/, ++userId);

    yield data;
  }
}

(async () => {
  for await (let user of fetchUsers()) {
    setTimeout(() => console.log(user), 0);
  }
})();
