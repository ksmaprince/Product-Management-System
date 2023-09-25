import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../pages/login/Login";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

// const mockedUsedNavigate = jest.fn();

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockedUsedNavigate,
// }));

// describe("App", () => {
//   it("renders", async () => {
//     render(<App />);

//     // expect(mockedUsedNavigate).toHaveBeenCalledWith('/post-1');
//   });
// });

test("email input should be rendered", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emailInputEl = screen.getByTestId(/email/i);
  expect(emailInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailInputEl = screen.getByTestId(/password/i);
    expect(emailInputEl).toBeInTheDocument();
  });
