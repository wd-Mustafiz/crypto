import React from 'react';
import './App.css'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Navbar , HomePage , Exchages , Cryptocurrency , CryptoDetails , News } from './Components'
import Layout from 'antd/lib/layout/layout';
import { Space, Typography } from 'antd';
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/exchanges">
                <Exchages />
              </Route>
              <Route exact path="/cryptocurrency">
                <Cryptocurrency />
              </Route>

              <Route exact path="/crypto/:coinid">
                <CryptoDetails />
              </Route>

              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      

      <div className="footer">
        <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
          Cryptoverse <br/>
          All rights reserved
        </Typography.Title>

        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
    </div>
  );
};

export default App;
