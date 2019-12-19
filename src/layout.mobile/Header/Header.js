import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import TheTopbar from './TheTopbar';
import TheMenu from './TheMenu';

const Container = styled.div`
  height: 6.7rem;
  z-index: 100;
`;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: inherit;
`;

const Header = ({ className }) => {
  return (
    <Container className={className}>
      <Wrapper>
        <TheTopbar />
        <TheMenu />
      </Wrapper>
    </Container>
  );
};

export default Header;
