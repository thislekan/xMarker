import { createContext, useState, useContext } from "react";
import { NewEvent, TimeSlotPayload } from "../components/calendar/interface";
import { CalendarContextProps, CalendarContextValues } from "./interface";

const CalendarContext = createContext<CalendarContextValues | null>(null);

export const CalendarContextProvider = ({ children }: CalendarContextProps) => {
  const [title, setTitle] = useState("");
  const [reason, setReason] = useState("");
  const [choseTimeSlot, setChoseTimeSlot] = useState(false);
  const [slot, setSlot] = useState<TimeSlotPayload | null>(null);
  const [myEvents, setMyEvents] = useState<NewEvent[] | null>(null);

  return (
    <CalendarContext.Provider
      value={{
        title,
        setTitle,
        reason,
        setReason,
        choseTimeSlot,
        setChoseTimeSlot,
        slot,
        setSlot,
        myEvents,
        setMyEvents,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContextHook = () => {
  const context = useContext(CalendarContext);
  if (context === undefined) {
    throw new Error(
      "useCalendarContextHook must be used within a MovieContextProvider"
    );
  }
  return { ...context };
};
