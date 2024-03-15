import "./development.css";
import { useState } from "react";
import { Divider } from "antd";
import developmentIcon from "../../../assets/development.png";
import planIcon from "../../../assets/plan.png";
import businessIcon from "../../../assets/Business.png";
import workIcon from "../../../assets/work.png";
import { Paragraphs } from "../../../components/Paragraph/paragraph";
export const Development = () => {
  const [curIndex, setCurIndex] = useState(0);
  //选择框
  const Select = () => {
    const selectConf = [
      {
        icon: developmentIcon,
        text: "财商线上游戏",
        key: 1,
      },
      { icon: planIcon, text: "身份认证", key: 2 },
      { icon: businessIcon, text: "美工组作品展示", key: 3 },
      { icon: workIcon, text: "人员架构", key: 4 },
    ];
    const SelectItem = (props) => {
      const { icon, text, index } = props;
      return (
        <>
          <div
            className={`selectItem flex flex-wrap justify-center items-center w-[100px] mx-5 hover:bg-white hover:cursor-pointer hover:text-hermes-orange2 hover:border-hermes-orange2 hover:border-0 hover:border-b-2 transition ease-in-out text-sm${
              curIndex === index ? " activeItem" : ""
            }`}
            onClick={() => {
              setCurIndex(index);
            }}
          >
            {/* <div className="w-full flex flex-wrap justify-center mt-4">
              <img src={icon} className="select-icon w-[4rem]"></img>
            </div> */}
            <div className="">{text}</div>
          </div>
        </>
      );
    };

    return (
      <div className="flex flex-row flex-nowrap justify-center w-1/3 h-[50px] rounded-md  mb-2 mt-4 py-2 bg-white">
        {selectConf.map((item, index) => {
          return (
            <>
              <SelectItem
                icon={item.icon}
                text={item.text}
                key={index}
                index={index}
              />
              {index !== selectConf.length - 1 ? (
                <Divider type={"vertical"} className="h-full"></Divider>
              ) : null}
            </>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div className="w-full text-center text-xl mt-[50px]">Hermes开发组</div>
      <Select></Select>
      <div className="w-full text-center text-3xl my-[50px]">
        财商线上游戏-财商宇宙
      </div>
      <Paragraphs
        textArr={[
          "财商宇宙是一款休闲益智游戏，基于六大财商维度构建的开放世界给予玩家广阔的探索空间。在这个经济金融高速发展的时代，学会积累和管理自己的财富是人生的一个重要课题，我们致力于让玩家以科学轻松的方式了解经济、提高财商。",
          "见到你的第一眼，我就认定你是拯救未来的“那个人”，有兴趣和我一起经历一场财富世界的冒险吗？很期待在财商宇宙中与你重逢。",
        ]}
      ></Paragraphs>
    </>
  );
};
