import React from 'react';
import styled from 'styled-components';

interface GaugeBarProps {
  percentage: number;
}

const Gauge = styled.div`
  height: 10px;
  width: 100%;
  border-radius: 10px;
  background-color: lawngreen;
  padding: 2px;
  margin-left: -2px;
`;

// const ProgressProps = { width: Number };
// const PPP = styled('div', ProgressProps)`
//   height: 10px;
//   border-radius: 10px;
//   width: ${props => props.width || "0"}%
// `;


const GaugeBar: React.FC<GaugeBarProps> = ({ percentage }) => {
  return (
    <Gauge>
      {percentage}
    </Gauge>
  );
};

export default GaugeBar;
