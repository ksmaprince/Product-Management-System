import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Register from "../pages/register/Register";
import { BrowserRouter } from "react-router-dom";

// jest.mock("axios", () => ({
//     __esModule: true,
//     default:{
//         post: () => ({
//             data:"usertoken"
//         })
//     }
// }));

test("email input should be rendered", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const emailInputEl = screen.getByLabelText(/email/i);
  expect(emailInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const passwordInputEl = screen.getByTestId(/password/i);

  expect(passwordInputEl).toBeInTheDocument();
});

test("confirm password input should be rendered", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const confirmPasswordInputEl = screen.getByLabelText(/confirm password/i);
  expect(confirmPasswordInputEl).toBeInTheDocument();
});

test("Register btn should be rendered", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const registerBtnEl = screen.getByRole("button");
  expect(registerBtnEl).toBeInTheDocument();
});

test("email input should be empty", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const emailInputEl = screen.getByLabelText(/email/i);
  console.log(emailInputEl.value);
  expect(emailInputEl.value).toBe("");
});

test("password input should be empty", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const passwordInputEl = screen.getByTestId(/password/i);
  expect(passwordInputEl.value).toBe(undefined);
});

test("confirm password input should be rendered", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const confirmPasswordInputEl = screen.getByLabelText(/confirm password/i);
  expect(confirmPasswordInputEl.value).toBe("");
});

test("Register btn should be disabled", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const registerBtnEl = screen.getByRole("button");
  expect(registerBtnEl).toBeDisabled();
});

test("email input should change", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const emailInputEl = screen.getByLabelText(/email/i);
  const testValue = "test";
  fireEvent.change(emailInputEl, { target: { value: testValue } });
  expect(emailInputEl.value).toBe(testValue);
});

// test("password input should be empty", () => {
//   render(
//     <BrowserRouter>
//       <Register />
//     </BrowserRouter>
//   );
//   const passwordInputEl = screen.getAllByTestId(/password/i);
//   const testValue = "test";
//   fireEvent.change(passwordInputEl[0], { target: { value: testValue } });
//   expect(passwordInputEl[0].value).toBe(testValue);
// });

test("confirm password input should be rendered", () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const confirmPasswordInputEl = screen.getByLabelText(/confirm password/i);
  const testValue = "test";
  fireEvent.change(confirmPasswordInputEl, { target: { value: testValue } });
  expect(confirmPasswordInputEl.value).toBe(testValue);
});

// test("register btn should not be disabled", () => {
//   render(
//     <BrowserRouter>
//       <Register />
//     </BrowserRouter>
//   );
//   const registerBtnEl = screen.getByRole("button");
//   const emailInputEl = screen.getByLabelText(/email/i);
//   const passwordInputEl = screen.getByTestId(/password/i);
//   const confirmPasswordInputEl = screen.getByLabelText(/confirm password/i);
//   const testValue = "test";
//   fireEvent.change(emailInputEl, { target: { value: testValue } });
//   fireEvent.change(passwordInputEl, { target: { value: testValue } });
//   fireEvent.change(confirmPasswordInputEl, { target: { value: testValue } });

//   expect(registerBtnEl).not.toBeDisabled();
// });
