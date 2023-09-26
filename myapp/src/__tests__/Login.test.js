import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../pages/login/Login";
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
      <Login />
    </BrowserRouter>
  );
  const emailInputEl = screen.getByLabelText(/email/i);
  expect(emailInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const passwordInputEl = screen.getByLabelText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test("login btn should be rendered", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const loginBtnEl = screen.getByRole("button");
  expect(loginBtnEl).toBeInTheDocument();
});

test("email input should be empty", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const emailInputEl = screen.getByLabelText(/email/i);
  console.log(emailInputEl.value);
  expect(emailInputEl.value).toBe("");
});

test("password input should be empty", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const passwordInputEl = screen.getByLabelText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

test("login btn should be disabled", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const loginBtnEl = screen.getByRole("button");
    expect(loginBtnEl).toBeDisabled();
  });

  test("email input should change", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const emailInputEl = screen.getByLabelText(/email/i);
    const testValue = "test";
    fireEvent.change(emailInputEl, {target:{value: testValue}})
    expect(emailInputEl.value).toBe(testValue);
  });
  
  test("password input should be empty", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const passwordInputEl = screen.getByLabelText(/password/i);
    const testValue = "test";
    fireEvent.change(passwordInputEl,{target:{value: testValue}});
    expect(passwordInputEl.value).toBe(testValue);
  });

  test("login btn should not be disabled", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const loginBtnEl = screen.getByRole("button");
    const emailInputEl = screen.getByLabelText(/email/i);
    const passwordInputEl = screen.getByLabelText(/password/i);
    const testValue = "test";
    fireEvent.change(emailInputEl, {target:{value: testValue}});
    fireEvent.change(passwordInputEl,{target:{value: testValue}});
    expect(loginBtnEl).not.toBeDisabled();
  });


//   test("submit the form with user credentials", () => {
//     const mockSubmit = jest.fn();
//     render(
//       <BrowserRouter>
//         <Login />
//       </BrowserRouter>
//     );
//     const loginBtnEl = screen.getByRole("button");
//     const emailInputEl = screen.getByLabelText(/email/i);
//     const passwordInputEl = screen.getByLabelText(/password/i);
//     const testValue = "test";
//     fireEvent.change(emailInputEl, {target:{value: testValue}});
//     fireEvent.change(passwordInputEl,{target:{value: testValue}});
//     fireEvent.click(loginBtnEl);

//     //expect(loginBtnEl).toHaveBeenCalledTimes(1);
//     expect(mockSubmit).toHaveBeenCalledWith({
//         email:'test@miu.edu',
//         password:'123'
//     })
//   });


