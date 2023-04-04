import { Button, Input } from './MoviesForm.styled';

export const MoviesForm = ({ onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <Input type="text" name="searchInput" />
      <Button type="submit">Search</Button>
    </form>
  );
};
