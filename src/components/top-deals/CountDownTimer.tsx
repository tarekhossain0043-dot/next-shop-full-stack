import React, { useState, useEffect } from 'react';

// Type define kora
interface TimeLeft {
    days : number,
    hours : number,
    minutes : number,
    seconds : number
}

const CountDownTimer : React.FC<{targetDate : string}> = ({targetDate}) => {
  // TypeScript State
  const [timeLeft,setTimeLeft] = useState<TimeLeft>({
    days : 0,
    hours : 0,
    minutes : 0,
    seconds : 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now

      if (distance < 0) {
        clearInterval(timer)
      } else {
       setTimeLeft({
        days : Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours : Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))),
        minutes : Math.floor((distance % (1000 * 60 * 60) / (1000 * 60))),
        seconds : Math.floor(distance % (1000 * 60) / 1000)
       })
      }
    }, 1000);

    return () => clearInterval(timer)
  }, [targetDate]);

  return (
    <div className='bg-[#F3DE6D] inline-block py-2 px-5 rounded-sm text-[16px] leading-6 font-normal text-black'>
      {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
    </div>
  );
};
export default CountDownTimer