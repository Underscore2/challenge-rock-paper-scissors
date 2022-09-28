import { useState } from "react";
import { Results } from "../types/interfaces";
export function usePlay(results?: any): any {
  const [winner, setWinner] = useState(false);
  const [house, setHouse] = useState(true);
  const [shadow, setShadow] = useState<null|string>(null);

  const [score, setScore] = useState<any>(
    parseInt(localStorage.getItem("score")!) || 0
  );
  const [interval, setInterval] = useState<Results>({
    time: false,
    draft: false,
    disabled: false,
    user: {
      winner: false,
      button: "",
    },
    ai: {
      button: "",
    },
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userResult: string[] = results?.user?.button.split("$");
  const aiResult: string[] = results?.ai?.button.split("$");
  const ai: number = Math.floor(Math.random() * 2);
  const translateResults = (id: number): string => {
    switch (id.toString()) {
      case "0": {
        return "images/icon-rock.svg$rock";
      }
      case "1": {
        return "images/icon-paper.svg$paper";
      }
      case "2": {
        return "images/icon-scissors.svg$scissors";
      }
      default: {
        return "error";
      }
    }
  };

  const launch = (id: number) => {
    if (ai === id) {
      return setInterval({
        time: true,
        draft: true,
        user: { winner: false, button: translateResults(id) },
        ai: { button: translateResults(ai) },
      });
    }
    if (
      (ai === 0 && id === 1) ||
      (ai === 1 && id === 2) ||
      (ai === 2 && id === 0)
      //SASSO 0 CARTA 1 FORBICI 2
    ) {
         setScore((score: any) => {
        localStorage.setItem("score", score + 1);
        return score + 1;
      });
    
      setInterval({
        time: true,
        draft: false,
        user: { winner: true, button: translateResults(id) },
        ai: { button: translateResults(ai) },
      });
    } else {
      setInterval({
        time: true,
        draft: false,
        user: { winner: false, button: translateResults(id) },
        ai: { button: translateResults(ai) },
      });
    }
  };
  const replay = () => {
    if (setInterval) {
      setInterval({ ...results, time: false });
    }
  };

  const sideEffects=()=>{
    if (!winner) {
      const idTimeoutWinner = setTimeout(() => {
        setWinner(!winner);
        if (results.user.winner === true && results.draft === false) {
          setShadow("u");
         
        }
        if (results.user.winner === false && results.draft === false) {
          setShadow("a");
        }
      }, 2500);
      const idTimeoutHouse = setTimeout(() => {
        setHouse(false);
      }, 1250);
      return () => {
        clearTimeout(idTimeoutHouse);
        clearTimeout(idTimeoutWinner);
      };
    }
  }

  return {
    score,
    interval,
    userResult,
    aiResult,
    winner,
    house,
    show,
    shadow,
    setInterval,
    setWinner,
    setHouse,
    handleClose,
    setShow,
    handleShow,
    launch,
    replay,
    sideEffects
  };
}
