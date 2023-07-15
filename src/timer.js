import React, { useState, useEffect } from 'react';

const Timer = () => {
  const targetDate = new Date('2024-07-12'); // Replace with your target date

  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const difference = targetDate.getTime() - currentTime.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

 

  return (
    <div>
      <h1>Birthday coming in:</h1>
      <div>
        <span>{timeRemaining.days} days</span> <></>
        <span>{timeRemaining.hours} hours <></></span>
        <span>{timeRemaining.minutes} minutes <></></span>
        <span>{timeRemaining.seconds} seconds <></></span>
      </div>
      <p>Iss baar nahi bhulna</p>
    </div>
  );
};

export default Timer;
