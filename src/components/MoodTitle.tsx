import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  width: 73%;
  max-width: 350px;
  font-family: var(--tpo-font-family);
  font-size: var(--tpo-font-big);
  font-weight: 700;
  line-height: 140%;
  margin: var(--tpo-margin);
  margin-top: 40px;
`;

const Name = styled.span`
  color: var(--ion-color-primary);
`

interface TitleProps {
  name: string;
  status: string;
}

const MoodTitle: React.FC<TitleProps> = ({ name, status }) => {
  return (
    <Title>Hey <Name>{name}</Name>, you're doing {status} today!</Title>
  );
};

export default MoodTitle;
