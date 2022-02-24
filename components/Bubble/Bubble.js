import React, {useEffect, useRef} from 'react';
import type {Node} from 'react';
import {
  Animated,
  Easing, Dimensions
} from 'react-native';

import {SvgXml} from 'react-native-svg';
import {BubbleImage} from "../../assets/images/bubble";

const Bubble: () => Node = ({delayBubble}) => {

  const valueXY = useRef(new Animated.ValueXY({x:200,y:Dimensions.get ('window').height+100})).current

  const startAnimate = () => {
    let x = Math.floor(Math.random() * Dimensions.get ('window').width);
    let amply = 25;
    let m = [];
    const n = 20;
    const speed = 500;
    let randY = Math.random() * (n/2) + n;
    for(let i = randY; i > -4 ; i-- ){
      m.push(Animated.timing(valueXY, { toValue:
          {x: amply*Math.sin((Dimensions.get ('window').width/n*i)/50)+x, y: (Dimensions.get ('window').height+100)/n*i},
        useNativeDriver: true, duration: randY === i ? 0 : speed, easing: Easing.linear }));
    }
    Animated.loop(Animated.sequence(m),
      {iterations: -1},).start();
  }
  useEffect(() => {
    setTimeout(()=>{
      startAnimate();
    }, delayBubble);
  });



  return (
      <Animated.View style={{ transform: [{ translateY: valueXY.y},{ translateX: valueXY.x}], position: "absolute"}}  >
        <SvgXml xml={BubbleImage}  />
      </Animated.View>
  );
};


export default Bubble;
