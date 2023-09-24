import { render, screen } from "@testing-library/react"
import Login from "../pages/login/Login"

test("email input should be rendered",() => {
    render(<Login />);

    const emailInputEl = screen.getByPlaceholderText(/email/i);
     expect(emailInputEl).toBeInTheDocument();
})