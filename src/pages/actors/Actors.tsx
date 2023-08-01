import styles from './actors.module.css';
import { ActorsList } from '../../components/actors/actorsList/ActorsList';
import { Hero } from '../../components/hero/Hero';
import { useActorsFetch } from '../../hooks/useActorsFetch';
import { useAppSelector } from '../../store/hooks';
import { Pagination } from '../../components/pagination/Pagination';

export const Actors = () => {
  const currentPage = useAppSelector(state => state.actors.currentPage)
  const { page,  setTotal, setValueSearch, total, valueSearch } =
    useActorsFetch();

  return (
    <div className={styles.actors}>
      <Hero
        serchPlaceholder='Найти актера ...'
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
      />
      <ActorsList page={page} setTotal={setTotal} valueSearch={valueSearch} />
      <Pagination currentPage={currentPage} total={total} />
    </div>
  );
};
