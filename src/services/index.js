export default async function fetchAPI(url) {
  const response = await fetch(url).then((res) => res.json());
  return response;
}
