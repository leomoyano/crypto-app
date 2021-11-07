import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statics, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery();
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row span={12}><Statistic title="Total Cryptocurrencies" value="5"/></Row>
            <Row span={12}><Statistic title="Total Exchanges" value="5"/></Row>
            <Row span={12}><Statistic title="Total Market Cap" value="5"/></Row>
            <Row span={12}><Statistic title="Total 24Hs Volume" value="5"/></Row>
            <Row span={12}><Statistic title="Total Markets" value="5"/></Row>
        </>
    )
}

export default Homepage
