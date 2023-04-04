import { ButtonLink } from './MovieDetailsButton.styled';
import PropTypes from 'prop-types';

export const MovieDetailsButton = ({ backLinkHref }) => {
  return <ButtonLink to={backLinkHref.current}>Back</ButtonLink>;
};

MovieDetailsButton.propTypes = {
  movieDescription: PropTypes.object,
};
