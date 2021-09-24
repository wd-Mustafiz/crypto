import { Card, Col } from 'antd';
import millify from 'millify';
import React from 'react';
import { Link } from 'react-router-dom';
const CryptoCard = ({c}) => {
    
    return (
        <Col xs={24} sm={12} lg={6} className="crypto-card" key={c.id}>
            <Link to={`/crypto/${c.id}`}>
                <Card 
                    title={`${c.rank}. ${c.name}`}
                    extra={<img className="crypto-image" alt="" src={c.iconUrl} />}
                    hoverable
                    >
                        <p>Price: {c.price? millify(c.price): ''}</p>
                        <p>Market Cap: {c.marketCap? millify(c.marketCap): ''}</p>
                        <p>Daily Change: {c.change? millify(c.change): ''}</p>
                </Card>

        </Link>
    </Col>
    );
};

export default CryptoCard;