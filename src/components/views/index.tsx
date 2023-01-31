import { memo } from "react";
import { IntroComponent } from "../intro/introComponent";
import { EventDetailsComponent } from "../eventsDetails/eventDetails";
import { FormComponent } from "../form/form";
import { ViewsComponentProps } from "./interface";
import { useCalendarContextHook } from "../../context/calendarContext";

export const InformationView = memo(
  ({
    mentor,
    eventsList,
    setShowConfirmation,
    setErrorMessage,
  }: ViewsComponentProps) => {
    const {
      choseTimeSlot,
      slot,
      title = "",
      reason = "",
      setReason,
      setChoseTimeSlot,
      setTitle,
    } = useCalendarContextHook();

    return (
      <>
        {choseTimeSlot ? (
          <>
            <EventDetailsComponent slot={slot} />
            <FormComponent
              eventsList={eventsList}
              title={title}
              reason={reason}
              setReason={setReason}
              setChoseTimeSlot={setChoseTimeSlot}
              setTitle={setTitle}
              setShowConfirmation={setShowConfirmation}
              setErrorMessage={setErrorMessage}
            />
          </>
        ) : (
          <IntroComponent
            mentorName={mentor?.name}
            timeZone={mentor.time_zone}
          />
        )}
      </>
    );
  }
);
