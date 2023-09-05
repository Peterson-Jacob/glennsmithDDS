
gsap.to(".logo",{opacity: 1, duration: 3});
gsap.to(".statement",{opacity: 1,  duration: 1});


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

  infoTL.from('.ddsPicture', {opacity: 0, duration: 1});
  infoTL.to('.ddsInfo', {opacity: 1, duration: 1});

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

  serviceTL.from('.patientPic', {opacity: 0, duration: 1});
  serviceTL.to('.services', { opacity: 1, duration: 1});
  //serviceTL.to('services', {paddingTop: 40, duration: 3}, "sjoin");

  let reviewTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.reviewSection',
      start: '-20% center',
      end: 'bottom center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })

  reviewTL.to('.review', {marginTop: 10, opacity: 1, duration: 1});

  let locationTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.locationSection',
      start: '-20% center',
      end: 'bottom center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })

  locationTL.add("join")
  locationTL.to('.map', {opacity: 1, duration: 2}, "join");
  locationTL.to('.locationInfo', {opacity: 1, duration: 2}, "join");

  let appointTL = gsap.timeline({
    scrollTrigger:{
      trigger: '.appointment',
      start: 'top center',
      end: 'bottom center',
      scrub: false,
      markers: false,
      toggleActions: 'play complete'
    }
  })

  appointTL.add("join");
  appointTL.to('.apptMessage', {opacity: 1, duration: 2}, 'join');
  appointTL.to('.appointmentForm', {opacity: 1, duration: 2}, 'join');