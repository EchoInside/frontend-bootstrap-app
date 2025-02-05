import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
  it("should increase count when the button is clicked", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /Increase/i });

    fireEvent.click(button);

    const countElement = screen.getByLabelText("count").textContent;

    expect(countElement).toBe("Count: 1");
  });
});
