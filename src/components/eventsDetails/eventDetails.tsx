import { useState, useEffect, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAfrica,
  faHourglassStart,
  faCalendarXmark,
} from "@fortawesome/free-solid-svg-icons";
import { EventDetailsProps } from "./interface";

export const EventDetailsComponent = memo(({ slot }: EventDetailsProps) => {
  const [duration, setDuration] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    if (slot) {
      const hour = 1000 * 60 * 60;
      const start = new Date(slot.start);
      const end = new Date(slot.end);
      const difference = end.getTime() - start.getTime();
      const actualDifference = difference / hour;
      const _duration = actualDifference * 60;
      const timeUnit = _duration >= 60 ? "hour(s)" : "minute(s)";
      setDuration(`${_duration === 60 ? 1 : _duration} ${timeUnit}`);
      setDay(start.toDateString());
    }
  }, [slot]);

  return (
    <div className="event-details">
      <div className="event-details__wrapper">
        <div className="content">
          <FontAwesomeIcon icon={faHourglassStart} />
          <p>{duration}</p>
        </div>
        <div className="content">
          <FontAwesomeIcon icon={faCalendarXmark} />
          <p>{day}</p>
        </div>
        <div className="content">
          <FontAwesomeIcon icon={faEarthAfrica} />
          <p>{Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
        </div>
      </div>
    </div>
  );
});
