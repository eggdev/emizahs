import React, { useEffect, useState } from 'react';
import { IonButton, IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import quoteData from 'src/data.json';

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
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{quoteData[quoteIndex]}</IonCardTitle>
        </IonCardHeader>
        <IonButton onClick={handleClick}>Click Me</IonButton>
      </IonCard>
    </>
  );
};

export default CardDisplay;
