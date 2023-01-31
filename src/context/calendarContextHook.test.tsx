import { renderHook } from "@testing-library/react-hooks";
import { useCalendarContextHook } from "./calendarContext";

test("Calendar context hook", () => {
  const { result } = renderHook(useCalendarContextHook);
  expect(result.error).toBe(undefined);
});
