// Objeto que possui as URL padrao de cada tipo de API;
const endPoints = {
  foods: 'https://www.themealdb.com/api/json/v1/1/',
  drinks: 'https://www.thecocktaildb.com/api/json/v1/1/',
};

// Funcao que auxilia na requisicao de uma API;
export async function getResponse(URL) {
  try {
    const response = await fetch(URL);
    return response.json();
  } catch (error) {
    return 'Error';
  }
}

// Requisição padrão;
export const getDefaultData = (type) => {
  const apiURL = `${endPoints[type]}search.php?s=`;
  return getResponse(apiURL);
};

// Funcao que realizará uma requisicao para a API com os parametros selecionados e retornará o resultado ou um erro;
export async function fetchApiRecipes(filterSelect, text, type) {
  let url = `${endPoints[type]}search.php?`;
  if (filterSelect === 'i' || filterSelect === 'c') url = `${endPoints[type]}filter.php?`;

  const fetchUrl = `${url}${filterSelect}=${text}`;
  console.log(fetchUrl);
  return getResponse(fetchUrl);
}

// Funcao que retorna os detalhes de uma receita de acordo com o ID passado;
export async function getDetails(type, id) {
  const URL = endPoints[type];

  return getResponse(`${URL}lookup.php?i=${id}`);
}

// Funcao que retorna todas e apenas as categorias disponiveis da API;
export async function getCategories(type) {
  const URL = endPoints[type];
  return getResponse(`${URL}list.php?c=list`);
}
