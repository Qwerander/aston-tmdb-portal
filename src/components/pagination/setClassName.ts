import styles from './pagination.module.css'
interface ISetClassName {
    activePage: number
    totalPage: number
    page: number
}


export function setClassName({ activePage, totalPage, page }: ISetClassName): string {
    const classes = [styles.page];
    if (activePage === page) {
      classes.push(styles.active);
    }
  
    if (Math.abs(page - activePage) <= 3) {
      classes.push(styles.visible);
    }
  

    if (!classes.includes(styles.visible)) {
      classes.push(styles.unVisible);
    }
  
    return classes.join(' ');
  }