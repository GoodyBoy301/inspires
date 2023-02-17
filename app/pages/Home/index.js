import LongPage from "classes/LongPage"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default class Home extends LongPage {
  constructor() {
    super({
      element: ".home",
      id: "home",
      elements: {
        pathA: "#pathA",
        pathB: "#pathB",
        bodyTitles: ".home__body__title",
        images: ".home__body__media img",
        directive:".home__body__directive"
      },
    })
  }

  /** Life Cycle */
  create() {
    super.create()
    this.reCalculate({ scroll: {} })
    const totalLengths = { pathA: pathA.getTotalLength(), pathB: pathB.getTotalLength() }
    if (innerWidth < 768) return;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".home__body__wrapper",
          start: "top 75%",
          scrub: 1.5,
          end: "bottom 100%",
          ease: "expo.inout",
        },
      })
      .fromTo(
        this.elements.bodyTitles[0],
        {
          color: "#333333",
          duration: 0.25,
        },
        {
          color: "#DDD100",
          duration: 0.1,
        },
        0
      )
      .fromTo(
        this.elements.pathA,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0,
        }
      )
      .fromTo(
        this.elements.pathA,
        {
          strokeDasharray: `0 ${totalLengths.pathA}`,
        },
        {
          strokeDasharray: `${totalLengths.pathA} 0`,
        }
      )
      .fromTo(
        this.elements.pathB,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0,
        }
      )
      .fromTo(
        this.elements.bodyTitles[1],
        {
          color: "#333333",
        },
        {
          color: "#DDD100",
          duration: 0.25,
        }
      )
      .fromTo(
        this.elements.pathB,
        {
          strokeDasharray: `0 ${totalLengths.pathB}`,
        },
        {
          strokeDasharray: `${totalLengths.pathB} 0`,
        }
      )
      .fromTo(
        this.elements.bodyTitles[2],
        {
          color: "#333333",
        },
        {
          color: "#DDD100",
          duration: 0.25,
        }
      )
  }
  reCalculate() {
    super.reCalculate({ scroll: {} })
  }
}
