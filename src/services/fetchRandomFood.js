async function fetchRandomFood() {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const fetchApi = await fetch(url);
  const { meals } = await fetchApi.json();
  return meals;
}

export default fetchRandomFood;
