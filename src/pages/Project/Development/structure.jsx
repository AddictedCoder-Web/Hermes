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
      <Paragraphs
        textArr={[
          "游戏开发：与游戏策划和美工组一起，通过UE5进行线上财商教育的开发。",
          "美工部：美工部分为原画和建模两个部门。原画负责进行人物、场景和游戏平台界面设计和现有原画资源获取。建模负责通过原画制作项目内的模型和现有模型资源获取。",
        ]}
      ></Paragraphs>
      <div className="flex justify-center items-center w-full">
        <img src={assets.structurePic} className="structure-pic"></img>
      </div>
    </>
  );
};
