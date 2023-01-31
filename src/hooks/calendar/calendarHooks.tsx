import { useEffect, useCallback, useMemo } from "react";
import { NewEvent, TimeSlotPayload } from "../../components/calendar/interface";
import { useCalendarContextHook } from "../../context/calendarContext";
import { CalanderHooksPayload, Calendar } from "../interface";

export const useCalendarEvents = ({
  eventsList,
  setShowConfirmation,
  setErrorMessage,
}: CalanderHooksPayload) => {
  const {
    title = "",
    myEvents,
    setMyEvents,
    setSlot,
    setChoseTimeSlot,
    reason = "",
    slot,
  } = useCalendarContextHook();
  const { formattedEventsFromApi } = useMemo(() => {
    const formattedEventsFromApi: NewEvent[] =
      eventsList?.map((event: Calendar) => {
        const start = new Date(event.date_time);
        const end = new Date(start.getTime() + 1000 * 60 * 60);
        return {
          start,
          end,
          allDay: false,
          title: "Booked from Prod!",
          reason: "",
        };
      }) || [];
    return { formattedEventsFromApi };
  }, [eventsList]);

  const handleSelectSlot = useCallback(
    ({ start, end, slots }: TimeSlotPayload) => {
      if (slots && slots.length > 2) {
        alert("You can only book 1hr calls");
        return false;
      }

      setChoseTimeSlot?.(true);
      setSlot?.({ start, end });
      const payload: NewEvent = { start, end, title, reason, allDay: false };
      const allEvents: NewEvent[] =
        myEvents
          ?.concat(payload)
          .sort(
            (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
          ) || [];
      setMyEvents?.([...allEvents]);
    },
    [myEvents, reason, setChoseTimeSlot, setMyEvents, setSlot, title]
  );

  const scheduleEvent = () => {
    const { start, end } = slot || {};
    if (!start || !end) return;
    const index = myEvents?.findIndex(
      (event: NewEvent) => event.start === start && event.end === end
    );
    if (index && title && reason && myEvents) {
      const oldState = [...myEvents];
      const obj = { start, end, title, reason, allDay: false };
      oldState.splice(index, 1, obj);
      setMyEvents?.(oldState);
    }
    setChoseTimeSlot?.(false);
    setShowConfirmation(true);
  };

  const cancelEvent = () => {
    const { start, end } = slot || {};
    if (!start || !end) return;
    const index = myEvents?.findIndex(
      (event: NewEvent) => event.start === start && event.end === end
    );
    if (index && myEvents) {
      const oldState = [...myEvents];
      oldState.splice(index, 1);
      setMyEvents?.(oldState);
    }
  };

  const handleSelectEvent = useCallback(
    (event: { title: any }) => {
      setErrorMessage?.(
        `An event titled ${event.title} is already scheduled for that time slot.`
      );
    },
    [setErrorMessage]
  );

  const detectSlotSelection = useCallback(
    (range: any) => {
      const startTime = new Date(range.start).getTime();
      const endTime = new Date(range.end).getTime();
      const foundEvent = myEvents?.find((event) => {
        const eventStarts = new Date(event.start).getTime();
        const eventEnds = new Date(event.end).getTime();
        if (startTime > eventStarts && startTime < eventEnds) return event;
        if (endTime === eventEnds) return event;
        return undefined;
      });
      if (foundEvent) return false;
    },
    [myEvents]
  );

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(),
    }),
    []
  );

  useEffect(() => {
    if (formattedEventsFromApi.length && !myEvents?.length) {
      const payload = myEvents?.length ? myEvents : formattedEventsFromApi;
      setMyEvents?.(payload);
    }
  }, [formattedEventsFromApi, myEvents, setMyEvents]);

  return {
    handleSelectSlot,
    handleSelectEvent,
    defaultDate,
    scrollToTime,
    scheduleEvent,
    cancelEvent,
    detectSlotSelection,
  };
};
