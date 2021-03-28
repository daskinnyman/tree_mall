import { render, screen } from "@testing-library/react";
import { OrderListHeader } from ".";

test("Should render progressing", () => {
  render(<OrderListHeader title="進行中" />);
  const labelElement = screen.getByText(/進行中/i);
  
  expect(labelElement).toBeInTheDocument();
  expect(labelElement.textContent).toMatch('進行中');
});
