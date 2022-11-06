import { render, screen } from '@testing-library/react';
import App from './App';
import Course from './Course'

test('renders learn react link', () => {
  render(<Course />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
