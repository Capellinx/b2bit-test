import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import { Input } from './index';
import { createRef } from "react";


describe("Input component", () => {
   it("Should be able render the input with the correct label", () => {
      render(<Input label="E-mail"/>)

      const labelElementet = screen.getByText("E-mail")
      expect(labelElementet).toBeInTheDocument()
   });

   it("Should be able fowards to the input element", () => {
      const ref = createRef<HTMLInputElement>();
      render(<Input label="E-mail" ref={ref}/>)

      expect(ref.current).toBeInstanceOf(HTMLInputElement)
   });

   it("Sould be able display error message when error is pased", () => {
      render(<Input label="E-mail" error={{ message: "This field is required" }} />);
      
      const errorElement = screen.getByText("This field is required")
      expect(errorElement).toBeInTheDocument()
   });

   it("Should be able not display an error message when error is not passed", () => {
      render(<Input label="E-mail"/>);

      const errorElement = screen.queryByText("This field is required")
      expect(errorElement).toBeNull()
   });

   it("Should be able passes other props to the input component", () => {
      render(<Input label="E-mail" placeholder="@example.com"/>);

      const errorElement = screen.getByPlaceholderText("@example.com")
      expect(errorElement).toBeInTheDocument()
   });
});