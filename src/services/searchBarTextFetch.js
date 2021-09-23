export default function searchBarTextFetch(value, inputText, setApiRadio, setInputRadio) {
  switch (value) {
  case 'Ingrediente':
    setInputRadio(value);
    {
      const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputText}`;
      fetch(URL)
        .then((response) => response.json())
        .then((response) => setApiRadio(response));
    }
    break;
  case 'Nome':
    setInputRadio(value);
    {
      const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
      fetch(URL)
        .then((response) => response.json())
        .then((response) => setApiRadio(response));
    }
    break;
  case 'Primeira letra':
    setInputRadio(value);
    if (inputText.length === 1) {
      const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputText[0].toLowerCase()}`;
      fetch(URL)
        .then((response) => response.json())
        .then((response) => setApiRadio(response));
    } else {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
    break;
  default:
    break;
  }
}
