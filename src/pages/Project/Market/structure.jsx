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
      <div className="w-[50%] text-left text-l my-[30px]">产品运营</div>
      <Paragraphs
        textArr={[
          "负责Hermes公众号、小红书等社媒账号的宣传内容制作和运营；与相关机构(企业CSR部门、公安部门、中小学校、基层社区组织等) 治谈合作。",
        ]}
      ></Paragraphs>
      <div className="w-[50%] text-left text-l my-[30px]">竞赛工作</div>
      <Paragraphs
        textArr={[
          "广泛且持续关注相关大型赛事，为项目组搭建对外展示的桥梁；组织参与赛事的人员安排及统筹，协调统筹参赛组员的分工合作，把握商业计划书的大致方向。",
        ]}
      ></Paragraphs>
      <div className="w-[50%] text-left text-l my-[30px]">商业策划</div>
      <Paragraphs
        textArr={[
          "参与线下推广活动，与其他项目团队交流，推广产品，同时进行市场调研、用户画像等工作；负责参与撰写商业计划书以及路演PPT及竞赛路演的准备。",
        ]}
      ></Paragraphs>
      <div className="flex justify-center items-center w-full">
        <img src={assets.marketStructurePic} className="structure-pic"></img>
      </div>
    </>
  );
};
