import ProjectItem from "@/Components/Main/ProjectItem";

export default async function Projects() {
  return (
    <>
      <div className="page-title-area item-bg-1">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>
                  نمونه <span> پروژه های </span> ما
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="protfolio-section pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <p>
              {" "}
              لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
              ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی
              ساختار چاپ و متن را در بر می گیرد.
            </p>
          </div>

          <div className="row">
            <ProjectItem
              link={"/projects/1"}
              image={"/assets/img/blog/5.jpg"}
              title={"نکاتی برای کسب درآمد از صنعت دیجیتال"}
              description={
                "                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است\n"
              }
              readMore={"بیشتر بدانید"}
              date={"20 فروردین 1399"}
            />{" "}
            <ProjectItem
              link={"/projects/1"}
              image={"/assets/img/blog/5.jpg"}
              title={"نکاتی برای کسب درآمد از صنعت دیجیتال"}
              description={
                "                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است\n"
              }
              readMore={"بیشتر بدانید"}
              date={"20 فروردین 1399"}
            />{" "}
            <ProjectItem
              link={"/projects/1"}
              image={"/assets/img/blog/5.jpg"}
              title={"نکاتی برای کسب درآمد از صنعت دیجیتال"}
              description={
                "                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است\n"
              }
              readMore={"بیشتر بدانید"}
              date={"20 فروردین 1399"}
            />
            <ProjectItem
              link={"/projects/1"}
              image={"/assets/img/blog/5.jpg"}
              title={"نکاتی برای کسب درآمد از صنعت دیجیتال"}
              description={
                "                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است\n"
              }
              readMore={"بیشتر بدانید"}
              date={"20 فروردین 1399"}
            />{" "}
            <ProjectItem
              link={"/projects/1"}
              image={"/assets/img/blog/5.jpg"}
              title={"نکاتی برای کسب درآمد از صنعت دیجیتال"}
              description={
                "                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است\n"
              }
              readMore={"بیشتر بدانید"}
              date={"20 فروردین 1399"}
            />{" "}
            <ProjectItem
              link={"/projects/1"}
              image={"/assets/img/blog/5.jpg"}
              title={"نکاتی برای کسب درآمد از صنعت دیجیتال"}
              description={
                "                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است\n"
              }
              readMore={"بیشتر بدانید"}
              date={"20 فروردین 1399"}
            />
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="flaticon-right"></i>
                </a>
                <a href="#" className="page-numbers">
                  1
                </a>
                <span className="page-numbers current" aria-current="page">
                  2
                </span>
                <a href="#" className="page-numbers">
                  3
                </a>
                <a href="#" className="next page-numbers">
                  <i className="flaticon-left"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
