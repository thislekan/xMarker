import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { memo } from "react";
import { useCalendarEvents } from "../../hooks/calendar/calendarHooks";
import { CalendarComponentProps } from "./interface";
import { useCalendarContextHook } from "../../context/calendarContext";

const localizer = momentLocalizer(moment);
export const CalendarComponent = memo(
  ({
    eventsList = [],
    setShowConfirmation,
    setErrorMessage,
  }: CalendarComponentProps): JSX.Element => {
    const { myEvents, choseTimeSlot } = useCalendarContextHook();
    const {
      handleSelectSlot,
      handleSelectEvent,
      defaultDate,
      scrollToTime,
      detectSlotSelection,
    } = useCalendarEvents({
      eventsList,
      setShowConfirmation,
      setErrorMessage,
    });

    return (
      <div className="calendar">
        <div className="calendar__wrapper">
          <Calendar
            localizer={localizer}
            events={myEvents || []}
            style={{ height: 500 }}
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            selectable={!choseTimeSlot}
            defaultView={Views.WEEK}
            defaultDate={defaultDate}
            scrollToTime={scrollToTime}
            step={60}
            timeslots={1}
            onSelecting={detectSlotSelection}
          />
        </div>
      </div>
    );
  }
);
