import { CastCharacter, CastItemStyled, CastName } from './CastItem.styled';
import PropTypes from 'prop-types';

export const CastItem = ({ name, character, profile_path }) => {
  const actorPoster = profile_path
    ? `https://image.tmdb.org/t/p/w300/${profile_path}`
    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png';
  return (
    <CastItemStyled>
      <img src={actorPoster} alt={name} width="300px" height="450px" />
      <CastName>{name}</CastName>
      <CastCharacter>Character: {character}</CastCharacter>
    </CastItemStyled>
  );
};

// CastItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   character: PropTypes.string,
//   profile_path: PropTypes.string,
// };
