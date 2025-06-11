import styles from './FormattedtTime.module.scss';

const FormattedTime = ({ time }) => {
  const formatTime = millseconds => {
  return //TODO dopisać
  };

  return (
    <div className={styles.stopwatch}>
        {formatTime(time)}
    </div>
  );
};

export default FormattedTime;