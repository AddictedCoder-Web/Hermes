import { useEffect } from "react";
import { useState } from "react";
import { assets } from "../../../assets";
import "./art-work.css";
export const ArtWork = () => {
  const artPicArr = [
    {
      pictureUrl: assets.artWorkPic1,
    },
    {
      pictureUrl: assets.artWorkPic2,
    },
    {
      pictureUrl: assets.artWorkPic3,
    },
    {
      pictureUrl: assets.artWorkPic4,
    },
    {
      pictureUrl: assets.artWorkPic5,
    },
    {
      pictureUrl: assets.artWorkPic6,
    },
  ];
  return (
    <>
      <div className="w-full text-center text-3xl my-[50px]">作品展示</div>
      <div className="w-full title my-[10px]">原画组作品展示</div>
      <div className="flex justify-center items-center">
        {artPicArr.slice(0, 3).map((item) => {
          return <img src={item.pictureUrl} className="img mx-10"></img>;
        })}
      </div>
      <div className="w-full title mt-[100px] mb-[10px]">建模组作品展示</div>
      <div className="flex justify-center items-center">
        {artPicArr.slice(3, 6).map((item) => {
          return <img src={item.pictureUrl} className="img mx-10"></img>;
        })}
      </div>
    </>
  );
};
