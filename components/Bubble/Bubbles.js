import React from 'react';
import type {Node} from 'react';
import Bubble from "./Bubble";

const Bubbles: () => Node = () => {
  return (
    <>
      <Bubble delayBubble={0}/>
      <Bubble delayBubble={1000}/>
      <Bubble delayBubble={1500}/>
      <Bubble delayBubble={2500}/>
      <Bubble delayBubble={3000}/>
      <Bubble delayBubble={4000}/>
      <Bubble delayBubble={5000}/>
      <Bubble delayBubble={6000}/>
      <Bubble delayBubble={8000}/>
      <Bubble delayBubble={9000}/>
      <Bubble delayBubble={10000}/>
      <Bubble delayBubble={15000}/>
      <Bubble delayBubble={16000}/>
      <Bubble delayBubble={17000}/>
      <Bubble delayBubble={18500}/>
      <Bubble delayBubble={20000}/>
      <Bubble delayBubble={21000}/>
      <Bubble delayBubble={23000}/>
      <Bubble delayBubble={24500}/>
    </>
  );
};


export default Bubbles;
