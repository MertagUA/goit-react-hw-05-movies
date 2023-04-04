import { CastItem } from 'components/Cast/CastItem/CastItem';
import { List } from './CastList.styled';

export const CastList = ({ cast }) => {
  return (
    <List>
      {cast.map(({ id, name, character, profile_path }) => {
        return (
          <CastItem
            key={id}
            name={name}
            character={character}
            profile_path={profile_path}
          />
        );
      })}
    </List>
  );
};
