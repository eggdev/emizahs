import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import quoteData from 'src/data.json';

const CardDisplay = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const getRandomIndex = (multiplyValue) => {
    return Math.floor(Math.random() * multiplyValue);
  };

  useEffect(() => {
    setQuoteIndex(getRandomIndex(quoteData.length));
  }, []);

  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{quoteData[quoteIndex]}</IonCardTitle>
        </IonCardHeader>
      </IonCard>
    </>
  );
};

CardDisplay.propTypes = {
  quoteContent: PropTypes.string,
};

export default CardDisplay;
