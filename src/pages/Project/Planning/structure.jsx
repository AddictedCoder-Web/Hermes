import { useEffect } from "react";
import { useState } from "react";
import { assets } from "../../../assets";
import "./structure.css";
import { Paragraphs } from "../../../components/Paragraph/paragraph";
export const Structure = () => {
  return (
    <>
      <div className="w-full text-center text-3xl mt-[50px] mb-[20px]">
        人员架构
      </div>
      <div className="w-full text-center text-xl my-[20px]">游戏策划</div>
      <Paragraphs
        textArr={[
          "系统策划是主要负责游戏玩法设计、逻辑设计、游戏整体系统设计等工作。",
          "关卡策划组主要负责设计与规划游戏关卡相关工作。关卡类型包括但不限于战斗关卡、解密关卡、平台关卡等。",
          "文案策划主要负责设计和完善游戏的基本世界观设计游戏的剧情、任务等内容等与游戏相关的一系列文案内容。",
          "游戏数值策划是负责制定和平衡游戏中各种数值参数的角色。主要工作有：数值设计、数据分析、平衡调整、测试支持以及与其他开发人员的协作。",
        ]}
      ></Paragraphs>
      <div className="w-full text-center text-xl my-[20px]">经济系统策划</div>
      <Paragraphs
        textArr={[
          "主要负责财商量表的构建，对财商知识点的六个维度进行详细地介绍和解释并且编写了针对青少年的财商题目，将财商知识融入游戏当中。",
        ]}
      ></Paragraphs>
      <div className="flex justify-center items-center w-full">
        <img
          src={assets.planningStructurePic}
          className="planning-structure-pic"
        ></img>
      </div>
    </>
  );
};
