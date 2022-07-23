import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import styled from "styled-components";
import Clearfix from "../components/common/ClearFix";
import { Link } from "react-router-dom";
import Carousel from "antd/lib/carousel";
import Banner1 from '../components/image/banner/banner1.jpg'
import Banner2 from '../components/image/banner/banner2.jpg'
import Banner3 from '../components/image/banner/banner3.jpg'


const BannerBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
`
const BannerCarouseContainer = styled.div`
    width: 100%;
    padding: 1px;
    @media (min-width: 769px) {
        width: 66.67%;
    }
`
const BannerSectionContainer = styled.div`
    width: 100%;
    padding: 2px;
    @media (min-width:769px) {
        width: 33.33%;
    }
`
const BannerContainer = styled.div`
    width: 100%;
`
const BannerEeatureContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: #fff;
    padding: 8px 0px;
    border-bottom: 1px solid rgba(0, 0, 0.08);
    border-left: 1px solid rgba(0, 0, 0.08);
    border-right: 1px solid rgba(0, 0, 0.08);
`
const BannerFeatureColumn = styled.div`
    width: 33.33%;
    text-align: center;
`

const Image = styled.div`
    width: 100%;
    height: ${(props) => props.height}px;
    background-image: ${(props) => `url(${props.url})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`



const HomePage = () => {
    return (
        <DefaultLayout fixedHeader>
            <Clearfix />
            <BannerBox>
            <BannerCarouseContainer>
            <Carousel autoplay>
                <Link to='P001'>
                <Image height={200} url={Banner1}></Image>
                </Link>
                <Link to='P002'>
                <Image height={200} url={Banner2}></Image>
                </Link>
                <Link to='P003'>
                <Image height={200} url={Banner3}></Image>
                </Link>
            </Carousel>
            </BannerCarouseContainer>
            <BannerSectionContainer>
            <BannerContainer>
                <Link to='P004'>
                <Image height={100} url={Banner1}></Image>
                </Link>
                <Link to='P005'>
                <Image height={100} url={Banner2}></Image>
                </Link>
            </BannerContainer>
            </BannerSectionContainer>
            <BannerEeatureContainer>
                <BannerFeatureColumn>15天鑑賞期</BannerFeatureColumn>
                <BannerFeatureColumn>退貨無負擔</BannerFeatureColumn>
                <BannerFeatureColumn>假一賠二</BannerFeatureColumn>
            </BannerEeatureContainer>
            </BannerBox>
                <Link to='advertisting'>
                <Image height={100} url={Banner3}></Image>
                </Link>
        </DefaultLayout>
    )
}

export default HomePage