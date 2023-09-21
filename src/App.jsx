import "./App.css";
import "./index.css";
import diamond from "./images/icons/diamond.png";
import discount from "./images/icons/discount.png";
import original from "./images/icons/original.png";
import dkny from "./images/logos/dkny.png";
import essentials from "./images/logos/essentials.png";
import guess from "./images/logos/guess.png";
import hm from "./images/logos/hm.png";
import puma from "./images/logos/puma.png";
import tommy from "./images/logos/Tommy_Hilfiger.png";
import uniqlo from "./images/logos/uniqlo.png";
import logo from "./images/logos.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "./images/slider/slider1.jpg";
import slider2 from "./images/slider/slider2.jpg";
import slider3 from "./images/slider/slider3.jpg";
import slider4 from "./images/slider/slider4.jpg";
import slider5 from "./images/slider/slider5.jpg";
import slider6 from "./images/slider/slider6.jpg";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    arrows: false,
    centerMode: true,
    pauseOnHover: true,
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    arrows: false,
    centerMode: true,
    pauseOnHover: true,
  };

  return (
    <>
      <section className="bg-thrd-pink md:h-screen">
        <div className="flex flex-row items-start justify-around banner spline-font py-2 md:text-xs md:pt-16 tracking-[1em] md:tracking-[3em]">
          <p>EXCLUSIVITY</p>
          <p>·</p>
          <p>BRANDS</p>
          <p>·</p>
          <p>DISCOUNTS</p>
        </div>

        <div className="flex flex-col h-auto items-center justify-center p-6 gap-12">
          <div className="silk-screen text-7xl ml-7 md:ml-12 md:m-4 md:text-[12em] md:h-72 md:flex md:flex-col md:items-center md:justify-center">
            <p>
              <Typewriter
                options={{
                  strings: ["THRD"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 3000,
                  cursorClassName: 'cursor'
                }}
              />
            </p>
          </div>
          <p className="silk-screen text-xs md:text-4xl text-center m-4 w-36 w-full md:px-36 md:pt-1">
            UNLOCK EXCLUSIVE ACCESS TO AUTHENTIC HIGH FASHION BRANDS AT
            UNBEATABLE PRICES
          </p>
        </div>
      </section>
      <section className="bg-black md:h-screen">
        <div className="md:hidden flex flex-col items-center mx-10 pt-2">
          <p className="text-[#ffd8b1] silk-screen text-center p-2">
            SNEAK PEAK: THRD&apos;S EXCLUSIVE COLLECTION
          </p>
          <div className="w-full h-64 bg-red-100 p-5 rounded-xl">
            {/* <img src="" alt="Slider here" /> */}
            <Slider {...mobileSettings}>
              <div className="p-2">
                <div className="overflow-hidden card hover:rounded-xl">
                  <img
                    src={slider1}
                    className="h-44 w-40 card-img rounded-xl"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="overflow-hidden card hover:rounded-xl">
                  <img
                    src={slider2}
                    className="h-44 w-40 card-img rounded-xl"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="overflow-hidden card hover:rounded-xl">
                  <img
                    src={slider3}
                    className="h-44 w-40 card-img rounded-xl"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="overflow-hidden card hover:rounded-xl">
                  <img
                    src={slider4}
                    className="h-44 w-40 card-img rounded-xl"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="overflow-hidden card hover:rounded-xl">
                  <img
                    src={slider5}
                    className="h-44 w-40 card-img rounded-xl"
                    alt=""
                  />
                  </div>
              </div>
              <div className="p-2">
                <div className="overflow-hidden card hover:rounded-xl">
                  <img
                    src={slider6}
                    className="h-44 w-40 card-img rounded-xl"
                    alt=""
                  />
                </div>
              </div>
            </Slider>
          </div>
          <p className="spline-font text-white text-xs py-4">
            From threads to trends, preview our selection. The best remains
            behind our doors.
          </p>
        </div>

        <div className="hidden md:block">
          <p className="silk-screen text-3xl md:text-6xl text-center text-thrd-pink md:text-[#ffd8b1] md:py-8">
            SNEAK PEAK
          </p>
          {/* desktop */}
          <p className="text-white spline-font my-6 text-center md:text-3xl">
            From threads to trends, preview our selection. The best remains
            behind our doors.{" "}
          </p>
          <div className="w-[650px] mx-auto h-72 bg-red-100 pt-3 pb-2 rounded-xl grow">
            {/* <img src="" alt="Slider here" /> */}
            <Slider {...settings}>
              <div className="p-2">
                <div className="overflow-hidden card hover:rounded-xl">
                  <img
                    src={slider1}
                    className="h-56 w-56 card-img rounded-xl"
                    alt=""
                  />
                  <div className="textContent flex flex-col items-center justify-center">
                    <p className="spline-font text-sm">Get Yours Now !!!</p>
                    <a
                      className="silk-screen mt-5 mx-2 rounded-3xl md:rounded-[4em] md:p-2 md:px-2 md:text-xs p-4 bg-thrd-pink md:bg-[#fca311]"
                      href="http://shop.thrd.store/"
                    >
                      ENTER & SHOP
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="overflow-hidden card hover:rounded-xl">
                  <img
                    src={slider2}
                    className="h-56 w-56 card-img rounded-xl"
                    alt=""
                  />
                  <div className="textContent flex flex-col items-center justify-center">
                    <p className="spline-font text-sm">Get Yours Now !!!</p>
                    <a
                      className="silk-screen mt-5 mx-2 rounded-3xl md:rounded-[4em] md:p-2 md:px-2 md:text-xs p-4 bg-thrd-pink md:bg-[#fca311]"
                      href="http://shop.thrd.store/"
                    >
                      ENTER & SHOP
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="overflow-hidden card hover:rounded-xl">
                  <img
                    src={slider3}
                    className="h-56 w-56 card-img rounded-xl"
                    alt=""
                  />
                  <div className="textContent flex flex-col items-center justify-center">
                    <p className="spline-font text-sm">Get Yours Now !!!</p>
                    <a
                      className="silk-screen mt-5 mx-2 rounded-3xl md:rounded-[4em] md:p-2 md:px-2 md:text-xs p-4 bg-thrd-pink md:bg-[#fca311]"
                      href="http://shop.thrd.store/"
                    >
                      ENTER & SHOP
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="overflow-hidden card hover:rounded-xl">
                  <img
                    src={slider4}
                    className="h-56 w-56 card-img rounded-xl"
                    alt=""
                  />
                  <div className="textContent flex flex-col items-center justify-center">
                    <p className="spline-font text-sm">Get Yours Now !!!</p>
                    <a
                      className="silk-screen mt-5 mx-2 rounded-3xl md:rounded-[4em] md:p-2 md:px-2 md:text-xs p-4 bg-thrd-pink md:bg-[#fca311]"
                      href="http://shop.thrd.store/"
                    >
                      ENTER & SHOP
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="overflow-hidden card hover:rounded-xl">
                  <img
                    src={slider5}
                    className="h-56 w-56 card-img rounded-xl"
                    alt=""
                  />
                  <div className="textContent flex flex-col items-center justify-center">
                    <p className="spline-font text-sm">Get Yours Now !!!</p>
                    <a
                      className="silk-screen mt-5 mx-2 rounded-3xl md:rounded-[4em] md:p-2 md:px-2 md:text-xs p-4 bg-thrd-pink md:bg-[#fca311]"
                      href="http://shop.thrd.store/"
                    >
                      ENTER & SHOP
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="overflow-hidden card hover:rounded-xl">
                  <img
                    src={slider6}
                    className="h-56 w-56 card-img rounded-xl"
                    alt=""
                  />
                  <div className="textContent flex flex-col items-center justify-center">
                    <p className="spline-font text-sm">Get Yours Now !!!</p>
                    <a
                      className="silk-screen mt-5 mx-2 rounded-3xl md:rounded-[4em] md:p-2 md:px-2 md:text-xs p-4 bg-thrd-pink md:bg-[#fca311]"
                      href="http://shop.thrd.store/"
                    >
                      ENTER & SHOP
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="md:hidden container text-white flex flex-row items-center justify-center">
          ···
        </div>
      </section>

      <section className="bg-thrd-pink md:hidden">
        <p className="silk-screen p-8 text-center text-xl">
          OUR COMMITMENT? NEVER LESS THAN <bold>70% OFF</bold> 🤯🤯🤯
        </p>
      </section>

      <section className="bg-white flex flex-col md:h-[40em]">
        <p className="silk-screen text-black text-2xl md:text-6xl text-center md:p-8">
          UNBELIEVABLE FASHION ACCESS
        </p>

        <div className="flex flex-col md:flex-row md:gap-8 items-center justify-around p-6">
          <div data-aos="fade-up" data-aos-duration="800" className="flex flex-col bg-black rounded-xl p-2 md:p-4 my-4">
            <div className="bg-white rounded-lg flex flex-col items-center justify-center md:px-16">
              <img className="w-20 md:w-48 h-20 md:h-48 p-2" src={diamond} />
            </div>
            <div className="p-1">
              <p className="text-white text-center text-xs md:text-2xl silk-screen">
                ESCLUSIVE ACCESS
              </p>
              <p className="text-white text-center text-xs md:text-xl spline-font">
                Members-only club
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" className="flex flex-col bg-black rounded-xl p-2 md:p-4 my-4">
            <div className="bg-white rounded-lg flex flex-col items-center justify-center md:px-16">
              <img className="w-20 md:w-48 h-20 md:h-48 p-2" src={original} />
            </div>
            <div className="p-1">
              <p className="text-white text-center text-xs md:text-2xl silk-screen">
                ESCLUSIVE ACCESS
              </p>
              <p className="text-white text-center text-xs md:text-xl spline-font">
                Members-only club
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" className="flex flex-col bg-black rounded-xl p-2 md:p-4 my-4">
            <div className="bg-white rounded-lg flex flex-col items-center justify-center md:px-16">
              <img className="w-20 md:w-48 h-20 md:h-48 p-2" src={discount} />
            </div>
            <div className="p-1">
              <p className="text-white text-center text-xs md:text-2xl silk-screen">
                ESCLUSIVE ACCESS
              </p>
              <p className="text-white text-center text-xs md:text-xl spline-font">
                Members-only club
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-black md:bg-[#14213d] md:h-[40em]">
        <div className="flex flex-1 flex-col p-4 items-center">
          <p className="silk-screen text-3xl md:text-6xl text-center text-thrd-pink md:text-[#fca311] md:py-8">
            READY TO EXPERIENCE THRD?
          </p>
          <div className="md:hidden">
            {/* phone */}
            <p className="text-white spline-font my-6 text-center md:text-3xl">
              Join our exclusive club for unparalleld fashion finds or dive
              straight into the curated collection if you&apos;re already a
              member
            </p>
          </div>
          <div className="hidden md:block">
            {/* desktop */}
            <p className="text-white spline-font my-6 text-center md:text-3xl">
              Join our exclusive club for unparalleld fashion<br></br>finds or
              dive straight into the curated<br></br>collection if you&apos;re
              already a member
            </p>
          </div>

          <div className="container md:flex-1 flex flex-col md:flex-row justify-center items-center gap-2 grow">
            <a
              className="btn-slide2 slide-right2 silk-screen mx-12 rounded-3xl md:rounded-[4em] md:text-2xl p-4 md:p-8 md:px-24 bg-white"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfH_8yBlclANq0BG1tDAtHmbDqxF33_nrtluL8jefHejooGzw/viewform?vc=0&c=0&w=1&flr=0"
            >
              REQUEST ACCESS
            </a>
            <a
              className="btn-slide slide-right silk-screen mx-12 rounded-3xl md:rounded-[4em] md:p-8 md:px-24 md:text-2xl p-4 bg-thrd-pink md:bg-[#fca311]"
              href="http://shop.thrd.store/"
            >
              ENTER & SHOP
            </a>
          </div>
        </div>
      </section>

      <div className="md:hidden container py-16 text-white flex flex-row items-center justify-center">
        ···
      </div>

      <section className="md:bg-thrd-pink md:h-[40em]">
        <div className="flex flex-col items-center md:justify-around md:h-full p-4">
          <p className="silk-screen text-3xl md:text-7xl text-center text-thrd-pink md:text-black">
            MARK YOUR CALENDARS
          </p>
          <div className="md:hidden text-white md:text-black spline-font py-4">
            <p>The countdown to the drop is on!</p>
            <p>Get your grappling hooks ready;</p>
            <p>this drop will leave you hanging.</p>
          </div>
          <div className="hidden md:block text-4xl p-4 px-24 text-center spline-font">
            <p>
              The countdown to the drop is on! Get your grappling hooks ready;
              this drop will leave you hanging.
            </p>
          </div>

          <div className="flex container flex-row items-center justify-around text-thrd-pink md:px-48 md:text-black gap-2 px-4">
            <div className="">
              <p className="silk-screen text-3xl md:text-7xl" id="days"></p>
              <p className="spline-font text-xs md:text-3xl">Days</p>
            </div>
            <div className="">
              <p className="silk-screen text-3xl md:text-7xl" id="hours"></p>
              <p className="spline-font text-xs md:text-3xl">Hours</p>
            </div>
            <div className="">
              <p className="silk-screen text-3xl md:text-7xl" id="minutes"></p>
              <p className="spline-font text-xs md:text-3xl">Minutes</p>
            </div>
            <div className="">
              <p className="silk-screen text-3xl md:text-7xl" id="seconds"></p>
              <p className="spline-font text-xs md:text-3xl">Seconds</p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:bg-[#393d3f]">
        <div className="flex flex-col items-center p-4">
          <p className="silk-screen text-3xl text-center text-thrd-pink md:text-white md:text-7xl md:p-8">
            TOP BRANDS ON THRD
          </p>

          <img className="md:hidden p-2" src={logo} />
          <div className="hidden md:block container">
            <div className="flex flex-col items-center justify-center p-4 container">
              <div className="flex flex-row items-center justify-around gap-4 w-full">
                <img className="h-6 w-auto" src={tommy} alt="" />
                <img className="h-48 w-auto" src={guess} alt="" />
                <img className="h-48 w-auto" src={essentials} alt="" />
              </div>
              <div className="flex flex-row items-center justify-around gap-16 w-full">
                <img className="h-32 w-auto" src={puma} alt="" />
                <img className="h-16 w-auto" src={dkny} alt="" />
                <img className="h-32 w-auto" src={uniqlo} alt="" />
                <img className="h-32 w-auto" src={hm} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container md:hidden py-16 text-white flex flex-row items-center justify-center">
        ···
      </div>

      <section className="md:hidden">
        <div className="flex flex-col p-4 items-center">
          <p className="silk-screen text-3xl text-center text-thrd-pink px-4">
            THE SECRET BEHIND OUR SAVINGS?
          </p>
          <p className="text-white spline-font my-6 ">
            Our formula for jaw-dropping discounts is no magic - it&apos;s smart
            sourcing. We connect directly with factories, ensuring genuine
            products and eliminating extra costs. That&apos;s how we make
            fashion affordable for you.
          </p>

          <div className="flex flex-row container justify-start -mt-2">
            <p className="bg-white p-1 silk-screen text-xs rounded-2xl">
              LEARN MORE
            </p>
          </div>
        </div>
      </section>

      <div className="container md:hidden py-16 text-white flex flex-row items-center justify-center">
        ···
      </div>

      <section className="p-2 md:bg-[#14213d] md:h-[20em]">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center h-full md:gap-24">
          <p className="silk-screen text-3xl md:text-6xl text-center md:text-left text-thrd-pink px-4 md:pl-8">
            PRONUNCIATION
            <br />
            MATTERS
          </p>

          <div className="">
            <p className="text-white spline-font my-6 md:text-2xl text-center">
              By the way, in case you are still
              <br />
              wondering, it&apos;s pronounced &apos;thread&apos;
            </p>
            <p className="text-white spline-font my-6  md:text-2xl text-center">
              We might have dropped some letters
              <br />
              but we haven&apos;t dropped our standards.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black p-2 md:bg-[#14213d]">
        <div className="flex flex-col text-white p-2 mt-16 mb-8 md:text-4xl md:p-16">
          <div className="flex flex-row items-center justify-between py-2">
            <a className="text-thrd-pink silk-screen">ABOUT</a>
            <a className="text-thrd-pink silk-screen">SOCIAL</a>
            <a className="text-thrd-pink silk-screen">HELP</a>
          </div>
          <div className="flex flex-row items-center justify-between py-2">
            <a className="text-xs md:text-xl spline-font">Our Story</a>
            <a className="text-xs md:text-xl spline-font">Instagram</a>
            <a className="text-xs md:text-xl spline-font">Contact</a>
          </div>
          <div className="flex flex-row items-center justify-between py-2">
            <a className="text-xs md:text-xl spline-font">FAQ</a>
            <a className="text-xs md:text-xl spline-font">Policy</a>
          </div>
        </div>
        <p className="silk-screen text-white text-xs text-center md:p-4 md:text-2xl">
          &#169; THRD PREMIUM CLOTHING 2023
        </p>
      </section>
    </>
  );
}

export default App;
