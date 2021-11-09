import { Fragment, ReactChild, ReactChildren } from 'react';

import MainHeader from './main-header';

interface Children { 
children: ReactChildren | ReactChild;


}

function Layout({children} : Children) : JSX.Element {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;