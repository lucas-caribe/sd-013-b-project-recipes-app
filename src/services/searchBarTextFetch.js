export default function searchBarTextFetch(value, inputText, setApiRadio, setInputRadio) {
  switch (value) {
  case 'Ingrediente':
    setInputRadio(value);
    if (window.location.pathname === '/comidas') {
      const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputText}`;
      fetch(URL)
        .then((response) => response.json()).then((response) => setApiRadio(response));
    } else {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputText}`;
      fetch(URL)
        .then((response) => response.json()).then((response) => setApiRadio(response));
    }
    break;
  case 'Nome':
    setInputRadio(value);
    if (window.location.pathname === '/comidas') {
      const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
      fetch(URL)
        .then((response) => response.json()).then((response) => setApiRadio(response));
    } else {
      const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`;
      fetch(URL)
        .then((response) => response.json()).then((response) => setApiRadio(response));
    }
    break;
  case 'Primeira letra':
    setInputRadio(value);
    if (inputText.length === 1) {
      if (window.location.pathname === '/comidas') {
        const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputText[0].toLowerCase()}`;
        fetch(URL)
          .then((response) => response.json()).then((response) => setApiRadio(response));
      } else {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputText}`)
          .then((response) => response.json()).then((response) => setApiRadio(response));
      }
    } else {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
      window.location.reload();
    }
    break;
  default:
    break;
  }
}
