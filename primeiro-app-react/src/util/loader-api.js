export default async function LoadApi(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error("Erro ao buscar dados:", error));
}
