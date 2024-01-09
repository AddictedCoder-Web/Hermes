import HermesCarousel from "../../components/Carousel/carousel.js";
import "./center.css";
import educationIcon from "../../assets/education-icon.png";
import gameIcon from "../../assets/game-icon.png";
import mainIdeaIcon from "../../assets/mainIdea-icon.png";
import testIcon from "../../assets/test-icon.png";
import { Divider } from "antd";
import { useState } from "react";
import { MainIdea } from "./MainIdea/mainIdea.js";
import { Game } from "./Game/game.js";

const Center = () => {
  const [curIndex, setCurIndex] = useState(0);
  //选择框
  const Select = () => {
    const selectConf = [
      {
        icon: mainIdeaIcon,
        text: "核心理念",
        key: 1,
      },
      { icon: gameIcon, text: "线上游戏", key: 2 },
      { icon: educationIcon, text: "线下财商教育", key: 3 },
      { icon: testIcon, text: "财商测评", key: 4 },
    ];
    const SelectItem = (props) => {
      const { icon, text, index } = props;
      return (
        <>
          <div
            className={`selectItem flex flex-wrap justify-center bg-hermes-orange w-[12rem] mx-5 border border-hermes-orange2 hover:bg-white hover:cursor-pointer hover:text-hermes-orange2 hover:border-0 hover:border-b-2 transition ease-in-out ${
              curIndex === index ? " activeItem" : ""
            }`}
            onClick={() => {
              setCurIndex(index);
            }}
          >
            <div className="w-full flex flex-wrap justify-center mt-4">
              <img src={icon} className="select-icon w-[4rem]"></img>
            </div>
            <div className="mt-2">{text}</div>
          </div>
        </>
      );
    };
    return (
      <div className="flex flex-row flex-nowrap justify-center w-3/4 h-[120px] rounded-md border mb-2 mt-4 py-2 bg-white">
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
      <HermesCarousel></HermesCarousel>
      <div className="flex flex-wrap justify-center relative">
        <Select></Select>
        {curIndex === 0 ? <MainIdea></MainIdea> : null}
        {curIndex === 1 ? <Game></Game> : null}
      </div>
    </>
  );
};
export default Center;
