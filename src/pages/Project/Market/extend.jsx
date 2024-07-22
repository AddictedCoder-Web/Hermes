import { useEffect } from "react";
import { useState } from "react";
import { assets } from "../../../assets";
import { Paragraphs } from "../../../components/Paragraph/paragraph";
import "./extend.css";
export const Extend = () => {
  const picArr = [
    {
      pictureUrl: assets.extendPic1,
      title: "“创LI无限”--双创嘉年华",
    },
    {
      pictureUrl: assets.extendPic2,
      title: "Hermes岭南大学宣讲",
    },
    {
      pictureUrl: assets.extendPic3,
      title: "微信公众号",
    },
    {
      pictureUrl: assets.extendPic4,
      title: "小红书账号",
    },
  ];
  const ExtendPicture = (props) => {
    const { pictureUrl, title } = props;
    return (
      <>
        <div className="market-extendPicItem">
          <div className="market-pic">
            <img className="market-pic-item" src={pictureUrl}></img>
          </div>
          <div className="market-title">
            <span>{title}</span>
          </div>
        </div>
      </>
    );
  };

  const ExtendPictures1 = () => {
    return (
      <div className="market-extendPic">
        {picArr.slice(0, 2).map((item) => {
          return (
            <ExtendPicture
              pictureUrl={item.pictureUrl}
              title={item.title}
              key={item.title}
            ></ExtendPicture>
          );
        })}
      </div>
    );
  };
  const ExtendPictures2 = () => {
    return (
      <div className="market-extendPic">
        {picArr.slice(2, 4).map((item) => {
          return (
            <ExtendPicture
              pictureUrl={item.pictureUrl}
              title={item.title}
              key={item.title}
            ></ExtendPicture>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div className="w-full text-center text-3xl my-[50px]">商业策划推广</div>
      <div className="w-full text-center">
        <span className="txt">
          Hermes商业推广分为线下推广和线上推广。线下会进去学校、社区进行活动举办和宣讲活动。线上通过微信公众号和小红书平台发布推文和帖子进行项目组的宣传。
        </span>
      </div>
      <div className="w-[60%] text-left text-xl mt-[50px]">线下推广</div>
      <ExtendPictures1></ExtendPictures1>
      <div className="w-[60%] text-left text-xl mt-[50px]">线上自媒体推广</div>
      <ExtendPictures2></ExtendPictures2>
      <div className="w-full text-center text-xl mt-[100px]">
        B站，抖音持续开发中......
      </div>
    </>
  );
};
