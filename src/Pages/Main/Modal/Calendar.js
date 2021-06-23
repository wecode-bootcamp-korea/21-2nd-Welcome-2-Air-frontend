import React, { useEffect, useState } from 'react';
import { DateRange } from 'react-date-range';
import styled from 'styled-components/macro';

// import './styles.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const selectionRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
  color: '#24529c',
  showDateDisplay: true,
};

export default function Calendar({ toClose, handleTimeView }) {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [range, setRange] = useState(selectionRange);

  useEffect(() => {
    handleTimeView(fromDate, toDate);
  }, [fromDate, toDate]);

  const handleSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;

    setFromDate(startDate);
    setToDate(endDate);
    setRange(ranges.selection);
  };

  return (
    <div>
      <StyleDateRange
        onChange={handleSelect}
        ranges={[range]}
        months={2}
        direction="horizontal"
      />
      <SelectionButton onClick={toClose}>선택완료</SelectionButton>
      <CloseButton onClick={toClose} />
    </div>
  );
}

const StyleDateRange = styled(DateRange)`
  .rdrCalendarWrapper {
    font-size: 22px;
  }

  .rdrMonth {
    font-size: 20px;
    height: 25em;
  }

  .rdrDateDisplayItem input {
    height: 3em;
    font-size: 20px;
  }

  .rdrMonthPicker select {
    font-size: 22px;
  }

  .rdrYearPicker select {
    font-size: 22px;
  }

  .rdrInRange {
    color: #c8d1e8 !important;
  }

  .rdrMonthAndYearWrapper button {
    width: 30px;
    height: 30px;
    background: white;
  }

  .rdrMonthAndYearWrapper i {
    border-width: 9px 15px 9px 15px;
  }
`;

const SelectionButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 40%;
  min-width: 13rem;
  min-height: 3.8rem;
  border-radius: 0.2rem;
  border: none;
  font-size: 1.4rem;
  line-height: 1.5;
  background-color: rgb(36, 82, 156);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;

const CloseButton = styled.button`
  display: block;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 4.4rem;
  height: 4.4rem;
  border: 0;
  background: url('/images/close.svg') 50% 50%/24px 24px no-repeat;
  border-radius: 0.2rem;
  cursor: pointer;
  white-space: nowrap;
`;
