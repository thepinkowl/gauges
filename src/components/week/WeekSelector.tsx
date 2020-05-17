import React, { useEffect, useState } from 'react';
import {
  useIonViewWillEnter
} from '@ionic/react';
import styled from 'styled-components';
import { WeekDay, WeekDays } from '../../data/weekDays'

const WeekContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Day = styled.div`
  border-radius: 50%;
  font-weight: 700;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:active,
  &.selected {
      background-color: var(--ion-color-light);
  }
`;

interface WeekSelectorProps {
  when: number[];
  onValueChange: (value: number[]) => void;
}

const WeekSelector: React.FC<WeekSelectorProps> = ({ when, onValueChange }) => {
  const days = WeekDays;

  const [selectedDays, setSelectedDays] = useState<number[]>([]);

  useEffect(() => {
    setSelectedDays(when);
    console.log(when);
  }, []);

  useIonViewWillEnter(() => {
    setSelectedDays(when);
    console.log(when);
  });

  const toggleDay = (day: WeekDay) => {
    const isInArray = selectedDays.includes(day.id);
    let newValue = isInArray ? selectedDays.filter(v => v !== day.id) : [...selectedDays, day.id];
    onValueChange(newValue);
    setSelectedDays(newValue);
  }

  return (
    <WeekContainer>
      {days.map(day => (
        <Day onClick={() => toggleDay(day)} key={day.id} className={selectedDays.includes(day.id) ? 'selected' : ''}>
          {day.symbol}
        </Day>
      ))}
    </WeekContainer>
  );
};

export default WeekSelector;
