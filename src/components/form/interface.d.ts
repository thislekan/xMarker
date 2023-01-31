interface Calendar {
  date_time: string;
}

export interface FormComponentProps {
  eventsList: Calendar[];
  title: string;
  reason: string;
  setTitle: ((value: string) => void) | undefined;
  setReason: ((value: string) => void) | undefined;
  setChoseTimeSlot: ((value: boolean) => void) | undefined;
  setShowConfirmation: (value: boolean) => void;
  setErrorMessage: (value: string) => void;
}
