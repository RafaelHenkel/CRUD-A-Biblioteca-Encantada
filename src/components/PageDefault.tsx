import React from 'react';
import MainDefaultStyled from './MainDefaultStyled';
import PageDefaultStyled from './PageDefaultStyled';

interface PageDefaultProps {
  children: React.ReactNode;
}

function PageDefault({ children }: PageDefaultProps) {
  return (
    <>
      <PageDefaultStyled>
        <MainDefaultStyled>{children}</MainDefaultStyled>
      </PageDefaultStyled>
    </>
  );
}

export default PageDefault;
