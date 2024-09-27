import gsap from "gsap-trial";

export const animatePageIn = () => {
  const loadingBanner = document.querySelector("#loading-banner");

  if (loadingBanner) {
    const tl = gsap.timeline();
    tl.set([loadingBanner], {
      yPercent: 0,
      duration: 1,
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
    }).to([loadingBanner], {
      stagger: 0.2,
      yPercent: -100,
      ease: "power2.out",
      display: "none",
      duration: 1,
      borderBottomLeftRadius: "50%",
      borderBottomRightRadius: "50%",
    });
  }
};
export const animatePageOut = () => {};
