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
      <div className="w-[50%]">
        <Paragraphs
          textArr={[
            "职能介绍：工作坊主要负责财商教育线下活动，分工主要为游戏策划、外部联络、义工招募、现场组织。",
            "游戏策划：根据六大财商维度，设计线下财商桌游小游戏。",
            "外部联络：负责联系相关合作社区、机构，进行活动的对接。",
            "义工招募：活动前负责招募活动主持人、每个游戏主要负责人。",
            "现场组织：负责线下活动现场的把控和整场活动的有序推进。",
          ]}
        ></Paragraphs>
      </div>
      <div className="flex justify-center items-center w-full">
        <img
          src={assets.workSpaceGameStructurePic}
          className="structure-pic"
        ></img>
      </div>
    </>
  );
};
