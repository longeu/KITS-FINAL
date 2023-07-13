/* eslint-disable no-unused-vars */
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import './Pomodoro.css';
import CheckIcon from "../../assets/icon-white2.png";

export const Pomodoro = () => {
  const [workTime, setWorkTime] = useState(1); // Thời gian làm việc (phút)
  const [shortBTime, setShortBTime] = useState(5); // Thời gian nghỉ (phút)
  const [longBTime, setLongBTime] = useState(15);
  const [timeRemaining, setTimeRemaining] = useState(workTime * 60); // Thời gian còn lại (giây)
  const [start, setStart] = useState(false);
  const [pomodoroOption, setPomodoroOption] = useState("pomodoro");
  const [activePomoColor, setActivePomoColor] = useState({
    backgroundColor: "#A44E4E",
    fontWeight: "bold"
  })
  const [bgColor, setBgColor] = useState("#BA4949");

  function choosePomodoro(value) {
    if (value === "pomodoro") {
      setStart(false);
      setPomodoroOption("pomodoro");
      setActivePomoColor({
        ...activePomoColor,
        backgroundColor: "#A44E4E",
        fontWeight: "bold"
      });
      setBgColor("#BA4949");
      setTimeRemaining(workTime * 60);

    }
    if (value === "shortBrake") {
      setStart(false);
      setPomodoroOption("shortBrake");
      setActivePomoColor({
        ...activePomoColor,
        backgroundColor: "#417B80",
        fontWeight: "bold"
      });
      setBgColor("#38858A");
      setTimeRemaining(shortBTime * 60);
    }
    if (value === "longBrake") {
      setStart(false);
      setPomodoroOption("longBrake");
      setActivePomoColor({
        ...activePomoColor,
        backgroundColor: "#426C8A",
        fontWeight: "bold"
      });
      setBgColor("#397097");
      setTimeRemaining(longBTime * 60);
    }
  }
  useEffect(() => {
    let timer = null;
    if (start) {
      timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      changePomodoro();
    }
    return () => clearTimeout(timer);
  }, [changePomodoro, start, timeRemaining])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function changePomodoro() {
    if (timeRemaining == 0) {
      if (pomodoroOption === "pomodoro") {
        choosePomodoro("shortBrake")
      }
      if (pomodoroOption === "shortBrake" || pomodoroOption === "longBrake") {
        choosePomodoro("pomodoro")
      }
      setTimeout('', 1000)
    }
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const startTimer = () => {
    setStart(!start);
  };

  return (
    <div className='pomodoro-body ' style={{ backgroundColor: bgColor }}>
      <div className="content-header">
        <div className="header-left">
          <h1 className="content-left">
            <img src={CheckIcon} className='icon-check' alt="pomofoucs icon" />
            <div className="">Pomofocus</div>
          </h1>
        </div>
      </div>
      <div className="content-body">
        <div className='content-body-container'>
          <div className='content-container'>
            <div className='content-container-header'>
              <Button className="button-title" onClick={() => choosePomodoro("pomodoro")}
                style={pomodoroOption == "pomodoro" ? activePomoColor : ""}
              >
                <span>Pomodoro</span>
              </Button>
              <Button className="button-title" onClick={() => choosePomodoro("shortBrake")}
                style={pomodoroOption == "shortBrake" ? activePomoColor : ""}
              >
                <span>Short Break</span>
              </Button>
              <Button className="button-title" onClick={() => choosePomodoro("longBrake")}
                style={pomodoroOption == "longBrake" ? activePomoColor : ""}
              >
                <span>Long Break</span>
              </Button>
            </div>
            <div className='content-container-body'>
              <div id="timer-string" className='timer'>{formatTime(timeRemaining)}</div>
            </div>
            <div className='content-container-bottom'>
              <button className='button-start' onClick={() => startTimer()} style={{ color: bgColor }}>
                {!start ? "START" : "PAUSE"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
