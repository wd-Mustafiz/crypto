import { Card, Col, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoCard from './CryptoCard';
import Skeleton ,{ SkeletonTheme } from 'react-loading-skeleton';
import {getCoinDetails} from '../redux/Actions/coin.action'
const Cryptocurrency = ({simplified}) => {
    const {cryptoCoins , loading} = useSelector(state => state.coinReducer)
    const simplifiedArr = cryptoCoins.slice(0,10)
    const [cryptoLists , setCryptoLists] = useState(cryptoCoins)
    const [searchItem , setSearchItem] = useState('')
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCoinDetails())
        
    },[])
    const filterdCryptoList = cryptoLists.filter(c => c.name.toLowerCase().startsWith(searchItem.toLowerCase()))
    if(loading) return <Row gutter={[32,32]} className="crypto-card-container">
        {
            [...Array(12)].map((item , idx) => (
                <Col key={idx} xs={24} sm={12} lg={6} className="crypto-card">
                    <SkeletonTheme color="#e2e2e2" highlightColor="#f1f1f1e0">
                    <Skeleton width='100%' height='200px' />
                    </SkeletonTheme>
                    
                </Col>
            ))
        }
    </Row> 
    return (
        <>
        {
            !simplified && <div className="search-crypto">
            <Input placeholder="search cryptocurrency" onChange={(e) => setSearchItem(e.target.value)} />
        </div>
        }
         
         <Row gutter={[32,32]} className="crypto-card-container">
            {
                simplified ? simplifiedArr.map(c => (
                <CryptoCard key={c.id} c={c} />
               )) : filterdCryptoList.map(c => (
                <CryptoCard key={c.id} c={c} />
            ))
            }     
        </Row>   
        </>
    );
};

export default Cryptocurrency;