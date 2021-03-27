import React from 'react';
import Section from 'components/Section';

function NotFound() {
  return (
    <>
      <Section styling="top">
        <h1>Page Not Found</h1>
      </Section>
      <Section>
        <h>You have reached an unknown url, please go back.</h>
      </Section>
    </>
  );
}

export default NotFound;
