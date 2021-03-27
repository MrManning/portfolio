import React from 'react';
import PropTypes from 'prop-types';

function Section(props) {
  const { title, styling, children } = props;

  return (
    <div id={title} className={`section section--${styling}`}>
      <div className={`content ${title}`}>
        {children}
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  styling: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  title: 'Section',
  styling: 'default',
};

export default Section;
