import HermesCarousel from "../../components/Carousel/carousel.js";
import "./project.css";
import developmentIcon from "../../assets/development.png";
import planIcon from "../../assets/plan.png";
import businessIcon from "../../assets/Business.png";
import workIcon from "../../assets/work.png";
import { Divider } from "antd";
import { useState } from "react";
import { MidTitle } from "../../components/MidTitle/midtitle.jsx";
import { Development } from "./Development/development.jsx";

const Project = () => {
  const [curIndex, setCurIndex] = useState(0);
  //选择框
  const Select = () => {
    const selectConf = [
      {
        icon: developmentIcon,
        text: "开发组",
        key: 1,
      },
      { icon: planIcon, text: "策划组", key: 2 },
      { icon: businessIcon, text: "商推组", key: 3 },
      { icon: workIcon, text: "工作坊", key: 4 },
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
      <div className="flex flex-row flex-nowrap justify-center w-1/2 h-[130px] rounded-md border mb-2 mt-4 py-2 bg-white">
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

  //引导注册板块
  const Register = () => {
    return (
      <div className="bg">
        <div className="register-context">财商教育，寓教于乐</div>
      </div>
    );
  };

  return (
    <>
      <HermesCarousel></HermesCarousel>
      <MidTitle></MidTitle>
      <div className="flex flex-wrap justify-center relative mt-[60px] mb-[150px]">
        {/* <div className="w-full text-center">项目组展示</div> */}
        <Select></Select>
        <Divider></Divider>
        {curIndex === 0 ? <Development></Development> : null}
      </div>
      <Register></Register>
    </>
  );
};
export default Project;
