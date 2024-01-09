/* eslint-disable jsx-a11y/alt-text */
import { Carousel } from "antd";
import { useRef, useState } from "react";
import ImageURL from "../../assets/hermesLogo.png";
import "./carousel.css";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
function HermesCarousel() {
  //从后端返回的图片数组
  const [imageArr, setImageArr] = useState([ImageURL, ImageURL, ImageURL]);
  //获取Carousel的对象
  const carouselRef = useRef(null);
  //todo 获取图片数据

  //轮播图的长宽
  const ImageStyle = {
    width: "100%",
    height: "500px",
  };

  //轮播图的左右箭头
  const LeftArrow = () => {
    const onClick = () => {
      carouselRef.current.prev();
    };
    return (
      <div className="leftArrow">
        <LeftOutlined onClick={onClick}></LeftOutlined>
      </div>
    );
  };
  const RightArrow = () => {
    const onClick = () => {
      carouselRef.current.next();
    };
    return (
      <div className="rightArrow">
        <RightOutlined onClick={onClick}></RightOutlined>
      </div>
    );
  };
  return (
    <div>
      <div
        style={{
          position: "relative",
        }}
      >
        <Carousel dotPosition="bottom" ref={carouselRef} autoplay>
          {imageArr.map((item) => {
            return (
              <div style={ImageStyle}>
                <img
                  style={{ width: "100%", height: "500px" }}
                  src={item}
                ></img>
              </div>
            );
          })}
        </Carousel>

        <LeftArrow></LeftArrow>

        <RightArrow></RightArrow>
      </div>
    </div>
  );
}

export default HermesCarousel;
