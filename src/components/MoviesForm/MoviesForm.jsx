import { Button, FormWrapper, Input } from './MoviesForm.styled';
import PropTypes from 'prop-types';

export const MoviesForm = ({ onFormSubmit }) => {
  return (
    <FormWrapper>
      <form onSubmit={onFormSubmit}>
        <Input type="text" name="searchInput" />
        <Button type="submit">Search</Button>
      </form>
    </FormWrapper>
  );
};

MoviesForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
