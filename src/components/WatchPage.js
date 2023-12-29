import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utiles/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="mx-20 my-4">
        <div className="flex">
      <div>
        <iframe
          width="1000"
          className="rounded-xl"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex-col-reverse">
        <LiveChat />
      </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
