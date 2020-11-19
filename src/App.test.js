import { render, screen } from '@testing-library/react';
import { Task1 } from './components/Task1';
import App from './App';

test('renders learn react link', () => {
  render(<Task1 />);
  const linkElement = screen.getByText(/enter/i);
  expect(linkElement).toBeInTheDocument()
});
