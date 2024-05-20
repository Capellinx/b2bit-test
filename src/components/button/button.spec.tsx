import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import { Button } from './index';
import { createRef } from "react";


describe("Button component", () => {
   it("Sould be able fowards ref to the button component", () => {
      const ref = createRef<HTMLButtonElement>()
      render(<Button ref={ref}>Sign in</Button>)

      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
   });

   it("Sould be able render the button with the correct children", () => {
      render(<Button>Sign in</Button>)

      screen.debug()

      const buttonElement = screen.getByText("Sign in");
      expect(buttonElement).toBeTruthy();
   });

   it("Sould be able applies additional classes correctly", () => {
      render(<Button newClass="class">Sign in</Button>)

      screen.debug()

      const buttonElement = screen.getByText("Sign in");
      expect(buttonElement).toBeInTheDocument()
      expect(buttonElement).toHaveClass("class")

   });
   it("Sould be able passes other props to the button element", () => {
      render(<Button aria-label="button">Sign in</Button>)

      const buttonElement = screen.getByLabelText("button");
      expect(buttonElement).toBeInTheDocument();
   });
})