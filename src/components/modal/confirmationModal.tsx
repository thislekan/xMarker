import { memo, useEffect, useState } from "react";
import { useCalendarContextHook } from "../../context/calendarContext";
import { ConfirmationModalProps } from "./interface";

const ConfirmationComponent = ({
  setShowConfirmation,
}: ConfirmationModalProps) => {
  const [start, setStart] = useState<Date | null>(null);
  const { title, reason, setTitle, setReason, slot } = useCalendarContextHook();

  const handleClick = () => {
    setTitle?.("");
    setReason?.("");
    setShowConfirmation(false);
  };

  useEffect(() => {
    if (slot) setStart(new Date(slot.start));
  }, [slot]);

  return (
    <div className="success">
      <div className="success__wrapper">
        <div className="header">
          <h5>Your call has been scheduled!</h5>
        </div>
        <div className="body">
          <div className="title">
            <span className="pointer">Title:</span>
            <p className="title">{title}</p>
          </div>
          <div className="reason">
            <span className="pointer">Reason:</span>
            <p className="reason">{reason}</p>
          </div>
          <div className="date">
            <span className="pointer">Date:</span>
            <p className="reason">{start?.toDateString()}</p>
          </div>
          <div className="time">
            <span className="pointer">Time:</span>
            <p className="reason">{start?.toLocaleTimeString("en-US")}</p>
          </div>
          <div className="zone">
            <span className="pointer">TimeZone:</span>
            <p className="reason">
              {Intl.DateTimeFormat().resolvedOptions().timeZone}
            </p>
          </div>
        </div>
        <div className="footer">
          <button onClick={handleClick}>OK</button>
        </div>
      </div>
    </div>
  );
};

export const ConfirmationModal = memo(ConfirmationComponent);
