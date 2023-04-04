import { AddictionalInfoList, ButtonLink } from './MovieAddictionalInfo.styled';

export const MovieAddictionalInfo = () => {
  return (
    <>
      <h2>Addictional information</h2>
      <AddictionalInfoList>
        <li>
          <ButtonLink to="cast">Cast</ButtonLink>
        </li>
        <li>
          <ButtonLink to="reviews">Reviews</ButtonLink>
        </li>
      </AddictionalInfoList>
    </>
  );
};
