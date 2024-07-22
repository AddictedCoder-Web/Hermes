import "./game.css";
import { Typography } from "antd";
import { Paragraphs } from "../../../components/Paragraph/paragraph";
import { Video } from "../../../components/Video/video";
export const Game = () => {
  const { Title } = Typography;
  const textArr = [
    "基于上述的六个财商维度，我们在线上的游戏平台中设计开发六个对应的财商星球供青少年探索。在六个星球中，我们也根据对应维度特点以及青少年的兴趣，设计了丰富多样的寓教于乐的财商教育内容。",
    "在本项目的线上游戏关卡中，玩家将扮演一名宇宙中的探险家，玩家的母星由于财商知识的缺乏而遭受发展瓶颈，因此玩家需要在各个财商星球中进行探索，学习更多的财商知识，让自己的母星获得更好发展。这样的设定既能够吸引玩家致力于关卡的探索和财商知识的学习，也能够藉由较为现实化的情境，让现实生活与线上的平台有机地结合，为构建财商教育元宇宙服务。",
    "除了有趣的背景设定，我们还构思了三个层级的基础系统，以指导线上游戏关卡的设置以及财商教育元宇宙的构建。这不仅让游戏关卡的设计有了统一的遵循，也保证了财商教育元宇宙中的各个元素能够做到丰富而有序，确保青少年能够更好地理解财商知识，实现财商教育的目的。",
  ];
  return (
    <>
      <div className="w-full flex flex-wrap justify-center mt-[100px]">
        <div className="w-full flex justify-center">
          <Title level={3}>财商知识游戏关卡</Title>
        </div>
        <Paragraphs textArr={textArr}></Paragraphs>
      </div>

      <div className="w-full flex flex-wrap justify-center my-[100px] ">
        <div className="w-full flex justify-center mb-[50px]">
          <Title level={4}>财商教育线上游戏</Title>
        </div>
        <Video
          videoSrc={"http://www.w3school.com.cn/example/html5/mov_bbb.mp4"}
          desc={"视频1"}
        ></Video>

        <Video
          videoSrc={"http://www.w3school.com.cn/example/html5/mov_bbb.mp4"}
          desc={"视频2"}
        ></Video>
      </div>
    </>
  );
};
