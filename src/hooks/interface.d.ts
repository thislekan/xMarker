interface Mentor {
  name: string;
  time_zone: string;
}

interface Calendar {
  date_time: string;
}

export interface CalendarEvents {
  mentor: Mentor;
  calendar: Calendar[];
}

export interface GetEventsHooksProps {
  setIsLoading: (value: boolean) => void;
}

export interface CalanderHooksPayload {
  eventsList: Calendar[];
  setShowConfirmation: (value: boolean) => void;
  setErrorMessage: (value: string) => void;
}
