import { useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks';
import styles from './actorsList.module.css';
import { Loader } from '../../loader/loader';
import { Actor } from '../actor/Actor';

interface IActorsList {
  page: number;
  valueSearch: string;
  setTotal: (value: number) => void;
}

export const ActorsList = ({ page, setTotal, valueSearch }: IActorsList) => {
  const {
    popular: { actors: popular, total_pages: totalPopular },
    search: { actors: search, total_pages: totalSearch },
    status,
  } = useAppSelector((state) => state.actors);

  const actorsRender = valueSearch ? search[page] : popular[page];

  useEffect(() => {
    if (totalSearch) {
      setTotal(totalSearch);
    } else {
      setTotal(totalPopular);
    }
  }, [totalSearch, setTotal, totalPopular]);

  if (status === 'loading') return <Loader />;

  return (
    <ul className={styles.list}>
      {actorsRender?.map((actor) => (
        <Actor
          key={actor.id}
          id={actor.id}
          name={actor.name}
          gender={actor.gender}
          profile_path={actor.profile_path}
        />
      ))}
    </ul>
  );
};
