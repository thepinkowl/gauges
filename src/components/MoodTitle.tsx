import React from 'react';
import './MoodTitle.scss';

interface TitleProps {
  name: string;
  status: string;
}

const MoodTitle: React.FC<TitleProps> = ({ name, status }) => {
  return (
    <h1>Hey <span>{name}</span>, you're doing {status} today!</h1>
  );
};

export default MoodTitle;
