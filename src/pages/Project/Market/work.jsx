import { useEffect } from "react";
import { useState } from "react";
import { assets } from "../../../assets";
import { Paragraphs } from "../../../components/Paragraph/paragraph";
import "./work.css";
export const Work = () => {
  const picArr = [
    {
      pictureUrl: assets.workPic1,
      title: "2022荔园挑战创新创业大赛社会调查赛道三等奖",
    },
    {
      pictureUrl: assets.workPic2,
      title: "2022大学生创新创业训练计划项目国家级项目",
    },
    {
      pictureUrl: assets.workPic3,
      title:
        "2022第8届中国国际“互联网+”大学生创新创业大赛深圳大学校内赛“青年红色筑梦之旅”赛道铜奖项目",
    },
    {
      pictureUrl: assets.workPic4,
      title: "2023“腾讯技术公益创投计划”二期资助项目",
    },
  ];

  const WorkPictures = () => {
    const WorkPicture = (props) => {
      const { pictureUrl, title } = props;
      return (
        <>
          <div className="workPicItem">
            <div className="pic">
              <img className="pic-item" src={pictureUrl}></img>
            </div>
            <div className="title">
              <span>{title}</span>
            </div>
          </div>
        </>
      );
    };

    return (
      <div className="workPic">
        {picArr.map((item) => {
          return (
            <WorkPicture
              pictureUrl={item.pictureUrl}
              title={item.title}
              key={item.title}
            ></WorkPicture>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div className="w-full text-center text-3xl my-[50px]">竞赛工作</div>
      <div className="w-full text-center">
        <span className="txt">
          项目组设有专员对竞赛信息进行收集并动员大家积极参与，以下是项目组成立以来HERMES相关竞赛经历
        </span>
      </div>
      <WorkPictures></WorkPictures>
    </>
  );
};
