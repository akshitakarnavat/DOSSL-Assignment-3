import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "../src/App";

describe("Student Task Manager App", () => {
  test("displays the React application message", () => {
    render(<App />);

    expect(
      screen.getByText("React is up and running!")
    ).toBeInTheDocument();
  });
});