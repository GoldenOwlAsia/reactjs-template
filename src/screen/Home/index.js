import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import { getAllProducts } from '../../actions';

import './style.css';

class Home extends React.PureComponent {
  componentWillMount() {
    this.props.getAllProducts();
  }

  render() {
    return (
      <div className="home-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
        <span className="home-title">Home Screen</span>
        <div>
          <h2>Shopping Cart Example</h2>
          <hr />
          <ProductsContainer />
          <hr />
          <CartContainer />
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), { getAllProducts })(Home);
