import { Mentor } from "../../hooks/interface";

interface Calendar {
  date_time: string;
}

export interface ViewsComponentProps {
  mentor: Mentor;
  eventsList: Calendar[];
  setShowConfirmation: (value: boolean) => void;
  setErrorMessage: (value: string) => void;
}
