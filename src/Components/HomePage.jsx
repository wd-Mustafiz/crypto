import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getCoinDetails } from '../redux/Actions/coin.action'
import {Typography,Row,Col,Statistic, Spin} from 'antd';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Cryptocurrency, News } from './';
const {Title} = Typography;

const HomePage = () => {
    const {loading, stats} = useSelector(state => state.coinReducer)
    
    return (
        <>
            <Title level={2} className="heading">Gloval Crypto Stats</Title>
            {loading ? <div className="loader">
                <Spin />
            </div> :  <>
                <Row>
                    <Col span={12}>
                        <Statistic title='Total Cryptocurrencies' value={stats.total} />
                    </Col>    
                    <Col span={12}>
                        <Statistic title='Total Exchanges' value={stats.totalExchanges ? millify(stats.totalExchanges): ''} />
                    </Col>   
                    <Col span={12}>
                        <Statistic title='Total Market Cap' value={stats.totalMarketCap ? millify(stats.totalMarketCap) : ''} />    
                    </Col> 
                    <Col span={12}>
                        <Statistic title='Total 24hr Vloume' value={stats.total24hVolume ? millify(stats.total24hVolume): ''} />
                    </Col>
                    <Col span={12}>
                        <Statistic title='Total Markets' value={stats.totalMarkets ? millify(stats.totalMarkets) : ''} /> 
                    </Col> 
                        
    
                </Row>
              </>   
            }

            <div className="home-heading-container">
                <Title level={3} className="home-title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={5} className="show-more"><Link to="/cryptocurrency">Show more...</Link></Title>
            </div>
            <Cryptocurrency simplified /> 
            <div className="home-heading-container">
                <Title level={3} className="home-title">Leatest Crypto News</Title>
                <Title level={5} className="show-more"><Link to="/news">Show more...</Link></Title>
            </div>
            <News simplified />
           
        </>
    );
};

export default HomePage;