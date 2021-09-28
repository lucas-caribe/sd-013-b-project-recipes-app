import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

const copy = require('clipboard-copy');

// requisito 63 
function copiaToClipBoard(id) {
  copy(`https://AQUI-VAI-O-LINK/${id}`); 
}


function FavoritesRe() {
  return (
   
    <div>
      {/* //imagem do avatar */}
      <img></img>
      <p>Receitas Favoritas</p>
      
      {/* requisito 65 filtro removido */}
      <button type="submit" data-testid="filter-by-all-btn">All</button>

      {/* // botao que vai filtrar por comida falta a logica do onclick */}
      <button type="submit" data-testid="filter-by-food-btn">Food</button>

       {/* // botao que vai filtrar por bebida falta a logica do onclick  */}
      <button type="submit" data-testid="filter-by-drink-btn">Drink</button>
      <div>

      {/* req 61 condicao se for comida renderiza isso  */}
        <div>
        {/* //requisito 66 se clicar na imagem e no nome vai pra tela de detalhes */}
        <img src="" data-testid="${index}-horizontal-image" alt=""/>
       
        <h1 data-testid="${index}-horizontal-name">{/* ////aqui é o nome */}</h1>
        <p data-testid="${index}-horizontal-top-text"> {/* //aqui é categoria  */}</p>
        <p data-testid="${index}-horizontal-top-text"> {/* //aqui é area  */}</p>
        <p data-testid="${index}-horizontal-done-date">Feita em</p>
        {/* // requisito 63  */}
        <button type="button" onClick={ () => copiaToClipBoard(id da comida passar aqui) }>
        <img 
          src="src/images/shareIcon.svg"
          data-testid="${index}-horizontal-share-btn">
          {/* //compartilhar*/}
        </img>
        </button>
        {/* requisito 64  tag da receita (se preccisar) data-testid="${index}-horizontal-share-btn" */}
        <img src="/blackHeartIcon.svg">{/* //coração (favorita)   */}</img>
      </div>

    
      {/* req 62  //condicao se for bebida renderiza isso  */}
         <div>
         {/* // imagem da receita  */}
         {/* //requisito 66 se clicar na imagem e no nome vai pra tela de detalhes */}
        <img src="" data-testid="${index}-horizontal-image" alt=""/>
        
        <h1 data-testid="${index}-horizontal-name">{/* ////aqui é o nome */}</h1>
        <p data-testid="${index}-horizontal-done-date">{/*é alcolica ? */}</p>

         {/* //compartilhar */}
        <button type="button" onClick={ () => copiaToClipBoard({/*id da comida passar aqui)*/ }>
        <img 
          src="src/images/shareIcon.svg"
          data-testid="${index}-horizontal-share-btn">
        </img>
        </button>

        {/* requisito 64  tag da receita (se preccisar) data-testid="${index}-horizontal-share-btn" */}
        <img src="/blackHeartIcon.svg">{/* //coração  (favorita)  */}</img>
      </div>
   </div>    
  );
}
