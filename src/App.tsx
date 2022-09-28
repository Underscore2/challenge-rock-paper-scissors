import "./App.css";
import { Interval } from "./components/Interval";
import { Play } from "./components/Play";
import { Rules } from "./components/Rules";
import { Score } from "./components/Score";
import { usePlay } from "./hooks/usePlay";
import json from "../src/components/Rules/rules.json";
import { useState } from "react";
function App() {
  const { interval, setInterval, replay, launch} = usePlay(
    
  );
  const [score,setScore]=useState( parseInt(localStorage.getItem("score")!) || 0
  );

  return (
    <div className="App vh100 p-0 p-md-3 p-lg-5 d-flex flex-column gap-4 background">
      <section className="App-header h-25 d-flex flex-column justify-content-center align-items-center">
        <Score score={score} />
      </section>

      <section className="h-50">
        {interval.time ? (
          <Interval
            results={interval}
            setInterval={setInterval}
            replay={replay}
            setScore={setScore}
          />
        ) : (
          <Play start={launch} />
        )}
      </section>

      <section className=" flex-row  d-flex p-lg-3 justify-content-center justify-content-md-end align-items-bottom">
       <Rules/>
      </section>
      {json.map((item, index) => {
        return (
          <p key={index} className="m-0 w-100 text-white text-center d-flex justify-content-center gap-1 align-items-center">
            Made with <span className="text-red">&#10084;</span> by
           <a className=" d-flex justify-content-center align-items-center text-decoration-none text-white" href="https://github.com/Underscore2"> <i>Underscore2</i> <img width={25} height={25} alt="github" src={item["github-logo"] }></img></a>
          </p>
        );
      })}
    </div>
  );
}

export default App;
