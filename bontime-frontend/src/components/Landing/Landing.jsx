import React from 'react';
import styles from "./Landing.module.css";
import Carousal from "./LandingCarousal";


const LandingPage = () => {
  return (
    <>
      <div className={styles.pagewrap}>
        <div className={styles.section_main}>
          <div className={styles.blue_shape_11}></div>
          <div className={styles.page_padding}>
            <div className={styles.container_large}>
              <div className={styles.flex_left}>
                <div className={styles.margin_bottom}>
                  <h1 className={styles.heading_xlarge}>
                    Everything you need to run your business.
                  </h1>
                </div>
                <div className={styles.margin_bottom_margin_huge}>
                  <div className={styles.text_size_medium_20}>
                    Bontime's all-in-one product suite with smart automation lets
                    you focus on your passion, not your paperwork.
                  </div>
                </div>
                <div className={styles.w_form}>
                  <form
                    name="wf-form-Longtail-form"
                    data-name="Longtail form"
                    method="get"
                    className={styles.email_form}
                    aria-label="Longtail form"
                  >
                    <input
                      type="email"
                      className={styles.field_style_w_input}
                      maxLength="256"
                      name="Email"
                      data-name="Email"
                      placeholder="Enter your email"
                      id="email"
                      required=""
                    />
                    <input
                      type="submit"
                      value="Start Free"
                      data-wait="Please wait..."
                      id="longtail-form-button"
                      className={styles.cta_submit_w_button}
                    />
                  </form>
                  <div
                    className={styles.form_success_message_w_form_done}
                    tabIndex="-1"
                    role="region"
                    aria-label="Longtail form success"
                  >
                    <div>Securing your account...</div>
                  </div>
                  <div
                    className={styles.w_form_fail}
                    tabIndex="-1"
                    role="region"
                    aria-label="Longtail form failure"
                  >
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.flex_right_width_70_is_mobile_100}>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png"
                  alt= "Hero"
                  sizes="(max-width: 479px) 94vw, (max-width: 767px) 47vw, (max-width: 991px) 53vw, 56vw"
                  srcSet="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2-p-500.png 500w, https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png 1578w"
                  width="789"
                  className={styles.image_hero}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_main_spacing}>
        <img
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c68e1feb659_shape-2.svg"
          alt="Left blue shape"
          className={styles.shape_two}
        />
        <div className={styles.page_padding}>
          <div className={styles.container_medium}>
            <div className={styles.max_width_640}>
              <div className={styles.margin_bottom_margin_small}>
                <h2 className={styles.heading_large_32}>
                  Make more, manage less
                </h2>
              </div>
              <div className={styles.heading_small_22}>
                Bontime integrates and automates every step of your business so
                it runs seamlessly - from proposal to tax season.
              </div>
            </div>
            <div className={styles.grid}>
              <div>
                <div className={styles.margin_bottom_margin_huge}>
                  <div className={styles.heading_small}>Without Bonsai</div>
                </div>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg"
                  alt="Without Bonsai"
                  loading="lazy"
                />
              </div>
              <div>
                <div className={styles.margin_bottom_margin_huge}>
                  <div className={styles.heading_small}>With Bonsai</div>
                </div>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c9ed8feb675_ill_after_2nd%20block.svg"
                  alt="With Bonsai"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section_main_spacing}>
        <div className={styles.page_padding}>
          <div className={styles.container_medium_text}>
            <div className={styles.max_width_640}>
              <div className={styles.margin_bottom_margin_small}>
                <h2 className={styles.heading_large_32_amerigo}>
                  Trusted by 500K+ self-employed workers
                  <br />
                  and small businesses
                </h2>
              </div>
              <div className={styles.textsizelarge_textweightlight}>
                Whether you’re just getting started or your business is booming,
                Bontime has you covered.
              </div>
            </div>
            <div className={styles.margintop_marginxxhuge}>
              <div className={styles.gridbox}>
                <div className={styles.max_width280}>
                  <div class={styles.marginbottom_marginxxlarge}>
                    <img
                      src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg"
                      alt="Built for all trades icon"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.margin_bottom_margin_small}>
                    <div className={styles.headingsmall22}>
                      Built for All Work Types
                    </div>
                  </div>
                  <div className={styles.textsizeregular_textweight}>
                    We proudly back people with wide-ranging businesses—from
                    design and marketing to development, writing, and
                    photography.
                  </div>
                </div>
                <div className={styles.max_width280}>
                  <div className={styles.marginbottom_marginxxlarge}>
                    <img
                      src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg"
                      alt="Global support icon"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.margin_bottom_margin_small}>
                    <div className={styles.headingsmall22}>
                      Built for Global Businesses
                    </div>
                  </div>
                  <div className={styles.textsizeregular_textweight}>
                    Bontime has international coverage across the United States,
                    Canada, UK, Australia and more, with 180 currencies
                    supported.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousal />
    </>
  );
};

export default LandingPage;