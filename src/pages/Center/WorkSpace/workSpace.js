import "./workSpace.css";
import { Typography } from "antd";
import { Paragraphs } from "../../../components/Paragraph/paragraph";
import { Video } from "../../../components/Video/video";
export const WorkSpace = () => {
  const { Title } = Typography;
  const textArr = [
    "除了着力于线上虚拟平台的架构，我们在线下也进行着财商知识教育的探索。我们基于六大财商维度和目标青少年心智特点，举行了一系列财商教育工作坊活动。在工作坊中，我们设计了一系列有益于财商知识教育的游戏，让青少年在体验和游玩的过程中潜移默化地运用财商思维，提高财商素养。",
    "迄今为止，工作坊已经设计了基于风险管理与保险维度的游戏“我要小肥羊”，基于财务责任与决策维度的游戏“决策迷宫”，以及基于存储与投资维度和底层财商思维的理论和实践相结合的课程体系“梦想储蓄罐”等一系列线下活动。工作坊与深圳多个社区达成合作，并即将走进各地乡村小学，持续为不同教育背景的青少年带来科学的财商知识内容。",
  ];
  return (
    <>
      <div className="w-full flex flex-wrap justify-center mt-[100px]">
        <div className="w-full flex justify-center">
          <Title level={3}>线下财商教育</Title>
        </div>
        <Paragraphs textArr={textArr}></Paragraphs>
      </div>

      <div className="w-full flex flex-wrap justify-center my-[100px] ">
        <div className="w-full flex justify-center mb-[50px]">
          <Title level={4}>线下活动视频</Title>
        </div>
        <Video
          videoSrc={"http://www.w3school.com.cn/example/html5/mov_bbb.mp4"}
          desc={"线下活动视频1"}
        ></Video>

        <Video
          videoSrc={"http://www.w3school.com.cn/example/html5/mov_bbb.mp4"}
          desc={"线下活动视频2"}
        ></Video>
      </div>
    </>
  );
};
