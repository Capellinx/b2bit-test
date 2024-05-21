import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { RoutesMain } from "./routesMain"

describe("RoutesMain component", () => {
   it("Should be able renders login page by default", () => {
      render(
         <BrowserRouter>
            <RoutesMain />
         </BrowserRouter>
      )
      const emailInput = screen.getByPlaceholderText('@example.com');
      const passwordInput = screen.getByPlaceholderText('****************');
      const signInButton = screen.getByText('Sign in');

      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(signInButton).toBeInTheDocument();
   });
})