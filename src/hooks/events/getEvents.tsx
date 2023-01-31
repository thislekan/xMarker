import { useState, useEffect } from "react";
import { CalendarEvents } from "../interface";

export const useGetEventsHook = (url = "") => {
  const [isLoading, setIsLoading] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvents | null>(
    null
  );

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data: CalendarEvents = await response.json();
        if (data) {
          setCalendarEvents(data);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
    };
    fetchEvents();
  }, [url]);

  return { calendarEvents, isLoading };
};
