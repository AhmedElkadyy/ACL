import { render, screen } from '@testing-library/react';
import App from './App';
import Course from '../Course/course'
import login from '../loginPage/Login'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
