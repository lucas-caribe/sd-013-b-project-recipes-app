import React from 'react';
import {blackheart, drink, explore, meal, profile, rockglass, search, share, whiteheart} from './svg'


class Icon extends React.Component {
  renderIcon = () => {
    switch (this.props.icon) {
      case 'blackheart':
        return blackheart;
      case 'drink':
        return drink;
      case 'explore':
        return explore;
      case 'meal':
        return meal;
      case 'profile':
        return profile;
      case 'rockglass':
        return rockglass
      case 'search':
        return search
      case 'share':
        return share
      case 'whiteheart':
        return whiteheart                                      
            

      default:
        return <div></div>;
    }
  };
  render() {
    return <React.Fragment>{this.renderIcon()}</React.Fragment>;
  }
}

export default Icon;
