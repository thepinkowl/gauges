import React from 'react';
import styled from 'styled-components';
import { WeekDays } from '../../data/weekDays'

const WeekContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Day = styled.div`
  border-radius: 50%;
  font-weight: 400;
  margin-right: 1px;
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--ion-color-medium);
  font-size: 0.65em;

  &.selected {
      background-color: var(--ion-color-light);
  }
`;

interface WeekDisplayProps {
  value?: number[];
}

const WeekDisplay: React.FC<WeekDisplayProps> = ({ value }) => {
  const days = WeekDays;

  return (
    <WeekContainer>
      {days.map(day => (
        <Day key={day.id} className={value?.includes(day.id) ? 'selected' : ''}>
          {day.symbol}
        </Day>
      ))}
    </WeekContainer>
  );
};

export default WeekDisplay;
