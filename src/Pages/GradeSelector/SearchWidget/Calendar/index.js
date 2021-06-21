import React from 'react';
import 'react-dates/initialize';
import styled from 'styled-components/macro';
import { DateRangePicker, isInclusivelyBeforeDay } from 'react-dates';
import moment from 'moment';

function DatePicker() {
  const [startDate, setStartDate] = React.useState(moment());
  const [endDate, setEndDate] = React.useState(null);
  const [focusedInput, setFocusedInput] = React.useState(null);

  return (
    <DatePickerWrap>
      <CalendarIcon></CalendarIcon>
      <DateRangePicker
        startDate={startDate}
        startDateId="startDate"
        endDate={endDate}
        endDateId="endDate"
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        focusedInput={focusedInput}
        onFocusChange={setFocusedInput}
        isOutsideRange={(day) => isInclusivelyBeforeDay(day, moment())}
        initialVisibleMonth={() => moment()}
        numberOfMonths={2}
        displayFormat={'YYYY.MM.DD(ddd)'}
        orientation={'horizontal'}
      />
    </DatePickerWrap>
  );
}

const DatePickerWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 2px 35px 2px 34px;
  text-align: center;

  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }

  .DateRangePickerInput__withBorder {
    border: none;
  }

  .DateInput_input__focused {
    border-bottom: 2px solid #118fe4;
  }

  .DateInput_input {
    font-size: 16px;
  }
`;

const CalendarIcon = styled.span`
  width: 24px;
  height: 24px;
  background: url('/images/calendarIcon.svg') 0 50%/24px 24px no-repeat;
`;
export default DatePicker;
