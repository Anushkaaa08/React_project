import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./loader.css";

const Loader = () => {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.to(".loader-svg > path", {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: "slow(0.7,0.7,false)",
    })
      .to(".loader-svg > path", {
        fill: "white",
        duration: 0.2,
      })
      .to(".svg-container", {})
      .to(
        ".loader-container",
        {
          backgroundColor: "#E0115F",
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(".svg-container", {
        top: "2.4vh",
        left: "3.7vw",
        width: "70px",
        height: "67px",
        // opacity: 0,
        duration: 0.7,
      })
      .to(".loader-container", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(".loader-container", {
        visibility: "hidden",
      });
  });
  return (
    <div className="absolute h-screen w-full z-50 loader-container flex items-center justify-center overflow-hidden">
      <div className="svg-container absolute max-w-fit">
        <svg
          className="loader-svg"
          viewBox="0 0 70 67"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.6649 30.3223C41.6649 26.2641 43.238 23.6309 45.6718 23.6138C46.7718 23.6195 47.5754 24.1723 47.8661 25.1299C48.1739 26.1387 47.8376 27.2844 47.0853 27.7973C46.9656 27.8771 46.9086 28.0253 46.9428 28.1678C46.977 28.3103 47.091 28.4186 47.2335 28.4357C47.4045 28.4642 47.5812 28.4756 47.7521 28.4699C49.5077 28.4585 51.4057 27.0279 51.4057 24.7423C51.4057 22.0007 49.0631 20.5245 46.8516 20.5245H46.8003C40.6674 20.5245 38.4274 26.8569 36.4553 32.4369C35.7942 34.3064 35.1615 36.0961 34.4205 37.5781C33.8619 34.9562 32.7505 32.8587 31.7588 30.9892C30.197 28.0481 29.1654 26.1045 31.1774 23.9729C31.2857 23.8589 31.3028 23.6878 31.223 23.5511C31.1546 23.4371 31.0292 23.3744 30.8981 23.3801C30.8582 23.3744 30.8183 23.3801 30.7784 23.3915C30.7727 23.3915 30.1457 23.5682 29.2965 23.5682C26.2756 23.5625 23.8932 21.6816 21.3739 19.6924C18.5924 17.498 15.7198 15.2295 11.7186 15.2295H11.673C4.98153 15.2295 1.48193 20.2452 1.48193 25.204C1.48193 27.6492 2.32547 29.9119 3.8587 31.5762C5.58571 33.4515 8.07648 34.4432 11.0517 34.4432H11.103C13.4114 34.4432 15.3265 33.7136 16.6545 32.3286C17.8059 31.126 18.4442 29.5016 18.4442 27.7631C18.4442 24.8335 16.5633 21.8697 12.9668 21.8697H12.9155C11.6673 21.8697 10.4647 22.394 9.62111 23.306C8.87445 24.1153 8.49256 25.1356 8.56666 26.1102C8.57806 26.2299 8.65786 26.3211 8.76615 26.3724C8.79465 26.3895 8.82314 26.4066 8.85164 26.4123C8.98274 26.4579 9.13093 26.418 9.22783 26.3154C9.7066 25.7797 10.5957 25.4377 11.5476 25.4263C12.3912 25.4263 13.1549 25.6884 13.7021 26.1558C14.3519 26.7144 14.6824 27.5352 14.6824 28.601C14.6824 30.2824 13.3772 32.0265 11.1885 32.0379C7.10184 32.0265 5.24372 28.8404 5.24372 25.888C5.24372 22.5422 7.49512 18.94 12.4368 18.9286C14.8477 18.94 17.253 20.4675 19.8008 22.0862C22.0351 23.5054 24.3434 24.9703 26.8057 25.4776C23.4771 27.9113 21.9439 33.8219 20.7982 39.9206C19.3562 47.5924 17.196 52.6994 11.3424 52.7165C6.30387 52.7051 4.00119 48.9832 4.00119 45.5234C4.00119 42.6052 5.694 39.4646 9.41591 39.4475C11.6616 39.4589 13.0523 41.243 13.0523 42.8845C13.0523 45.2271 11.4279 46.0592 9.91749 46.0592C8.96564 46.0478 8.07648 45.7058 7.5977 45.17C7.5464 45.113 7.4837 45.0846 7.41531 45.0789C7.34121 45.0504 7.25572 45.0446 7.17593 45.0731C7.04484 45.1187 6.94793 45.2385 6.93653 45.381C6.85674 46.3499 7.24432 47.3758 7.99098 48.1852C8.83454 49.0972 10.0315 49.6215 11.2854 49.6215H11.331C14.9275 49.6215 16.8084 46.6577 16.8084 43.728C16.8084 41.9839 16.1758 40.3652 15.0187 39.1626C13.6964 37.7832 11.7756 37.048 9.4672 37.048H9.42161C4.73646 37.048 0 40.0973 0 45.9338C0 48.4132 0.95754 50.7273 2.69595 52.4429C4.66805 54.3865 7.49512 55.4181 10.8693 55.4181H10.9149C14.9161 55.4181 18.222 53.8849 20.7298 50.8641C23.3061 47.7634 24.3662 43.9104 24.8051 41.2201C25.0388 39.7952 25.2212 38.3988 25.4036 37.0537C25.9907 32.6421 26.515 28.7207 28.3503 26.475C27.8089 28.658 28.8519 31.5591 29.9463 34.5914C31.1432 37.9143 32.38 41.3455 31.9355 44.4348C31.9127 44.583 31.9868 44.7255 32.1179 44.7939C32.1748 44.8281 32.2432 44.8395 32.3059 44.8338C32.3971 44.8395 32.494 44.811 32.5681 44.7426C36.1247 41.5279 37.5155 36.4609 38.6326 32.3856C38.7922 31.8099 38.9404 31.2571 39.0943 30.7327C39.0658 31.2001 39.0487 31.6788 39.0487 32.169C39.0487 35.5147 39.8067 38.7066 40.6047 42.0808C41.4312 45.5633 42.2861 49.1713 42.2861 53.0756C42.2861 60.2572 39.2026 64.2185 33.6055 64.2299C30.3965 64.2242 27.1477 61.9557 27.1477 57.6353C27.1477 53.7253 29.2566 50.9838 32.2717 50.9667C34.5174 50.9781 35.9082 52.7621 35.9082 54.4036C35.9082 56.7461 34.2837 57.5783 32.7733 57.5783C31.8215 57.5669 30.9323 57.2249 30.4535 56.6892C30.3794 56.6094 30.2768 56.5695 30.1685 56.5752C30.1229 56.5695 30.0774 56.5809 30.0318 56.5923C29.9007 56.6379 29.8038 56.7575 29.7924 56.8943C29.7126 57.8633 30.1001 58.8893 30.8468 59.6986C31.6904 60.6106 32.8873 61.1349 34.1412 61.1349H34.1868C37.7833 61.1349 39.6643 58.1711 39.6643 55.2414C39.6643 53.4973 39.0316 51.8786 37.8745 50.676C36.5522 49.2966 34.6314 48.5614 32.323 48.5614H32.2774C26.0876 48.5614 22.8501 53.1839 22.8501 57.7436C22.8501 62.1495 26.5777 66.8403 33.4801 66.8403H33.5314C37.373 66.8403 40.6788 65.3755 43.1012 62.5997C45.3583 60.0121 46.6008 56.5068 46.6008 52.7278C46.6008 48.3904 45.2956 44.5545 44.0359 40.8383C42.8048 37.3102 41.6649 33.953 41.6649 30.3223Z"
            // fill="#00211A"
            fill="#ffffff"
          ></path>{" "}
          <path
            d="M58.0343 31.3142C60.6277 29.3934 62.0982 26.5663 62.0982 23.4543C62.0982 16.8255 56.5809 13.8104 51.4568 13.8104H51.4056C48.0199 13.8104 45.3126 15.0472 42.6907 16.2385C40.2455 17.3556 37.9314 18.4101 35.2127 18.4158C31.2628 18.4044 27.2616 15.7312 27.2616 10.6357C27.2616 5.68261 31.0519 3.41412 34.5743 3.40273C37.4869 3.40843 40.502 5.34062 40.502 8.56095C40.502 10.8237 38.832 12.1803 37.219 12.1917C35.7826 12.186 34.7453 11.5305 34.3007 10.3507C33.822 9.08533 34.1183 7.44382 34.9619 6.68576C35.0645 6.59457 35.1044 6.44637 35.0588 6.30958C35.0132 6.17849 34.8935 6.08158 34.751 6.07018C34.6712 6.06448 34.5914 6.05879 34.5173 6.05879C33.5598 6.04169 32.5737 6.45776 31.8043 7.21013C30.9379 8.05938 30.4648 9.19362 30.4648 10.4134C30.4648 11.9124 30.9949 13.229 32.0037 14.2151C33.1209 15.3151 34.7567 15.9364 36.4837 15.8908C41.0207 15.8395 43.0897 12.0549 43.0897 8.55527C43.0897 3.67632 39.0372 0 33.6681 0H33.6225C26.8341 0 23.2832 5.20953 23.2832 10.3621C23.2832 13.1492 24.2692 15.7483 26.059 17.6748C28.0881 19.8578 31.0006 21.0148 34.4774 21.0148H34.5287C37.2247 21.0148 39.2994 20.0117 41.4881 18.9515C43.842 17.8116 46.2815 16.6318 49.7298 16.6261C55.0135 16.6375 58.1711 19.5215 58.1711 24.3491C58.1711 26.9995 56.997 29.268 54.7684 30.9095C54.5062 30.8981 54.2497 30.8924 53.9989 30.8924C50.5221 30.8924 46.9256 31.9069 46.9256 33.5998C46.9256 33.9189 47.0624 34.2039 47.3246 34.4262C47.8432 34.8651 48.8122 35.019 49.9293 34.8423C51.2004 34.6371 53.4916 33.7423 55.1218 32.9842C60.223 33.5143 65.632 36.7802 65.632 44.3836C65.632 50.2885 61.8702 53.3778 58.154 53.3778C53.1611 53.3778 51.3885 49.3481 51.3885 45.8997C51.3885 42.8903 53.0699 39.687 56.1762 39.687C58.4504 39.687 59.8069 41.3685 59.8069 42.9929C59.8069 44.4406 59.1572 45.4837 57.9773 45.9339C56.7063 46.4184 55.0648 46.122 54.301 45.2785C54.2098 45.1759 54.0616 45.136 53.9248 45.1816C53.7937 45.2272 53.6968 45.3469 53.6854 45.4894C53.6056 46.4583 53.9932 47.4843 54.7399 48.2879C55.5834 49.1999 56.7804 49.7243 58.0343 49.7243C61.6308 49.7243 63.5117 46.7604 63.5117 43.8307C63.5117 42.0866 62.8791 40.4679 61.722 39.2653C60.3997 37.8859 58.4789 37.1507 56.1705 37.1507C51.1491 37.1507 47.638 40.8783 47.638 46.2132C47.638 51.6621 52.0097 55.6177 58.0343 55.6177C64.4237 55.6177 69.4337 50.6191 69.4337 44.2354C69.4337 34.8024 61.5567 32.0665 58.0343 31.3142Z"
            // fill="#00211A"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
