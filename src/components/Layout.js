import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/Footer';

function Layout(props) {
  const { children } = props;

  return (
    <div className="index-content">
      {React.cloneElement(children, {})}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
