import React, { useState } from 'react';
import { Select, Avatar, Card, Col, Row, Typography } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fe28c1617-67f3-4dfd-bc5b-205f0db59d56.jpg?fit=scale-down&source=next&width=700'

const News = ({simplified}) => {
const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory , count: simplified ? 6 : 12 });
    const { data } = useGetCryptosQuery(100);

    if(!cryptoNews?.value) return 'Loading...';

    return (
        <Row gutter={[24, 24]}>
        {!simplified && (
            <Col span={24}>
                <Select 
                showSearch 
                className="select-news" 
                placeholder="Select a Crypto"
                optionFilterProp="children"
                onChange={(value) => setNewsCategory(value)}
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Option value='Cryptocurrency'>Cryptocurrency</Option>
                    {data?.data.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                </Select>
            </Col>
        )}
            {cryptoNews?.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card" title={news.title}>
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                            <Title className="news-title" level={4}>{news.name}</Title>
                                <img style={{maxWidth: '200px', maxHeight: '100px'}} className="news-image" src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
                            </div>
                            <p>
                                {news.description > 100 ? `${news.description.substring(0, 100)}...`
                                : news.description}
                            </p>
                            <div className="provider-container">
                                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                                <Text className="provider-name">{news.provider[0]?.name}</Text>
                            </div>
                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News
