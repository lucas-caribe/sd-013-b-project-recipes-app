import React from 'react';
import PropTypes from 'prop-types';

const DetailsVideo = (props) => {
  const { videoUrl } = props;
  return (
    <div>
      <video data-testid="video" width="400" height="250" controls>
        <source src={ videoUrl } type="video/mp4" />
        <track
          src="captions_en.vtt"
          kind="captions"
          srcLang="en"
          label="english_captions"
        />
      </video>
    </div>
  );
};

DetailsVideo.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default DetailsVideo;
