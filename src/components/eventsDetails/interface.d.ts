import { TimeSlotPayload } from "../calendar/interface";

export interface EventDetailsProps {
  slot: (TimeSlotPayload | null) | undefined;
}
