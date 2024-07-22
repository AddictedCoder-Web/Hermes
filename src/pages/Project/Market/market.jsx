import "./market.css";
import { useState } from "react";
import { Divider } from "antd";

import { Paragraphs } from "../../../components/Paragraph/paragraph";
import { Operations } from "./operations";
import { Work } from "./work";
import { Structure } from "./structure";
import { Extend } from "./extend";
export const Market = () => {
  const [curIndex, setCurIndex] = useState(0);
  const selectConf = [
    {
      text: "产品运营",
      key: 0,
    },
    { text: "竞赛工作", key: 1 },
    { text: "商业策划", key: 2 },
    { text: "人员架构", key: 3 },
  ];
  //选择框
  const Select = () => {
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
            <div className="truncate">{text}</div>
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
                key={item.key}
                index={item.key}
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
      <div className="w-full text-center text-xl mt-[50px]">Hermes商推组</div>
      <Select></Select>
      {curIndex === selectConf[0].key ? <Operations></Operations> : null}
      {curIndex === selectConf[1].key ? <Work></Work> : null}
      {curIndex === selectConf[2].key ? <Extend></Extend> : null}
      {curIndex === selectConf[3].key ? <Structure></Structure> : null}
    </>
  );
};
