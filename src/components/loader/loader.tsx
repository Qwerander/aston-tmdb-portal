import styles from './loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loaderBlock}>
      <div className={styles.loader}></div>
    </div>
  );
};
