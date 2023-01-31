import { renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { useGetEventsHook } from "./getEvents";

const server = setupServer(
  rest.get("/mockedUrl", (req, res, ctx) => {
    return res(
      ctx.json({
        mentor: {
          name: "Charles Bukowski",
          time_zone: "03:00",
        },
        calendar: [
          {
            date_time: "2023-07-25 20:00:00 +0200",
          },
          {
            date_time: "2023-07-26 20:00:00 +0200",
          },
          {
            date_time: "2023-07-27 00:00:00 +0200",
          },
        ],
      })
    );
  })
);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Testing getEvents hook", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useGetEventsHook("/mockedUrl")
  );

  expect(result.current.calendarEvents).toBe(null);
  expect(result.current.isLoading).toBe(true);
  await waitForNextUpdate();
  expect(result.current.calendarEvents?.calendar.length).toBe(3);
  expect(result.current.isLoading).toBe(false);
});
