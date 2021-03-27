import React from 'react';
import PropTypes from 'prop-types';

function WorkItem(props) {
  const {
    period, company, jobTitle, children,
  } = props;

  return (
    <>
      <div className="work__list-style" />
      <div className="work__period">{period}</div>
      <div className="work__details">
        <h3>{company}</h3>
        <p>{jobTitle}</p>
        <p>{children}</p>
      </div>
    </>
  );
}

WorkItem.propTypes = {
  period: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default WorkItem;
