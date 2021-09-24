import { Col, Collapse, Row, Spin,Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExchanges } from '../redux/Actions/exchange.action';
const { Text } = Typography;
const { Panel } = Collapse;
const Exchages = () => {
    const {exchagesLoading,exchanges} = useSelector(state => state.exchageReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getExchanges())
    },[])
    if(exchagesLoading) return <div className="loader" style={{height:'78vh'}}>
        <Spin />
    </div>
    return (
        <>
          <Row>
            <Col span={6}>Exchanges</Col>
            <Col span={6}>24h Trade Volume</Col>
            <Col span={6}>Markets</Col>
            <Col span={6}>Change</Col>
          </Row>
          <Row>
            {exchanges.map((exchange) => (
              <Col span={24} key={exchange.id}>
                <Collapse>
                  <Panel
                    key={exchange.id}
                    showArrow={false}
                    header={(
                      <Row key={exchange.id}>
                        <Col span={6}>
                          <Text><strong>{exchange.rank}.</strong></Text>
                          <Avatar className="exchange-image" src={exchange.iconUrl} />
                          <Text><strong>{exchange.name}</strong></Text>
                        </Col>
                        <Col span={6}>${millify(exchange.volume)}</Col>
                        <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                        <Col span={6}>{millify(exchange.marketShare)}%</Col>
                      </Row>
                      )}
                  >
                    {HTMLReactParser(exchange.description || '')}
                  </Panel>
                </Collapse>
              </Col>
            ))}
          </Row>
        </>
      );

    
    
};

export default Exchages;