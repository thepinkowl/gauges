import React from 'react';

interface GaugeBarProps {
  percentage: number;
}

const GaugeBar: React.FC<GaugeBarProps> = ({ percentage }) => {
  return (
    <div>
      {percentage}
    </div>
  );
};

export default GaugeBar;
