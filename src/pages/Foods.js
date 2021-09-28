import React, { useContext, useEffect } from 'react';
import FoodCardSpace from '../component/FoodCardSpace';
import Context from '../context/Context';

function Foods() {
  const {
    setShowHeader,
    setTitleName,
    setShowSearchHeaderIcon,
    setShowFooter,
    setCategoryFoodButtons } = useContext(Context);

  useEffect(() => {
    async function fetchCategoryButtons() {
      const categoryResult = await (await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')).json();
      setCategoryFoodButtons([...categoryResult.categories]);
    }
    fetchCategoryButtons();
  }, []);

  useEffect(() => {
    function handleHeader() {
      setShowHeader(true);
      setShowSearchHeaderIcon(true);
      setShowFooter(true);
      setTitleName('Comidas');
    }
    handleHeader();
  }, []);

  return (
    <main>
      <FoodCardSpace />
    </main>
  );
}
export default Foods;
