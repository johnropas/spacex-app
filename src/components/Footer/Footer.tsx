import React, { useEffect } from 'react';
import './Footer.scss';
import c from '../../helpers/constants';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomer } from '../../selectors/Customer';
import { fetchCustomer } from '../../actions/Customer';
import _ from 'lodash';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const dispatch = useDispatch();
  const customer = useSelector(getCustomer);
  useEffect(() => {
    dispatch(fetchCustomer());
  }, [dispatch]);

  return (
    <div className="footer">
      <div className="footer__top">
        <div className=" row footer__top__first">
          <div className="col-lg-4 col-md-6">
            <div className="padding-bottom">
              <span>
                <b>Likewise Floors</b>
              </span>
            </div>

            <p>
              {_.startCase(_.toLower(customer?.branch_name))}<br />
              {_.startCase(_.toLower(customer?.branch_address1))},&nbsp;
              {_.startCase(_.toLower(customer?.branch_town))},&nbsp;
              {customer?.pcode}<br />
              tel: {customer?.branch_phone}
            </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="padding-bottom">
              <span>
                <b>Navigation</b>
              </span>
            </div>
            <ul style={{ padding: 0 }}>
              <li><Link to={c.APP_ROUTES.PRODUCTS} className="footer-link">Products</Link></li>
              <li><Link to={c.APP_ROUTES.ORDERS} className="footer-link">Orders</Link></li>
              <li><Link to={c.APP_ROUTES.ABOUT} className="footer-link">About</Link></li>
              <li><Link to={c.APP_ROUTES.CONTACT} className="footer-link">Contact</Link></li>
              <li><Link to={c.APP_ROUTES.ACCOUNT} className="footer-link">My Account</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="padding-bottom">
              <span>
                <b>Legal</b>
              </span>
            </div>
            <ul style={{ padding: 0 }}>
              <li><Link to={c.APP_ROUTES.COOKIES} className="footer-link">Cookies</Link></li>
              <li><Link to={c.APP_ROUTES.PRIVACY} className="footer-link">Privacy Policy</Link></li>
              <li><Link to={c.APP_ROUTES.TERMS} className="footer-link">Terms and Conditions</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="padding-bottom">
              <span>
                <b>Help and Support</b>
              </span>
            </div>

            <p>
              For more information or assistance, please contact our team.<br />
              Office: {customer?.branch_phone}<br/>
              Email: <a href={customer?.branch_email}>{customer?.branch_email}</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom__copyright">
          <p>© 2021 Likewise PLC. All Rights Reserved.</p>
        </div>
        <div onClick={scrollToTop} className="footer-bottom__scroll">
          <p>Back to top</p>
          <IoIosArrowUp style={{ marginLeft:'10px' }}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
