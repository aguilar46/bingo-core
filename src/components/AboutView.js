/**
 * Author: RSP Aguilar
 * Created Date: 2024-01-02T00:18:17.231Z
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  height: 3em;
`;
const AboutView = (props) => {
  const { version, appLogo, appName, author, email, twitter } = props;
  return (
    <div>
      <StyledImage src={appLogo} alt="jazz logo" />
      <br />
      <br />
      <div>{appName}</div>
      <div>by {author}</div>
      <br />
      <div>email: {email}</div>
      <div>Twitter (X): {twitter}</div>
      <br />
      <div>version: {version}</div>
    </div>
  );
};

AboutView.propTypes = {
  version: PropTypes.string,
  appLogo: PropTypes.string,
  appName: PropTypes.string,
  author: PropTypes.string,
  email: PropTypes.string,
  twitter: PropTypes.string,
};
export default AboutView;
