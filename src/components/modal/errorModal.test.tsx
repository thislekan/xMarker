import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ErrorModal } from "./errorModal";

const mockedFn = jest.fn();

test("<ErrorModal />", async () => {
  render(
    <ErrorModal
      setErrorMessage={mockedFn}
      errorMessage="Error exist in the universe"
    />
  );
  const okBtn = screen.getByText("OK");
  const foundErrMsg = screen.getByText("Error exist in the universe");
  expect(foundErrMsg).toBeVisible();
  await userEvent.click(okBtn);
  expect(mockedFn).toHaveBeenCalled();
  expect(mockedFn).toHaveBeenCalledTimes(1);
  expect(mockedFn).toHaveBeenCalledWith("");
});
