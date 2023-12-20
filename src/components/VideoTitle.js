const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%]  md:pt-[15%] px-6 md:px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:block py-6  text-lg w-1/4">{overview}</p>
      <div className="my-2 md:0">
        <button className="bg-white  text-black py-1 pb-2   md:py-4  px-4 md:px-12 mx-2 text-xl  rounded-lg hover:opacity-70 ">
          Play
        </button>
        <button className="bg-white hidden md:inline-block text-black p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
