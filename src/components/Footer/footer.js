import { Button } from "antd";
import "./footer.css";
const HermesFooter = (props) => {
  const Item = (props) => {
    const { className, text, textInDiv } = props;
    return (
      <div
        style={{
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div className={className}>
          {textInDiv ? <span>{textInDiv}</span> : null}
        </div>
        <div className="text">{text}</div>
      </div>
    );
  };
  return (
    <>
      {/**黑色板块footer */}
      <div className="footer-bg">
        <div className="footer-context">400-126-1234</div>
        <div className="footer-list">
          <Item className={"footer-text"} textInDiv={"关注我们"}></Item>
          <Item className={"codePic1"} text={"微信公众号"}></Item>
          <Item className={"codePic2"} text={"抖音号"}></Item>
          <Item className={"codePic2"} text={"微博"}></Item>
          <Item className={"codePic1"} text={"小红书"}></Item>
        </div>
      </div>
    </>
  );
};

export default HermesFooter;
