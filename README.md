#### How to setup this project

Pull the project to your local machine
run `npm install` and after the installation run `npm run start`
to run the test, run `npm run test`

#### Design decisions

The app was built with React, Typescript & SCSS (SASS). This decision is based on my comfortablity with these technologies. The calendar package used is `react-big-calendar`. This was done to avoid reinventing the wheel.

The App uses a React context in order to avoid unneccessary prop drilling. Some logic for the calendar were moved into a custom hook. The reason for this is to seperate the calendar component logic from the component while keeping the component shape small, clean & tidy. It was done to promote easy code reuse.

#### List of features completed (instructions followed)

- [x] scenario 1:
      Given I'm in the calendar page
      When I click on a date
      Then I see all the time slots containing the available and already allocated call sessions

- [x] scenario 2:
      Given I have chosen a date on the calendar page
      When I click on a free time slot
      Then I see a field where I type the reason for the call
      And I click on the button Confirm Call
      Then I see a confirmation message with the date, time, and reason for my call

- [x] scenario 3:
      Given I have chosen a date in the calendar page
      When I click on a time slot that has already been allocated to a call
      Then I see an error message about the allocated slot

#### Requirements / Assumptions:

- [x] Allocated slots from the external api might change any time.
- [x] A call will always take 1 full hour and start at the full hour.
- [x] Our mentors are superheroes and work 24/7.
- [x] If there is an allocated slot within the hour, the full hour is considered unavailable.

#### extra features implemented

- [x] preventing selection of time slots when user is inputing reason & title
- [x] user can see the details of the slot selected while typing title & reason

#### Things to note

- The styling and general look of the UI is bare.
- the focus was on functionality
- the created events are not persisted

#### What can be improved?

- the UI could be improved

---

the url for the project can be found [here](https://glittery-piroshki-6eec08.netlify.app/)
