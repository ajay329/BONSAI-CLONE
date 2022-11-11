import React from 'react'; 
import styles from "./LandingCarousal.module.css";

const Carousal = () => {
  return (
    <>
      <div className={styles.sectionmain}>
        <div className={styles.page_padding}>
          <div className={styles.container_large}>
            <h2 className={styles.heading_large_32}>
              Don't just take it from us.
            </h2>
            <div
              data-delay="9000"
              data-animation="slide"
              className={styles.testimonial_slider}
              data-autoplay="true"
              data-easing="ease"
              data-hide-arrows="false"
              data-disable-swipe="false"
              data-autoplay-limit="0"
              data-nav-spacing="8"
              data-duration="500"
              data-infinite="true"
              role="region"
              aria-label="carousel"
            >
              <div className={styles.maskw_slider_mask} id="w-slider-mask-0">
                <div
                  className={styles.w_slide}
                  aria-label="1 of 2"
                  role="group"
                  style={{
                    transform: "translateX(-1120px)",
                    opacity: 1,
                    transition: "transform 500ms ease 0s",
                  }}
                  aria-hidden="true"
                >
                  <div className={styles.testimonial_holder} aria-hidden="true">
                    <div
                      className={styles.testimonial_block}
                      aria-hidden="true"
                    >
                      <div className={styles.img_quote_div} aria-hidden="true">
                        <div
                          className={styles.testimonial_image_2}
                          aria-hidden="true"
                        ></div>
                        <img
                          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg"
                          loading="lazy"
                          alt=""
                          className="quote-icon"
                          aria-hidden="true"
                        />
                      </div>
                      <div className={styles.text_content} aria-hidden="true">
                        <div
                          className={styles.text_size_huge}
                          aria-hidden="true"
                        >
                          "For all my Freelancer / Small Agency followers, I
                          wish I’d discovered @bontimeinc long ago - great
                          templated contract"
                        </div>
                        <div
                          className={styles.testimonial_detail_holder}
                          aria-hidden="true"
                        >
                          <div
                            className={styles.text_size_medium_20}
                            aria-hidden="true"
                          >
                            David Mihm
                          </div>
                          <div
                            className={styles.text_size_medium_20}
                            aria-hidden="true"
                          >
                            Founder of TidingsCo
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.testimonialblocklowerhomepage}
                      aria-hidden="true"
                    >
                      <div
                        className={styles.imgquote_div_homepage}
                        aria-hidden="true"
                      >
                        <div
                          className={styles.testimonial_image_2_2}
                          aria-hidden="true"
                        ></div>
                        <img
                          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg"
                          loading="lazy"
                          alt=""
                          className={styles.quoteicon}
                          aria-hidden="true"
                        />
                      </div>
                      <div className={styles.text_content} aria-hidden="true">
                        <div
                          className={styles.text_size_huge}
                          aria-hidden="true"
                        >
                          "@bontimeinc is probably my all time favorite freelance
                          tool. hands down. the team is super responsive and
                          accessible when i have questions."
                        </div>
                        <div
                          className={styles.testimonial_detail_holder}
                          aria-hidden="true"
                        >
                          <div
                            className={styles.text_size_semibold}
                            aria-hidden="true"
                          >
                            David Urbinati
                          </div>
                          <div
                            className={styles.text_size_opaciy}
                            aria-hidden="true"
                          >
                            Motion design / animation
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.w_slide}
                  aria-label="2 of 2"
                  role="group"
                  style={{
                    transform: "translateX(-1120px)",
                    opacity: 1,
                    transition: "transform 500ms ease 0s",
                  }}
                >
                  <div className={styles.testimonial_holder}>
                    <div className={styles.testimonial_block}>
                      <div className={styles.img_quote_div}>
                        <div className={styles.testimonial_image_2_3}></div>
                        <img
                          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg"
                          alt=""
                          className={styles.quoteicon}
                        />
                      </div>
                      <div className={styles.text_content}>
                        <div className={styles.text_size_huge}>
                          "Anyone doing #freelance work should use @bontimeinc
                          for contracts/payment. It's amazing and saves
                          boatloads of time."
                        </div>
                        <div className={styles.testimonial_detail_holder}>
                          <div className="name">Nathanael Smith</div>
                          <div className="title-2">Product Design</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.testimonialblocklowerhomepage}>
                      <div className={styles.imgquote_div_homepage}>
                        <div className={styles.testimonial_image_2_4}></div>
                        <img
                          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c29a9feb660_quote-icon.svg"
                          alt=""
                          className={styles.quoteicon_homepage}
                        />
                      </div>
                      <div className={styles.text_content}>
                        <div className={styles.text_size_huge}>
                          "Wow, @bontimeinc's contracts are completely wonderful.
                          If you freelance you <strong>have</strong> to check it
                          out. Really lovely experience. h/t @hemeon"
                        </div>
                        <div className={styles.testimonial_detail_holder}>
                          <div className="name">Jon Gold</div>
                          <div className="title-2">Designer and engineer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class={styles.sectionmain}>
        <div class={styles.container_medium}>
          <div class={styles.cta_div}>
            <div class={styles.flexleftwidth70}>
              <div class={styles.headingxlarge44amerigo}>
                It’s <span class={styles.greenspan}>your</span> business. <br />
                We’re here to help it grow.
              </div>
            </div>
            <a
              data-request-account-btn="true"
              href="https://app.hellobonsai.com/users/sign_up"
              class={styles.button_main}
            >
              START FREE
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousal;