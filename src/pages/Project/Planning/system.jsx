import { useEffect } from "react";
import { useState } from "react";
import { assets } from "../../../assets";
import { Paragraphs } from "../../../components/Paragraph/paragraph";
import "./system.css";
export const System = () => {
  return (
    <div className="mt-[50px]">
      <Paragraphs
        textArr={[
          "在财商量表中，我们设计了一套适用于不同年龄段儿童的财务素养评估体系。将儿童分为6-9岁、9-12岁和12岁以上三个年龄段，并围绕技能、知识、品质、习惯和创新展开内容。我们参考Jump$tart的教育标准，涵盖了财务责任与决策、职业与工资收入、财务规划、借贷、风险管理与保险，以及储蓄与投资六个维度，目标是帮助儿童建立全面的财务素养。对于每一个知识维度，我们还结合生活中的实际情况，编写了一套选择题来帮助孩子掌握财商知识要点。",
        ]}
      ></Paragraphs>
      <div className="w-full flex justify-center">
        <img src={assets.systemPic} className="system-pic"></img>
      </div>
    </div>
  );
};
