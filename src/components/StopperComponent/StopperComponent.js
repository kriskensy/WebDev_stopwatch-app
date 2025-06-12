import styles from './StopperComponent.module.scss';
import FormattedTime from '../FormattedTime/FormattedTime';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';

const StopperComponent = () => {

  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
  let timer;

  if(isRunning){
    timer = setInterval(() => {
      setCurrentTime(prevValue => prevValue + 1);
    }, 1);
  } 

  return () => clearInterval(timer);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  }

  const stopStopwatch = () => {
    setIsRunning(false);
  }

  const resetStopwatch = () => {
    setIsRunning(false);
    setCurrentTime(0);
  }

  return (
    <div className={styles.stopperComponent}>
        <FormattedTime time={currentTime} />
        <Button onClick={startStopwatch}>Start</Button>
        <Button onClick={stopStopwatch}>Stop</Button>
        <Button onClick={resetStopwatch}>Reset</Button>
    </div>
    
  );
};

export default StopperComponent;