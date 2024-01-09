/* eslint-disable jsx-a11y/alt-text */
import { Button, Divider } from "antd";
import { useEffect, useState } from "react";
import HermesCarousel from "../../../components/Carousel/carousel";
import imageUrl from "../../../assets/hermesLogo.png";
import "./content.css";

const HermesContent = () => {
  const [awardsArr, setAwardsArr] = useState([]); //以对象形式存储{pictureUrl:string,title:string}
  //获取获奖荣誉图片数组
  useEffect(() => {
    setAwardsArr([
      {
        pictureUrl: imageUrl,
        title:
          "2022第8届中国国际“互联网+”大学生创新创业大赛深圳大学校内赛“青年红色筑梦之旅”赛道铜奖项目",
      },
      {
        pictureUrl: imageUrl,
        title: "2022大学生创新创业训练计划项目国家级项目",
      },
      {
        pictureUrl: imageUrl,
        title:
          "2022年广东大中专学生志愿者暑期文化科技卫生 “三下乡”社会实践活动省级重点团队",
      },
      {
        pictureUrl: imageUrl,
        title: "2023“荔园挑战·攀峰”基金",
      },
      {
        pictureUrl: imageUrl,
        title: "2023腾讯创客计划",
      },
      {
        pictureUrl: imageUrl,
        title: "2023大学生创新创业训练计划项目国家级项目",
      },
    ]);
  }, []);
  const MidTitle = () => {
    return (
      <>
        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <span style={{ fontSize: "30px" }}>Hermes，青少年财商教育元宇宙</span>
        </div>
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <span
            style={{
              fontSize: "15px",
              color: "#b2b2b2",
            }}
          >
            财商教育，寓教于乐
          </span>
        </div>
      </>
    );
  };
  //”关于我们“组件
  const About = () => {
    return (
      <div className="about">
        <div className="about-h items-center">
          <div
            style={{
              fontSize: "25px",
              display: "inline-block",
              marginLeft: "100px",
            }}
          >
            关于我们
          </div>
          <Button size="small" style={{ marginLeft: "20px" }}>
            了解更多
          </Button>
        </div>

        <div className="about-c">
          <div className="about-p1">
            Hermes团队由深大金融科技学院师生共同组建，致力于将财商知识融入趣味性游戏，寓教于乐，助力青少年培养与时俱进的金钱观念，养成审慎严谨的风控习惯并学习金融知识，从而实现青少年财商素质的有效提升，逐步提高全民金融素养。
          </div>
          <div className="about-p2">
            当下，青少年非理性消费、被诈骗的新闻屡见不鲜，社会呼唤高质量的青少年财商教育。在此背景下，本项目致力于打造虚实交互的财商教育元宇宙，立足六大财商维度，兼顾线上线下两个渠道，将财商知识以趣味化的方式呈现，让青少年更好地接受财商知识教育，注重虚实交互，打通线上与线下的界限，提供丰富且全面的财商知识教育场景，从而为青少年提供全面、丰富、有趣、科学的财商知识教育平台。
          </div>
        </div>
      </div>
    );
  };
  //”获奖荣誉“组件
  const Awards = () => {
    const AwardsItem = (props) => {
      const { pictureUrl, title } = props;
      return (
        <div className="awardsItem">
          <div className="pic">
            <img style={{ height: "100%" }} src={pictureUrl}></img>
          </div>
          <div className="title">
            <span>{title}</span>
          </div>
        </div>
      );
    };
    return (
      <div className="awards">
        <div className="awardsTile">获奖荣誉</div>
        {awardsArr.map((item) => {
          return (
            <AwardsItem
              pictureUrl={item.pictureUrl}
              title={item.title}
              key={item.title}
            ></AwardsItem>
          );
        })}
      </div>
    );
  };
  //引导注册板块
  const Register = () => {
    return (
      <div className="bg">
        <div className="register-context">财商教育，寓教于乐</div>
        <Button className="bg-white">免费注册</Button>
      </div>
    );
  };
  return (
    <>
      <HermesCarousel></HermesCarousel>
      <MidTitle></MidTitle>
      <About></About>
      <Divider style={{ marginTop: "100px" }}></Divider>
      <Awards></Awards>
      <Register></Register>
    </>
  );
};

export default HermesContent;
