import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import RecommendedCard from './RecommendedCard';

const DetailsRecommended = (props) => {
  const [current, setCurrent] = useState(0);
  const { recommended, recommendedDb } = props;
  const type = recommendedDb === 'drinks' ? 'bebidas' : 'comidas';

  const renderCard = () => recommended.map((x, i) => (<RecommendedCard
    key={ `recommendation${i}` }
    type={ type }
    item={ x }
    index={ i }
    current={ current }
  />));

  return (
    <div>
      <h3>Recommendations</h3>
      <Carousel itemsToShow={ 2 } onChange={ (currentItem) => setCurrent(currentItem) }>
        {renderCard()}
      </Carousel>
    </div>
  );
};

DetailsRecommended.propTypes = {
  recommended: PropTypes.arrayOf(PropTypes.object).isRequired,
  recommendedDb: PropTypes.string.isRequired,
};

export default DetailsRecommended;
