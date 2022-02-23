import React, {useEffect, useRef} from 'react';
import type {Node} from 'react';
import {
  Animated,
  Easing, Dimensions
} from 'react-native';

import {SvgXml} from 'react-native-svg';
import {BubbleImage} from "../../assets/images/bubble";

const Bubble: () => Node = () => {

  const valueXY = useRef(new Animated.ValueXY({x:200,y:Dimensions.get ('window').height+100})).current

  const startAnimate = () => {
    let x = Math.floor(Math.random() * Dimensions.get ('window').width);
    let amply = 25;
    let m = [];
    const n = 20;
    const speed = 500;
    for(let i = n; i > -5 ; i-- ){
      m.push(Animated.timing(valueXY, { toValue:
          {x: amply*Math.sin((Dimensions.get ('window').width/n*i)/50)+x, y: Dimensions.get ('window').height/n*i +100},
        useNativeDriver: true, duration: n === i ? 0 : speed, easing: Easing.linear }));
    }
    Animated.sequence(m).start();
  }
  useEffect(() => {
    startAnimate();
    setInterval(startAnimate, 500*25);
  });



  return (
      <Animated.View style={{ transform: [{ translateY: valueXY.y},{ translateX: valueXY.x}], position: "absolute"}}  >
        <SvgXml xml={BubbleImage}  />
      </Animated.View>
  );
};


export default Bubble;
