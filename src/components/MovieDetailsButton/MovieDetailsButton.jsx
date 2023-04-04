import { ButtonLink } from './MovieDetailsButton.styled';

export const MovieDetailsButton = ({ backLinkHref }) => {
  return <ButtonLink to={backLinkHref.current}>Back</ButtonLink>;
};
