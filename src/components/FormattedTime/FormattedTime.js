import styles from './FormattedtTime.module.scss';

const FormattedTime = ({ time }) => {

  const formatTime = millseconds => {
    const hours = String(Math.floor(millseconds / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((millseconds % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((millseconds % 60000) / 1000)).padStart(2, '0');
    const ms = String(Math.floor(millseconds % 1000)).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}.${ms}`;
  };

  return (
    <div className={styles.stopwatch}>
        {formatTime(time)}
    </div>
  );
};

export default FormattedTime;