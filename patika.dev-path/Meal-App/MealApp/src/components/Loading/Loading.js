import React from 'react';
import {View, Text, Image} from 'react-native';
import LottieView from 'lottie-react-native';
const Loading = () => {
  return (
    <>
      <LottieView
        source={require('../../assets/loading2.json')}
        autoPlay
        loop
      />
    </>
  );
};

export default Loading;
