
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
gsap.from(".nlink",{
    stagger:.5,
    y:20,
    ease:Power3,
    duration:1,
    opacity:0
});

Shery.textAnimate("#headings h1" , {

    style: 2,
    y: 20,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  gsap.from(".anim2",{
    stagger:.2,
    y:40,
    duration:2,
    ease:Expo,
    opacity:0
  })

  Shery.imageEffect("#imgntext img",{
    style:4,
    config:{"uColor":{"value":true},"uSpeed":{"value":2.79,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":0.74,"range":[0,5]},"uFrequency":{"value":2.15,"range":[0,10]},"geoVertex":{"range":[1,64],"value":52.02},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500122531675786},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.6,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  });

  Shery.imageEffect(".imgeff img",{
    style:3,
    config:{"uFrequencyX":{"value":10.74,"range":[0,100]},"uFrequencyY":{"value":8.26,"range":[0,100]},"uFrequencyZ":{"value":9.92,"range":[0,100]},"geoVertex":{"range":[1,64],"value":34.84},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.5999672721605454},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.56,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });

  // gsap.from("#imgntext img",{
  //   y:"30",
  //   opacity:0,
  //   duration:2,
  //   ease:expo,
  // });

  Shery.imageEffect("#bimg",{
    style:5,
    config:{"a":{"value":1.49,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.7647312937625923},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.5,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.03,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":28}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  gooey:true
  });

  document.querySelector("#ftext button")
  .addEventListener("mouseover",function(){
    gsap.to("#future video",{
        opacity:1,
        duration:1.2,
        ease:Power4,
    });
  })
  
  document.querySelector("#ftext button").addEventListener("mouseleave",function(){
    gsap.to("#future video",{
        opacity:0,
        duration:1.2,
        ease:Power4,
    })
  })