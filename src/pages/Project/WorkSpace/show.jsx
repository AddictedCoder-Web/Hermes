import { useEffect } from "react";
import { useState } from "react";
import { assets } from "../../../assets";
import { Paragraphs } from "../../../components/Paragraph/paragraph";
import "./show.css";
export const Show = () => {
  const picArr = [
    {
      pictureUrl: assets.showPic1,
      title: "《童“蒙”养财-青少年财商桌游活动》-粤桂社区活动",
    },
    {
      pictureUrl: assets.showPic2,
      title: "《童“蒙”养财-青少年财商桌游活动》-荔湾社区妈湾片区",
    },
    {
      pictureUrl: assets.showPic3,
      title: "《童“蒙”养财-青少年财商培养训练活动》-深港之家",
    },
    {},
  ];

  const ShowPictures = () => {
    const ShowPicture = (props) => {
      const { pictureUrl, title } = props;
      return (
        <>
          {pictureUrl && title ? (
            <div className="showsPicItem">
              <div className="pic">
                <img className="pic-item" src={pictureUrl}></img>
              </div>
              <div className="title">
                <span>{title}</span>
              </div>
            </div>
          ) : (
            <div className="showsPicItem"></div>
          )}
        </>
      );
    };

    return (
      <div className="showsPic">
        {picArr.slice(0, 6).map((item) => {
          return (
            <ShowPicture
              pictureUrl={item.pictureUrl}
              title={item.title}
              key={item.title}
            ></ShowPicture>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div className="w-full text-center text-3xl my-[50px]">
        线下工作坊活动展示
      </div>

      <ShowPictures></ShowPictures>
    </>
  );
};
