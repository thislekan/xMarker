import { useState } from "react";
import { CalendarContextProvider } from "./context/calendarContext";
import { SpinnerComponent } from "./components/spinner/spinner";
import { CalendarComponent } from "./components/calendar/calendar";
import { useGetEventsHook } from "./hooks/events/getEvents";
import { InformationView } from "./components/views";
import { ErrorModal } from "./components/modal/errorModal";
import { ConfirmationModal } from "./components/modal/confirmationModal";

function App({ url = "" }) {
  const { calendarEvents, isLoading } = useGetEventsHook(url);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <CalendarContextProvider>
      <div className="App">
        <div className="App__wrapper">
          <div className="App__wrapper__content">
            {isLoading && <SpinnerComponent />}
            {errorMessage && (
              <ErrorModal
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            )}
            {showConfirmation && (
              <ConfirmationModal setShowConfirmation={setShowConfirmation} />
            )}
            <div className="left-panel">
              <InformationView
                mentor={calendarEvents?.mentor || { name: "", time_zone: "" }}
                eventsList={calendarEvents?.calendar || []}
                setShowConfirmation={setShowConfirmation}
                setErrorMessage={setErrorMessage}
              />
            </div>
            <div className="right-panel">
              <CalendarComponent
                eventsList={calendarEvents?.calendar}
                setShowConfirmation={setShowConfirmation}
                setErrorMessage={setErrorMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </CalendarContextProvider>
  );
}

export default App;
