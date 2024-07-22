import { useEffect } from "react";
import { useState } from "react";
import { assets } from "../../../assets";
import { Paragraphs } from "../../../components/Paragraph/paragraph";
import "./game.css";
export const GameOnline = () => {
  const picArr = [
    {
      pictureUrl: assets.worldPic1,
      title: "第一幕",
    },
    {
      pictureUrl: assets.worldPic2,
      title: "第二幕",
    },
    {
      pictureUrl: assets.worldPic3,
      title: "第三幕",
    },
    {
      pictureUrl: assets.worldPic4,
      title: "第四幕",
    },
  ];

  const GamePictures = () => {
    const GamePicture = (props) => {
      const { pictureUrl, title } = props;
      return (
        <div className="w-full flex justify-center flex-wrap px-[400px]">
          <div className="w-full world-title text-left">
            <span>{title}</span>
          </div>
          <div className="world-pic">
            <img
              className="world-pic-item"
              style={{ height: "100%" }}
              src={pictureUrl}
            ></img>
          </div>
        </div>
      );
    };

    return (
      <div className="world-gamesPic">
        {picArr.map((item) => {
          return (
            <GamePicture
              pictureUrl={item.pictureUrl}
              title={item.title}
              key={item.title}
            ></GamePicture>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div className="w-full text-center text-3xl my-[50px]">
        财商宇宙世界观展示
      </div>

      <GamePictures></GamePictures>
    </>
  );
};
