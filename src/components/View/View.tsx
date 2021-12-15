import React from 'react';
import './View.scss';
import Header from '../Header';
import Footer from '../Footer';
import MobileMenuBottom from '../MobileBottomMenu';

const View = (props: any) => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="no-padding">
            <Header />
            <div className="main">{props.children}</div>
            <div className="footer-mobile-nav">
              <MobileMenuBottom />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
