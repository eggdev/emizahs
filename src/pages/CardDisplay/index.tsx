import React, { useEffect, useState } from 'react';
import { IonTitle, IonButton } from '@ionic/react';
import quoteData from 'src/data.json';
import 'src/pages/CardDisplay/card-display.css';

const CardDisplay: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  
  const getRandomIndex: (baseValue: number) => number = function(
    multiplyValue: number
  ) {
    return Math.floor(Math.random() * multiplyValue);
  }

  const handleClick = () => {
    const randomIndex = getRandomIndex(quoteData.length);
    setQuoteIndex(randomIndex);
  }

  useEffect(() => {
    setQuoteIndex(getRandomIndex(quoteData.length));
  }, []);

  
  return (
    <>
      <IonTitle size='large'>{quoteData[quoteIndex]}</IonTitle>
      <IonButton onClick={handleClick}>Click Me</IonButton>
    </>
  );
};

export default CardDisplay;
