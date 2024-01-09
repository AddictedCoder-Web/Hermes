export const Video = (props) => {
  const { videoSrc, desc } = props;
  return (
    <div className="mx-10 flex justify-center flex-wrap">
      <video src={videoSrc} width="500" height="350" controls></video>
      <div className="w-full text-left ml-10">{desc}</div>
    </div>
  );
};
