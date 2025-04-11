export default async function ContactUs() {
  return (
    <>
      <div className="page-title-area item-bg-5">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>تماس با ما</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="contact-box pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 contact-box">
              <div className="single-contact-box">
                <i className="flaticon-pin"></i>
                <div className="content-title">
                  <h3>موقعیت</h3>
                  <p>آدرس</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-contact-box">
                <i className="flaticon-envelope"></i>
                <div className="content-title">
                  <h3>ایمیل</h3>
                  <a href="mailto:hello@fria.com">hello@fria.com</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="single-contact-box">
                <i className="flaticon-phone-call"></i>
                <div className="content-title">
                  <h3>تلفن</h3>
                  <a href="tel:021-12345678">021-12345678</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-text">
                <h3>پیشنهادی برای ما دارید؟</h3>
                <p>
                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                  ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
                </p>
              </div>

              <div className="contact-form">
                <form id="contactForm">
                  <div className="form-group">
                    <label>نام کامل</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      required
                      data-error={"لطفا نام خود را وارد کنید"}
                      placeholder={"نام کامل"}
                    />
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group">
                    <label>ایمیل</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      required
                      data-error={"لطفا نام خود را وارد کنید"}
                      placeholder={"ایمیل"}
                    />
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group">
                    <label>موضوع</label>
                    <input
                      type="text"
                      name="msg_subject"
                      id="msg_subject"
                      className="form-control"
                      required
                      data-error={"لطفا موضوع خود را وارد کنید"}
                      placeholder={"موضوع"}
                    />
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="form-group">
                    <label>پیام</label>
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      // @ts-expect-error idkwtfisgoingon
                      cols="30"
                      // @ts-expect-error idkwtfisgoingon
                      rows="6"
                      required
                      data-error={"پیام خود را بنویسید"}
                      placeholder={"پیام"}
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>

                  <div className="send-btn">
                    <button type="submit" className="default-btn">
                      ارسال پیام
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-image">
                <img src="/assets/img/contact.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
