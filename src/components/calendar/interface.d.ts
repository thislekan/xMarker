import { Calendar } from "../../hooks/interface";

export interface CalendarComponentProps {
  eventsList?: Calendar[];
  setShowConfirmation: (value: boolean) => void;
  setErrorMessage: (value: string) => void;
}

export interface NewEvent {
  start: Date;
  end: Date;
  allDay: boolean;
  title: string;
  reason: string;
  createdBy?: string;
}

export interface TimeSlotPayload {
  start: Date;
  end: Date;
  slots?: Date[];
}
