import { memo } from "react";
import { IntroComponentProps } from "./interface";

export const IntroComponent = memo(
  ({ mentorName = "Demo Mentor" }: IntroComponentProps): JSX.Element => {
    return (
      <div className="intro">
        <div className="intro__content">
          <h4>{mentorName}</h4>
          <p>
            Pick a timeslot and provide details of the agenda for our
            prospective call
          </p>
          <p>
            You can select a maximum of 1hr on the calendar. The minimum time
            required for a call to happen is 30 mins
          </p>
          <p>I am looking forward to discussing with you. Thanks.</p>
          <br />
          <p>Best,</p>
          <p>{mentorName}</p>
        </div>
      </div>
    );
  }
);
