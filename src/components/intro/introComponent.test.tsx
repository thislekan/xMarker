import { render, screen } from "@testing-library/react";
import { IntroComponent } from "./introComponent";

test("<IntroComponent />", () => {
  render(<IntroComponent mentorName="Jake Sullivan" />);
  expect(screen.getAllByText("Jake Sullivan").length).toEqual(2);
});
