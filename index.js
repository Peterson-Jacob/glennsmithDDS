
gsap.to(".logo",{opacity: 1, duration: 3});
gsap.to(".statement",{opacity: 1, duration: 2});


let infoTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.infoDentist',
      start: 'top center',
      end: 'bottom center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })

  infoTL.add("join");
  infoTL.from('.ddsPicture', {opacity: 0, duration: 2}, "join");
  infoTL.to('.ddsInfo', {marginTop: 6, opacity: 1, delay: 1, duration: 2}, "join");

  let serviceTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.serviceInfo',
      start: 'top center',
      end: 'bottom center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })

  serviceTL.add("sjoin")
  serviceTL.from('.patientPic', {opacity: 0, duration: 3}, "sjoin");
  serviceTL.to('.services', {marginTop: 6, opacity: 1, delay: 1, duration: 3, ease: "power1.out"}, "sjoin");
  //serviceTL.to('services', {paddingTop: 40, duration: 3}, "sjoin");