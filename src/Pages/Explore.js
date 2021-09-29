import React from 'react';
import { useParams } from 'react-router-dom';
import Explorer from '../Components/Explorer';
import Header from '../Components/Header';
import LowerMenu from '../Components/LowerMenu';

const Explore = () => {
  const { type, filter } = useParams();
  console.log(`type: ${type}\nfilter: ${filter}`);

  let main;
  if (!filter && type === 'comidas') main = 'Explorar Comidas';
  else if (!filter && type === 'bebidas') main = 'Explorar Bebidas';
  else if (filter === 'ingredientes') main = 'Explorar Ingredientes';
  else if (filter === 'area') main = 'Explorar Origem';
  else main = 'Explorar';

  return (
    <div>
      <Header
        main={ main }
        left="profile"
        right={ filter === 'area' ? 'search' : 'none' }
      />
      {main}
      <Explorer />
      <LowerMenu />
    </div>
  );
};

export default Explore;
