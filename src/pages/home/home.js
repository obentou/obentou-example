import React from "react";
import Header from "../../components/header/header";
import styled from "styled-components";
import Footer from "../../components/footer/footer";
import {useMediaQuery} from "react-responsive";


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    swipeToSlide: true
  };
  const isMobile = useMediaQuery({query: '(max-device-width: 768px)'});

  return (
    <div>
      <Header/>
      <div className="ui container">
        <h1 className="ui header">キャッチコピー</h1>
        <Driver/>
        <div className="ui stackable grid">
          <Row className="ui row">
            <div className="eight wide column">
              <h2 className="ui header">どんな悩みでも気軽にご相談ください</h2>
              高齢者様の生活は多種多様<br/>
              持病のある方、噛む力･飲みこむ力の低下した方、足腰の不自由な方。<br/>
              まごころ弁当では、お一人一人の生活に寄り添い、<br/>
              それぞれに合わせたお弁当をお届けしています。<br/>
              一食だけでも毎日でも、皆様のご都合に合わせてご利用ください。<br/>
              どんな小さなお悩みでもかまいません。<br/>
              まずはお気軽にご相談ください。
            </div>
            <div className="eight wide column">
              <img className="ui image" alt="members" src="images/banner/sub-banner.png"/>
            </div>
          </Row>
        </div>

        <div className="ui stackable grid">
          <Row className="ui row">
            <div className="eight wide column">
              <img className="ui image" alt="members" src="images/bentou/bentou1.png"/>
            </div>
            <div className="eight wide column">
              <h2 className="ui header" style={{marginTop: "3vh"}}>栄養バランスに配慮した日替りのお弁当</h2>
              <p className="ui text">
                高齢者様お一人一人が必要な栄養素をバランスよく摂取できるよう、専属の管理栄養士が毎日の献立を組み立てています。旬の食材を取り入れた彩り豊かなお弁当を、どうぞお楽しみください
              </p>
            </div>
          </Row>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

const Driver = styled.div`
border:1px solid rgba(34,36,38,.15);
margin: 5vh 0 5vh 0;
`;

const Row = styled.div`
margin-top: 5vh;
`;

export default Home;
