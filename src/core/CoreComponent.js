import React from "react";

import FooterSection from "../pages/sections/footer/FooterSection";

class CoreComponent extends React.Component {
  render() {
    const children = this.props.children;

    return (
      <React.Fragment>
        <div className={"index-content"}>
          {React.cloneElement(children, {})}
          <FooterSection />
        </div>
      </React.Fragment>
    );
  }
}

export default CoreComponent;
