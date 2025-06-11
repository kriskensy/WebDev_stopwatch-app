import styles from './MainSection.module.scss';
import FormattedTime from '../FormattedTime/FormattedTime';
import Button from '../Button/Button';
import { useState } from 'react';

const MainSection = () => {

  const [currentTime, setCurrentTime] = useState(0);

  return (
    <div className={styles.mainSection}>
        <FormattedTime/>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
    </div>
    
  );
};

export default MainSection;