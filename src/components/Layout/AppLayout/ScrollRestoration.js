import { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const ScrollIntoView = ({ children, location }) => {
  const prevLocation = useRef();

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      const element = document.getElementById('song-nepal-main-section')
      element.scrollTo({ top: 0, behavior: 'smooth' });
      prevLocation.current = location.pathname;
    }
  }, [location]);

  return children;
};

ScrollIntoView.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object
};

export default withRouter(ScrollIntoView);