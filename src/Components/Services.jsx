// Services.jsx

import React from "react";
import "./Services.css"; // Import the CSS file for styling

const Services = () => {
  return (
    <section>
      <div className="container sliders">
        <h2 className="section_title">Testimonials</h2>
        <div className="testimonial-layout">
          <div className="testimonial-container">
            <section className="container">
              <div className="grid-container">
                <div className="grid-item card">
                  <div className="flex back-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="currentColor"
                    >
                      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                    </svg>
                  </div>
                  <h1 className="font-lg font-bold mt-4">
                    Reviews And ratings
                  </h1>
                  <div className="mt-3 flex">
                    <div>
                      <h1 className="font-xl font-bold">4.2</h1>
                    </div>
                    <div className="ml-4">
                      <span
                        className="MuiRating-root MuiRating-sizeLarge Mui-readOnly MuiRating-readOnly"
                        role="img"
                        aria-label="4 Stars"
                        color=""
                      >
                        {[...Array(4)].map((_, i) => (
                          <span
                            key={i}
                            className="MuiRating-icon MuiRating-iconFilled"
                          >
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="StarIcon"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                          </span>
                        ))}
                        <span className="MuiRating-icon MuiRating-iconEmpty">
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="StarBorderIcon"
                          >
                            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
                          </svg>
                        </span>
                      </span>
                      <p>Based on 456 Ratings</p>
                    </div>
                  </div>
                  <div className="my-4">
                    <hr className="MuiDivider-root MuiDivider-fullWidth" />
                  </div>
                  <div>
                    {[
                      { label: "Reliability", rating: 4.5, percentage: 90 },
                      { label: "Payout Rating", rating: 4.8, percentage: 98 },
                      {
                        label: "Postive Solution",
                        rating: 4.5,
                        percentage: 80,
                      },
                    ].map((item, index) => (
                      <div className="mt-3" key={index}>
                        <div className="flex justify-between">
                          <h1>{item.label}</h1>
                          <h1>{item.rating}</h1>
                        </div>
                        <div className="mt-3">
                          <span
                            className="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate"
                            role="progressbar"
                            aria-valuenow={item.percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <span
                              className="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate"
                              style={{
                                transform: `translateX(-${
                                  100 - item.percentage
                                }%)`,
                              }}
                            ></span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary"
                      type="button"
                    >
                      Show Summery
                      <span className="MuiButton-icon MuiButton-endIcon MuiButton-iconSizeMedium">
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="KeyboardArrowDownIcon"
                        >
                          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="swiper-container">
            <div className="swiper swiper-cards swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress mySwiper">
              <div className="swiper-wrapper" style={{ cursor: "grab" }}>
                {[
                  {
                    imgSrc: "/assets/avatar02-XEUuopxZ.png",
                    name: "Kiyas Ferns",
                    text: "Joining this gym was one of the best decisions I've ever made. The trainers are incredibly knowledgeable and supportive, helping me push my limits and achieve results I never thought possible. The positive atmosphere and friendly members make every workout enjoyable. I've not only transformed my body but also my mindset towards a healthier lifestyle. I couldn't be happier!",
                  },
                  {
                    imgSrc: "/assets/updated_avatar01-hrWlbRF0.png",
                    name: "Rubini Fernandes",
                    text: "As a busy professional, finding time for fitness was always a challenge until I joined this gym. The flexible hours, state-of-the-art equipment, and variety of classes have made it easy to integrate exercise into my daily routine. The results have been amazing – I've lost weight, gained strength, and feel more energized than ever. I highly recommend this gym to anyone looking to make a positive change in their life",
                  },
                  {
                    imgSrc: "/assets/supdated_avatar03-ChOwhoWU.png",
                    name: "Jake D'souza",
                    text: "Signing up for this fitness program has been a game-changer for me. The trainers here are a wealth of knowledge and provide unwavering support. They've helped me break through my own barriers and accomplish goals I never imagined. The gym's uplifting atmosphere and the camaraderie among members make every workout a joy.",
                  },
                  {
                    imgSrc: "/assets/avatar04-mhztVS5F.png",
                    name: "Robin Thomas",
                    text: "I can honestly say that joining this fitness community was one of the most rewarding decisions I've ever made. The trainers go above and beyond, offering their expertise and unwavering encouragement. They've propelled me past my own limitations, helping me achieve feats I once thought impossible. The gym's positive ambiance and the friendly, like-minded individuals I've met have made each workout a highlight of my day.",
                  },
                  {
                    imgSrc: "/assets/supdated_avatar03-ChOwhoWU.png",
                    name: "Jake Demello",
                    text: "Enrolling in this fitness program has been a game-changer for me. The trainers are not only incredibly knowledgeable but also genuinely caring and supportive. They've motivated me to surpass my own expectations and achieve results I could only dream of. The gym's vibrant atmosphere and the welcoming community of members have made every workout an enjoyable experience.",
                  },
                ].map((slide, index) => (
                  <div
                    className={`swiper-slide ${
                      index === 0
                        ? "swiper-slide-visible swiper-slide-active"
                        : ""
                    }`}
                    key={index}
                    style={{
                      width: "263px",
                      zIndex: 5 - index,
                      transform: `translate3d(calc(${7.25 * index}% - ${
                        263 * index
                      }px), 0px, -${100 * index}px) rotateZ(${
                        2 * index
                      }deg) scale(1)`,
                    }}
                  >
                    <div className="slide_item">
                      <div className={`slide_img-${(index % 3) + 1}`}>
                        <img src={slide.imgSrc} alt="" />
                      </div>
                      <h4>{slide.name}</h4>
                      <p>{slide.text}</p>
                    </div>
                    <div
                      className="swiper-slide-shadow"
                      style={{ opacity: index === 0 ? 0 : 1 }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
