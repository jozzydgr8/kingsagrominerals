import React, { useEffect } from 'react';
import { Layout } from './Layout';

function App() {
  useEffect(()=>{
    const animation = ()=>{
      var leftAnimate = document.querySelectorAll('.animate-left');
      var rightAnimate = document.querySelectorAll('.animate-right');
      var downAnimate = document.querySelectorAll('.animate-down');
      var upAnimate = document.querySelectorAll('.animate-up');

      var windowHeight = window.innerHeight;
      rightAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationRight')
        }

      })
      leftAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationLeft')
        }

      })
      upAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationUp')
        }

      })
      downAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationDown')
        }

      })
    }
    window.addEventListener('scroll', animation);
  },[])
  return (
   <Layout/>
  );
}

export default App;
