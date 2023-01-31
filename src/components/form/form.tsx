import { BaseSyntheticEvent, memo } from "react";
import { useCalendarEvents } from "../../hooks/calendar/calendarHooks";
import { FormComponentProps } from "./interface";

export const FormComponent = memo(
  ({
    eventsList,
    title,
    setTitle,
    reason,
    setReason,
    setChoseTimeSlot,
    setShowConfirmation,
    setErrorMessage,
  }: FormComponentProps): JSX.Element => {
    const { scheduleEvent, cancelEvent } = useCalendarEvents({
      eventsList,
      setShowConfirmation,
      setErrorMessage,
    });

    const handleTitle = (e: BaseSyntheticEvent) => {
      const { value } = e.target;
      setTitle?.(value);
    };

    const handleReason = (e: BaseSyntheticEvent) => {
      const { value } = e.target;
      setReason?.(value);
    };

    const handleSubmit = (e: BaseSyntheticEvent) => {
      e.preventDefault();
      if (!title || !reason) {
        cancelEvent?.();
        setChoseTimeSlot?.(false);
        return setErrorMessage("Please provide Title & Reason for your call");
      }
      scheduleEvent?.();
    };

    const handleCancelEvent = (e: BaseSyntheticEvent) => {
      e.preventDefault();
      cancelEvent?.();
      setChoseTimeSlot?.(false);
    };
    return (
      <div className="form-div">
        <div className="form-div__wrapper">
          <h2>Enter Details Below</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="content">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleTitle}
                placeholder="Enter title here"
                aria-label="title"
              />
            </div>
            <div className="content">
              <label htmlFor="reason">Reason</label>
              <textarea
                name="reason"
                id=""
                value={reason}
                onChange={handleReason}
                placeholder="Enter reason here"
                aria-label="reason"
              />
            </div>
            <div className="content content--btns">
              <button className="cancel" onClick={handleCancelEvent}>
                Cancel Call
              </button>
              <button type="submit" className="submit">
                Confirm Call
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
);
