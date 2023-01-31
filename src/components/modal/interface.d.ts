export interface ConfirmationModalProps {
  setShowConfirmation: (value: boolean) => void;
}

export interface ErrorModalProps {
  errorMessage: string;
  setErrorMessage: (value: string) => void;
}
