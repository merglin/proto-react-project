import React from "react";
import { render, screen } from "@testing-library/react";

import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
  test("renders Hello World", () => {
    render(<HelloWorld name="Harry" />);
    expect(screen.getByText("Hello Harry")).toBeTruthy();
  });
});
