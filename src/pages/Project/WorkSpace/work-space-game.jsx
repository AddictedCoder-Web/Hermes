import { useEffect } from "react";
import { useState } from "react";
import { assets } from "../../../assets";
import "./work-space-game.css";
import { Paragraphs } from "../../../components/Paragraph/paragraph";
import { Divider } from "antd";
export const WorkSpaceGame = () => {
  return (
    <>
      <div className="w-full text-center text-3xl my-[50px]">
        主要财商小游戏
      </div>
      <div className="flex justify-center items-center w-full flex-wrap">
        <div className="left w-[30%] flex justify-center items-center  ">
          <img
            src={assets.workSpaceGamePic1}
            className="work-space-game-img"
          ></img>
        </div>
        <div className="right w-[50%] text-center">
          <span className="text-xl">游戏一 ——组合人民币</span>
          <div className="mt-[20px]">
            <Paragraphs
              textArr={[
                "如今电子支付盛行，小朋友普遍对货币认知较少，然而了解人民币的最基本形态和面值是小朋友培养理财观念的基础，因此设计此款游戏，在帮助小朋友了解人民币的同时，也能够培养小朋友的数学知识。",
                "在游戏中，必须要能够了解第五套人民币的面值，再辅以数学计算，用最快的时间、最少的人民币数量，正确组合出主持人给出的金额，才能够获得更高的分数。",
              ]}
            ></Paragraphs>
          </div>
        </div>
      </div>
      <Divider></Divider>
      <div className="flex justify-center items-center w-full flex-wrap">
        <div className="left w-[30%] flex justify-center items-center  ">
          <img
            src={assets.workSpaceGamePic2}
            className="work-space-game-img"
          ></img>
        </div>
        <div className="right w-[50%] text-center">
          <span className="text-xl">游戏二 ——职业传词猜</span>
          <div className="mt-[20px]">
            <Paragraphs
              textArr={[
                "该游戏通过引导小朋友使用文字语言及肢体语言表述职业相关的词语，既能提升小朋友对各类职业的了解程度，又能够提升小朋友言语和肢体表达能力，并且在与小伙伴的互动中，还能够提升小朋友的团队协作意识。越能快速准确表达出对应词语的小组，越能得到更高的分数哦。",
              ]}
            ></Paragraphs>
          </div>
        </div>
      </div>
      <Divider></Divider>
      <div className="flex justify-center items-center w-full flex-wrap">
        <div className="left w-[30%] flex justify-center items-center  ">
          <img
            src={assets.workSpaceGamePic3}
            className="work-space-game-img"
          ></img>
        </div>
        <div className="right w-[50%] text-center">
          <span className="text-xl">游戏三 ——职业传词猜</span>
          <div className="mt-[20px]">
            <Paragraphs
              textArr={[
                " 该游戏存在时间限制，玩家将身处于一个奇异的迷宫，该迷宫存在多个分岔口，每个分岔口对应的不同道路将存在或简单或难的考验。玩家需齐心协力，共同闯过每条道路设置好的各类财商情景问题，做出正确的决策，最终逃离迷宫。",
              ]}
            ></Paragraphs>
          </div>
        </div>
      </div>
    </>
  );
};
