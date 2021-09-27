import React from 'react';
import PropTypes from 'prop-types';
import RecommendedCard from './RecommendedCard';

const DetailsRecommended = (props) => {
  const { recommended, recommendedDb } = props;
  const type = recommendedDb === 'drinks' ? 'bebidas' : 'comidas';

  const renderCard = () => recommended.map((x, i) => (<RecommendedCard
    key={ `recommendation${i}` }
    type={ type }
    item={ x }
    index={ i }
  />));

  return (
    <div>
      <h3>Recommendations</h3>
      {renderCard()}
    </div>
  );
};

DetailsRecommended.propTypes = {
  recommended: PropTypes.arrayOf(PropTypes.object).isRequired,
  recommendedDb: PropTypes.string.isRequired,
};

export default DetailsRecommended;
