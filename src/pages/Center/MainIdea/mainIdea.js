import { Typography } from "antd";
import { Paragraphs } from "../../../components/Paragraph/paragraph";
import "./mainidea.css";

export const MainIdea = () => {
  const { Title } = Typography;
  return (
    <div className="w-full flex flex-wrap justify-center mt-[100px]">
      <Title level={3}>六大财商维度</Title>
      <Paragraphs
        textArr={[
          "在项目中，我们基于中财智业国际财商研究院研制的 IIFQ 少儿财商测评系统，将项目服务的青少年划分为 6-9 岁、9-12 岁、12-18 岁三个阶段。基于不同阶段用户的心智和学习特点，我们参照美国 NGO 组织 Jump$tart 的文献《The National Standards in K-12 Personal Finance Education》，将财商知识教育体系划分为六个维度：职业工资与收入，存储与投资，借贷，风险管理与保险，财务规划，财务责任与决策。各个维度的具体内容如下。我们基于这六个财商维度，实现线上游戏关卡和线下工作坊，搭建青少年财商教育元宇宙，以达到提高青少年财商水平的教育目的。",
        ]}
        marginTop={20}
      ></Paragraphs>
    </div>
  );
};
