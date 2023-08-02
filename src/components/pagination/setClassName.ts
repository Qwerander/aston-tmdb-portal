import styles from './pagination.module.css';
interface ISetClassName {
  currentPage: number;
  page: number;
}

export function setClassName({
  currentPage,
  page,
}: ISetClassName): string {
  const classes = [styles.page];
  if (currentPage === page) {
    classes.push(styles.active);
  }

  if (Math.abs(page - currentPage) <= 3) {
    classes.push(styles.visible);
  }

  if (!classes.includes(styles.visible)) {
    classes.push(styles.unVisible);
  }

  return classes.join(' ');
}
