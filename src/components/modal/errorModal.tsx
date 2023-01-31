import { memo } from "react";
import { ErrorModalProps } from "./interface";

export const ErrorModal = memo(
  ({ errorMessage, setErrorMessage }: ErrorModalProps): JSX.Element => {
    const handleClick = () => setErrorMessage("");
    return (
      <div className="error-modal">
        <div className="error-modal__wrapper">
          <div className="header">
            <h5>An error has occured!!!</h5>
          </div>
          <div className="body">
            <div className="title">
              <span className="pointer">Error:</span>
              <p className="title">{errorMessage}</p>
            </div>
          </div>
          <div className="footer">
            <button onClick={handleClick}>OK</button>
          </div>
        </div>
      </div>
    );
  }
);
