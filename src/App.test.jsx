import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
  it("should increase count when the button is clicked", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /count is 0/i });

    fireEvent.click(button);

    expect(button.textContent).toBe("count is 1");
  });
});
