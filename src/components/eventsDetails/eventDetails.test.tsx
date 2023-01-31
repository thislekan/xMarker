import { render, screen } from "@testing-library/react";
import { EventDetailsComponent } from "./eventDetails";

test("<EventDetailsComponent />", () => {
  const now = new Date();
  const in1hr = new Date(now.getTime() + 1000 * 60 * 60);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const slot = { start: now, end: in1hr };
  render(<EventDetailsComponent slot={slot} />);

  expect(screen.getByText("1 hour(s)")).toBeVisible();
  expect(screen.getByText(now.toDateString())).toBeVisible();
  expect(screen.getByText(timeZone)).toBeVisible();
});
