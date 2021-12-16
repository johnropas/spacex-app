import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import c from '../../helpers/constants';
import Home from '../../views/Home';

const MyRouter = () => {
  return (
        <Switch>
            <Route exact path={c.APP_ROUTES.HOME} component={Home}/>
        </Switch>
  );
};

export default MyRouter;
