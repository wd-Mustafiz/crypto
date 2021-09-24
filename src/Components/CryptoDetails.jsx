import React, { useEffect } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, CheckOutlined, NumberOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getCryptoDetails } from '../redux/Actions/details.action'
const {Title,Text} = Typography
const CryptoDetails = () => {
    const dispatch = useDispatch()
    const {coinid} = useParams()
    useEffect(() =>{
        dispatch(getCryptoDetails(coinid))
    },[coinid])
    const {detailsLoad,details} = useSelector(state => state.detailsReducer)
    
    if(detailsLoad) return 'loading.....'
    
    return (

    <Col className="coin-detail-container">
            <Col className="coin-heading-container">
              <Title level={2} className="coin-name">
                {details.name} ({details.slug}) Price
              </Title>
              <p>{details.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
            </Col>
            <Col className="stats-container">
              <Col className="coin-value-statistics">
                <Col className="coin-value-statistics-heading">
                  <Title level={3} className="coin-details-heading">{details.name} Value Statistics</Title>
                  <p>An overview showing the statistics of {details.name}, such as the base and quote currency, the rank, and trading volume.</p>
                </Col>
                

                <Col className="coin-stats">
                    <Col className="coin-stats-name">
                        <Text><DollarCircleOutlined /></Text>
                        <Text>Price to USD</Text>
                    </Col>
                    <Text className="stats">${details.price && millify(details.price)}</Text>
                </Col>
                <Col className="coin-stats">
                    <Col className="coin-stats-name">
                        <Text><NumberOutlined /></Text>
                        <Text>Rank</Text>
                    </Col>
                    <Text className="stats">${details.rank && millify(details.rank)}</Text>
                </Col>

                <Col className="coin-stats">
                    <Col className="coin-stats-name">
                        <Text><DollarCircleOutlined /></Text>
                        <Text>24h Volume</Text>
                    </Col>
                    <Text className="stats">${details.volume && millify(details.volume)}</Text>
                </Col>

              </Col>
              <Col className="other-stats-info">
                <Col className="coin-value-statistics-heading">
                  <Title level={3} className="coin-details-heading">Other Stats Info</Title>
                  <p>An overview showing the statistics of {details.name}, such as the base and quote currency, the rank, and trading volume.</p>
                </Col>

                    <Col className="coin-stats">
                        <Col className="coin-stats-name">
                            <Text><FundOutlined /></Text>
                            <Text>Number Of Markets</Text>
                        </Col>
                        <Text className="stats">{details.numberOfMarkets}</Text>
                    </Col>
                    <Col className="coin-stats">
                        <Col className="coin-stats-name">
                            <Text><MoneyCollectOutlined /> </Text>
                            <Text>Number Of Exchangess</Text>
                        </Col>
                        <Text className="stats">{details.numberOfExchanges}</Text>
                    </Col>

                    <Col className="coin-stats">
                        <Col className="coin-stats-name">
                            <Text><ExclamationCircleOutlined /> </Text>
                            <Text>Aprroved Supply</Text>
                        </Col>
                        <Text className="stats">{details.approvedSupply ? <CheckOutlined /> : <StopOutlined />}</Text>
                    </Col>

                    <Col className="coin-stats">
                        <Col className="coin-stats-name">
                            <Text><ExclamationCircleOutlined /> </Text>
                            <Text>Total Supply</Text>
                        </Col>
                        <Text className="stats">{details.totalSupply && millify(details.totalSupply)}</Text>
                    </Col>
              </Col>
            </Col>
            <Col className="coin-desc-link">
              <Row className="coin-desc">
                <Title level={3} className="coin-details-heading">What is {details.name}?</Title>
                {HTMLReactParser(details.description ? details.description : '')}
              </Row>
              <Col className="coin-links">
                <Title level={3} className="coin-details-heading">{details.name} Links</Title>
                {details.links?.map((link,idx) => (
                  <Row className="coin-link" key={link.name}>
                    <Title level={5} className="link-name">{link.type}</Title>
                    <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                  </Row>
                ))}
              </Col>
            </Col>
          </Col>

    );
};

export default CryptoDetails;