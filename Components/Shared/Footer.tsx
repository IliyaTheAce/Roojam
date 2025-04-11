import Link from "next/link";

const importantLinks = [
  {
    title: "درباره ما",
    link: "/about",
  },
  {
    title: "پروژه ها",
    link: "/project",
  },
  {
    title: "خدمات",
    link: "/services",
  },
  {
    title: "بلاگ",
    link: "/blog",
  },
  {
    title: "تماس با ما",
    link: "/contact",
  },
];

const services = [
  {
    title: "مدیریت داده ها",
    link: "#",
  },
  {
    title: "توسعه دهنده",
    link: "#",
  },
  {
    title: "خدمات",
    link: "#",
  },
  {
    title: "طراحی رابط کاربری",
    link: "#",
  },
  {
    title: "مهندس پشتیبانی",
    link: "#",
  },
];
export default async function Footer() {
  return (
    <>
      <section className="footer-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>درباره ما</h3>
                </div>
                <p>
                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                  ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
                </p>
                <ul className="footer-social">
                  <li>
                    <a href="#">
                      <i className="flaticon-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="flaticon-pinterest"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="flaticon-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>لینک های مفید</h3>
                </div>

                <ul className="footer-quick-links">
                  {importantLinks.map((item) => (
                    <li key={item.title}>
                      <Link href={item.link} key={item.link + "1"}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>خدمات برجسته</h3>
                </div>
                <ul className="footer-quick-links">
                  {services.map((item) => (
                    <li key={item.title}>
                      <Link href={item.link} key={item.link + "2"}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="footer-heading">
                  <h3>تماس با ما</h3>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-phone-call"></i>
                  <h3>تلفن</h3>
                  <span>
                    <a href="tel:021-12345678">021-12345678</a>
                  </span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>ایمیل</h3>
                  <span>
                    <a href="mailto:hello@fria.com">hello@fria.com</a>
                  </span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-pin"></i>
                  <h3>آدرس</h3>
                  <span>ایران ، استان تهران ، میدان آزادی ، خیابان 9 شرقی</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
      {/*<div className="copyright-area">*/}
      {/*  <div className="container">*/}
      {/*    <div className="copyright-area-content">*/}
      {/*      <div className="row align-items-center">*/}
      {/*        <div className="col-lg-6 col-md-6">*/}
      {/*          <p>*/}
      {/*            کپی رایت © 1402 فریا. تمام حقوق قالب محفوظ است. طراحی و توسعه*/}
      {/*            توسط*/}
      {/*            <a*/}
      {/*              href="https://www.rtl-theme.com/author/barat/?aff=barat"*/}
      {/*              target="_blank"*/}
      {/*            >*/}
      {/*              Barat Hadian*/}
      {/*            </a>*/}
      {/*          </p>*/}
      {/*        </div>*/}

      {/*        <div className="col-lg-6 col-md-6">*/}
      {/*          <ul>*/}
      {/*            <li>*/}
      {/*              <a href="terms-condition.html">قوانین و مقررات</a>*/}
      {/*            </li>*/}
      {/*            <li>*/}
      {/*              <a href="privacy-policy.html">حریم خصوصی</a>*/}
      {/*            </li>*/}
      {/*          </ul>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}
