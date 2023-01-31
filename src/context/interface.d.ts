import { NewEvent, TimeSlotPayload } from "../components/calendar/interface";

export interface CalendarContextValues {
  title: string;
  reason: string;
  choseTimeSlot: boolean;
  slot: TimeSlotPayload | null;
  myEvents: NewEvent[] | null;
  setTitle(value: string): void;
  setReason(value: string): void;
  setChoseTimeSlot(value: boolean): void;
  setSlot(value: TimeSlotPayload): void;
  setMyEvents: (value: NewEvent[]) => void;
}

export interface CalendarContextProps {
  children: React.ReactNode;
}
