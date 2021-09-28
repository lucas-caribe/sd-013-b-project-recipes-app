async function fetchRandomDrinck() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const fetchApi = await fetch(url);
  const { drinks } = await fetchApi.json();
  return drinks;
}

export default fetchRandomDrinck;
