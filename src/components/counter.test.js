import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CounterApp from "./counter";

describe("CounterApp Component", () => {
  test("should render the initial count as 0", () => {
    render(<CounterApp />);
    const counterElement = screen.getByText(/Counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });

  test("should increment the counter value", () => {
    render(<CounterApp />);
    const incrementButton = screen.getByText(/Increment/i);
    fireEvent.click(incrementButton);
    const counterElement = screen.getByText(/Counter: 1/i);
    expect(counterElement).toBeInTheDocument();
  });

  test("should decrement the counter value", () => {
    render(<CounterApp />);
    const decrementButton = screen.getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    const counterElement = screen.getByText(/Counter: -1/i);
    expect(counterElement).toBeInTheDocument();
  });

  test("should reset the counter value", () => {
    render(<CounterApp />);
    const incrementButton = screen.getByText(/Increment/i);
    fireEvent.click(incrementButton); // Increment to 1
    const resetButton = screen.getByText(/Reset/i);
    fireEvent.click(resetButton);
    const counterElement = screen.getByText(/Counter: 0/i);
    expect(counterElement).toBeInTheDocument();
  });

  test("should display the correct parity of the counter value", () => {
    render(<CounterApp />);
    const incrementButton = screen.getByText(/Increment/i);

    fireEvent.click(incrementButton); // Counter is 1 (Odd)
    const oddElement = screen.getByText(/The number is Odd/i);
    expect(oddElement).toBeInTheDocument();

    fireEvent.click(incrementButton); // Counter is 2 (Even)
    const evenElement = screen.getByText(/The number is Even/i);
    expect(evenElement).toBeInTheDocument();
  });
});
