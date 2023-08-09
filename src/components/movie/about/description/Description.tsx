import { Fragment } from 'react';
import styles from './description.module.css';

export const Description = ({
  title,
  value,
  link = false,
}: {
  title: string;
  value: string | Array<{ name: string; [key: string]: any }>;
  link?: boolean;
}) => {
  return (
    <div className={styles.descr}>
      <div className={styles.title}>{title}: </div>
      {link && typeof value === 'string' ? (
        <>
          <p className={styles.text}>
            <a href={value}>{value}</a>
          </p>
        </>
      ) : (
        <>
          {typeof value === 'string' ? (
            <p className={styles.text}>{value}</p>
          ) : (
            <p className={styles.text}>
              {value.map((item) => item.name.toLocaleLowerCase()).join(', ') +
                '.'}
            </p>
          )}
        </>
      )}
    </div>
  );
};
