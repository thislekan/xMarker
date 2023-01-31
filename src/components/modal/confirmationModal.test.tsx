import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConfirmationModal } from "./confirmationModal";

const mockSetShowConfirmation = jest.fn();

test("<ConfirmationModalComponent />", async () => {
  render(<ConfirmationModal setShowConfirmation={mockSetShowConfirmation} />);
  const okBtn = screen.getByText("OK");
  await userEvent.click(okBtn);

  expect(mockSetShowConfirmation).toHaveBeenCalled();
  expect(mockSetShowConfirmation).toHaveBeenCalledTimes(1);
});
