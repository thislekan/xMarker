import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FormComponent } from "./form";

const mockedSetTitle = jest.fn();
const mockedSetReason = jest.fn();
const mockedSetChoseTimeSlot = jest.fn();
const mockedSetShowConfirmation = jest.fn();
const mockedSetErrorMessage = jest.fn();

const setup = (inputName: string) => {
  const { rerender, debug } = render(
    <FormComponent
      eventsList={[]}
      title=""
      setTitle={mockedSetTitle}
      reason=""
      setReason={mockedSetReason}
      setChoseTimeSlot={mockedSetChoseTimeSlot}
      setShowConfirmation={mockedSetShowConfirmation}
      setErrorMessage={mockedSetErrorMessage}
    />
  );
  const input = screen.getByLabelText(inputName);
  const cancelBtn = screen.getByText("Cancel Call");
  const confirmBtn = screen.getByText("Confirm Call");
  return { input, rerender, debug, cancelBtn, confirmBtn };
};

test("Render <FormComponent />", () => {
  const { input } = setup("title");
  expect(input).toBeInTheDocument();
  expect(input).toBeVisible();
  expect(input.nodeValue).toBe(null);
});

test("<FormComponent /> change title", async () => {
  const { input } = setup("title");
  const _str = "Hello World";
  await userEvent.type(input, _str);
  expect(mockedSetTitle).toHaveBeenCalled();
  expect(mockedSetTitle).toHaveBeenCalledTimes(_str.length);
});

test("Render <FormComponent /> again", () => {
  const { input } = setup("reason");
  expect(input).toBeInTheDocument();
  expect(input).toBeVisible();
  expect(input.nodeValue).toBe(null);
});

test("<FormComponent /> change reason", async () => {
  const { input } = setup("reason");
  const _str = "Hello World. I am super new here!";
  await userEvent.type(input, _str);
  expect(mockedSetReason).toHaveBeenCalled();
  expect(mockedSetReason).toHaveBeenCalledTimes(_str.length);
});

test("<FormComponent /> click Cancel call", async () => {
  const { cancelBtn } = setup("reason");
  await userEvent.click(cancelBtn);
  expect(mockedSetChoseTimeSlot).toHaveBeenCalled();
  expect(mockedSetChoseTimeSlot).toHaveBeenCalledTimes(1);
});

test("<FormComponent /> click Confirm call on empty payload", async () => {
  const { confirmBtn } = setup("reason");
  await userEvent.click(confirmBtn);

  expect(mockedSetChoseTimeSlot).toHaveBeenCalled();
  expect(mockedSetChoseTimeSlot).toHaveBeenCalledTimes(1);
  expect(mockedSetErrorMessage).toHaveBeenCalled();
  expect(mockedSetErrorMessage).toHaveBeenCalledWith(
    "Please provide Title & Reason for your call"
  );
  expect(mockedSetErrorMessage).toHaveBeenCalledTimes(1);
});
