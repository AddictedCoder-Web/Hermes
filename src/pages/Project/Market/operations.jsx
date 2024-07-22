import { useEffect } from "react";
import { useState } from "react";
import { assets } from "../../../assets";
import { Paragraphs } from "../../../components/Paragraph/paragraph";
import "./operations.css";
export const Operations = () => {
  const picArr = [
    {
      pictureUrl: assets.operationsPic1,
      title: "开发投研报告定期对开发组同学对研究成果进行总结分享",
    },
    {
      pictureUrl: assets.operationsPic2,
      title: "财商教育工作坊记录每一次的趣味线下教育活动",
    },
    {
      pictureUrl: assets.operationsPic3,
      title: "项目组推广与招新展现Hermes逐渐扩张的版图",
    },

    {},
  ];

  const OperationsPictures = () => {
    const OperationsPicture = (props) => {
      const { pictureUrl, title } = props;
      return (
        <>
          {pictureUrl && title ? (
            <div className="operationsPicItem">
              <div className="pic">
                <img className="pic-item" src={pictureUrl}></img>
              </div>
              <div className="title">
                <span>{title}</span>
              </div>
            </div>
          ) : (
            <div className="operationsPicItem"></div>
          )}
        </>
      );
    };

    return (
      <div className="operationsPic">
        {picArr.slice(0, 6).map((item) => {
          return (
            <OperationsPicture
              pictureUrl={item.pictureUrl}
              title={item.title}
              key={item.title}
            ></OperationsPicture>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div className="w-full text-center text-3xl my-[50px]">产品运营展示</div>
      <div className="w-full text-center">
        <span className="txt">
          负责项目组微信公众号、小红书、b站、抖音等平台的视频/文章定期发布和账号管理。
        </span>
      </div>
      <OperationsPictures></OperationsPictures>
    </>
  );
};
