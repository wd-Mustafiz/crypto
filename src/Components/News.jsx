import React, { useEffect, useState } from 'react';
import {Select , Typography, Row , Col , Avatar , Card,} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import moment from 'moment';
import { Option } from 'antd/lib/mentions';
import { getCryptoNews } from '../redux/Actions/news.action';
const demoImageUrl = 'https://mone.to/wp-content/uploads/2019/08/Bitcoin-Blockchain-and-Cryptocurrency-News.jpg'
const News = ({simplified}) => {
    const {newsLoading , cryptoNews} = useSelector(state => state.newsReducer)
    const {cryptoCoins} = useSelector(state => state.coinReducer)
    const [newsCategory , setNewsCategory] = useState('bitcoin')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCryptoNews(newsCategory))
    },[newsCategory])
    const simplyfiedArr = cryptoNews.slice(0,6)
    
    return (
        <Row gutter={[24,24]}>
            {
                !simplified && (
                    <Col span={24}>
                        <Select
                            showSearch
                            className="select-news"
                            placeholder="Select a Crypto"
                            optionFilterProp="children"
                            value={newsCategory}
                            onChange={(value) => setNewsCategory(value)}
                            filterOption={(input , option) => option.children.toLowerCase().indexOf(input.toLocaleLowerCase() >= 0)}
                        >
                            <Option selected value={newsCategory}>{newsCategory}</Option>
                            {
                                cryptoCoins.map((coin,id) => (
                                    <Option value={coin.name}>{coin.name}</Option>
                                ))
                            }
                        </Select>
                    </Col>
                )
            }
            {
                newsLoading && <Row gutter={[32,32]} className="crypto-card-container">
                {
                    [...Array(12)].map((item , idx) => (
                        <Col key={idx} xs={24} sm={12} lg={8} className="crypto-card">
                            <SkeletonTheme color="#e2e2e2" highlightColor="#f1f1f1e0">
                            <Skeleton width='100%' height='200px' />
                            </SkeletonTheme>
                            
                        </Col>
                    ))
                }
            </Row> 
            }
            {
                simplified ? simplyfiedArr.map((news , i) => (
                    <SingleNews key={i} news={news} />
                )) :
                cryptoNews.map((news, i) => (
                    <SingleNews key={i} news={news} />
                ))
            }
        </Row>
    );
};

const SingleNews = ({news}) => {
    return <Col xs={24} sm={12} lg={8}>
    <Card hoverable className="news-card">
        <a href={news.url} target="_blank" rel="noreferrer">
            <div className="news-image-container">
                <Typography.Title className="news-title" level={4}>
                    {news.name}
                </Typography.Title>
                <img style={{maxHeight:'100px' , maxWidth:'200px'}} src={news?.image?.thumbnail?.contentUrl || demoImageUrl} alt="news"/>
            </div>
            <p>
                {news.description > 100 ? `${news.description.substring(0,100)}...` : news.description}
            </p>

            <div className="provider-container">
                <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImageUrl} />
                    <Typography.Text className="provider-name">
                        {news.provider[0]?.name}
                    </Typography.Text>
                </div>
                <Typography.Text>
                        {moment(news.datePublished).startOf('ss').fromNow()}
                </Typography.Text>
            </div>
        </a>
    </Card>
</Col>
}
export default News;