import useTrailerBackground from "../hooks/useTrailerBackground";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  const result = useTrailerBackground(id);
  const tarilerVideos = useSelector(
    (store) => store.movie.trailerBackgroundVideos
  );
  if (!tarilerVideos) return;

  const videoTrailer = tarilerVideos.find((video) => {
    return video.type === "Trailer";
  });
  // console.log(videoTrailer);

  // console.log(result);

  return (
    <div className="w-full ">
      <iframe
        className="w-full aspect-video"
        src = {"https://www.youtube.com/embed/" + videoTrailer.key + "?&autoplay=1&loop=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
