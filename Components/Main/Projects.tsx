import ProjectItem from "@/Components/Main/ProjectItem";

export default async function Projects() {
  return (
    <section className="blog-section pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>
            نمونه <span> پروژه های </span> ما
          </h2>
          <p>
            {" "}
            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
            به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار
            چاپ و متن را در بر می گیرد.
          </p>
          <div className="bar"></div>
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
            link={"/projects/2"}
            image={"/assets/img/blog/6.jpg"}
            title={"نکاتی برای کسب درآمد از صنعت دیجیتال"}
            description={
              "                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است\n"
            }
            readMore={"بیشتر بدانید"}
            date={"20 فروردین 1399"}
          />{" "}
          <ProjectItem
            link={"/projects/3"}
            image={"/assets/img/blog/7.jpg"}
            title={"نکاتی برای کسب درآمد از صنعت دیجیتال"}
            description={
              "                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است\n"
            }
            readMore={"بیشتر بدانید"}
            date={"20 فروردین 1399"}
          />
        </div>
      </div>
    </section>
  );
}
