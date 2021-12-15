import React from 'react';
import { Switch, Route } from 'react-router-dom';
import c from '../../helpers/constants';
import Dashboard from '../../views/Dashboard';
import Login from '../../views/Login';
import Products from '../../views/Products';
import Search from '../../views/Search';
import Cart from '../../views/Cart';
import Orders from '../../views/MyOrders';
import OrderConfirmation from '../../views/OrderConfirmation';
import Account from '../../views/MyAccount';
import About from '../../views/About';
import Contact from '../../views/Contact';
import Payments from '../../views/Payments';
import CurrentBalance from '../../views/CurrentBalance';
import TermsOfSale from '../../views/TermsOfSale';
import PrivacyPolicy from '../../views/PrivacyPolicy';
import UpdateAccountInfo from '../../views/Update';
import Statements from '../../views/Statements';
import IndividualProduct from '../../views/IndividualProduct';
import Cookies from '../../views/Cookies';

const Router = () => {
  return (
        <Switch>
            <Route exact path={c.APP_ROUTES.DASHBOARD} component={Dashboard}/>
            <Route exact path={c.APP_ROUTES.ABOUT} component={About}/>
            <Route exact path={c.APP_ROUTES.PRODUCTS} component={Products}/>
            <Route exact path={c.APP_ROUTES.PAYMENTS} component={Payments}/>
            <Route exact path={c.APP_ROUTES.TERMS} component={TermsOfSale}/>
            <Route exact path={c.APP_ROUTES.PRIVACY} component={PrivacyPolicy}/>
            <Route exact path={c.APP_ROUTES.PAYMENTS} component={CurrentBalance}/>
            <Route exact path={c.APP_ROUTES.STATEMENTS} component={Statements}/>
            <Route exact path={c.APP_ROUTES.SEARCH} component={Search}/>
            <Route exact path={c.APP_ROUTES.CART} component={Cart}/>
            <Route exact path={c.APP_ROUTES.ORDERS} component={Orders}/>
            <Route exact path={c.APP_ROUTES.ACCOUNT} component={Account}/>
            <Route exact path={c.APP_ROUTES.UPDATE_ACCOUNT_INFO} component={UpdateAccountInfo}/>
            <Route exact path={c.APP_ROUTES.ORDER_CONFIRMATION} component={OrderConfirmation}/>
            <Route exact path={c.APP_ROUTES.CONTACT} component={Contact}/>
            <Route exact path={c.APP_ROUTES.LOGIN} component={Login}/>
            <Route exact path={c.APP_ROUTES.PRODUCT_CUT} component={IndividualProduct}/>
            <Route exact path={c.APP_ROUTES.COOKIES} component={Cookies}/>
        </Switch>
  );
};

export default Router;
