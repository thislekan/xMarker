import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useCalendarEvents } from "./calendarHooks";

const list = [
  {
    date_time: "2023-07-25 20:00:00 +0200",
  },
  {
    date_time: "2023-07-26 20:00:00 +0200",
  },
  {
    date_time: "2023-07-27 00:00:00 +0200",
  },
];
const mockFunc1 = jest.fn();
const mockFunc2 = jest.fn();
test("testing useCalendarEvents hook", () => {
  const { result } = renderHook(() =>
    useCalendarEvents({
      eventsList: list,
      setShowConfirmation: mockFunc1,
      setErrorMessage: mockFunc2,
    })
  );

  act(() => result.current.handleSelectEvent({ title: "fowl" }));

  expect(mockFunc2).toHaveBeenCalled();
  expect(mockFunc2).toHaveBeenCalledTimes(1);
});
