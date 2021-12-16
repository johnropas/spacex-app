import React from 'react';
import './View.scss';

const View = (props: any) => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="no-padding">
            <div className="main">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
