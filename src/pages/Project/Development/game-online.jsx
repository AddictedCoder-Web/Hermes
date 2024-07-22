import { useEffect } from "react";
import { useState } from "react";
import { assets } from "../../../assets";
import { Paragraphs } from "../../../components/Paragraph/paragraph";
import "./game-online.css";
export const GameOnline = () => {
  const picArr = [
    {
      pictureUrl: assets.gamePic1,
      title: "控制台Home console scene",
    },
    {
      pictureUrl: assets.gamePic2,
      title: "飞船paceship scene",
    },
    {
      pictureUrl: assets.gamePic3,
      title: "迷宫官咖Maze level",
    },
    {
      pictureUrl: assets.gamePic4,
      title: "职业星球通行证Career Planet Pass",
    },
    {
      pictureUrl: assets.gamePic5,
      title: "理财官咖-卧室Finance level-Bedroom",
    },
    {},
  ];

  const GamePictures = () => {
    const GamePicture = (props) => {
      const { pictureUrl, title } = props;
      return (
        <>
          {pictureUrl && title ? (
            <div className="gamesPicItem">
              <div className="pic">
                <img className="pic-item" src={pictureUrl}></img>
              </div>
              <div className="title">
                <span>{title}</span>
              </div>
            </div>
          ) : (
            <div className="gamesPicItem"></div>
          )}
        </>
      );
    };

    return (
      <div className="gamesPic">
        {picArr.slice(0, 6).map((item) => {
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
        财商线上游戏-财商宇宙
      </div>
      <Paragraphs
        textArr={[
          "财商宇宙是一款休闲益智游戏，基于六大财商维度构建的开放世界给予玩家广阔的探索空间。在这个经济金融高速发展的时代，学会积累和管理自己的财富是人生的一个重要课题，我们致力于让玩家以科学轻松的方式了解经济、提高财商。",
          "见到你的第一眼，我就认定你是拯救未来的“那个人”，有兴趣和我一起经历一场财富世界的冒险吗？很期待在财商宇宙中与你重逢。",
        ]}
      ></Paragraphs>
      <GamePictures></GamePictures>
    </>
  );
};
