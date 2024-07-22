import "./paragraph.css";
export const Paragraphs = (props) => {
  const { textArr } = props;
  const Paragraph = (props) => {
    const { text, marginTop } = props;
    return (
      <div
        className={`flex justify-center flex-wrap`}
        style={{ marginTop: `${marginTop}px` }}
      >
        <div className="paragraph">{text}</div>
      </div>
    );
  };
  return (
    <div>
      {textArr.map((item, index) => {
        return <Paragraph text={item} key={index}></Paragraph>;
      })}
    </div>
  );
};
