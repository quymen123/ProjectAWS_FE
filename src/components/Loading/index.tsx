import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import style from "./Loading.module.css";
import loadingJson from "@/assets/jsons/loading.json";

function Loading() {
  return (
    <div className={style.loading}>
      <Player
        autoplay
        loop
        src={loadingJson}
        style={{ height: "100px", width: "100px" }}
      />
    </div>
  );
}

export default Loading;
