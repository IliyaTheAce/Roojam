import ServiceItem from "@/Components/Main/ServiceItem";
import Image from "next/image";

type itemType = {
  icon: string;
  title: string;
  description: string;
  color: string;
};
const items: itemType[] = [
  {
    title: "متخصصان فناوری",
    description:
      "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.",
    icon: "flaticon-it",
    color: "bg-04cfc4",
  },
  {
    title: "توسعه وب",
    description:
      "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.",
    icon: "flaticon-setting",
    color: "bg-fc9ba7",
  },
  {
    title: "بازاریابی دیجیتال",
    description:
      "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.",
    icon: "flaticon-promotion",
    color: "bg-2cdcf7",
  },
  {
    title: "توسعه برنامه",
    description:
      "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.",
    icon: "flaticon-cellphone",
    color: "bg-009af0",
  },
  {
    title: "تجارت الکترونیکی",
    description:
      "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.",
    icon: "flaticon-shopping-cart",
    color: "bg-f4d62c",
  },
  {
    title: "روش های توسعه",
    description:
      "لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.",
    icon: "flaticon-optimize",
    color: "bg-1e2d75",
  },
];
export default async function Services() {
  return (
    <section className="services-section pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>خدمات شرکت عمرانی</h2>
          <p>
            {" "}
            لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم
            به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار
            چاپ و متن را در بر می گیرد.
          </p>
          <div className="bar"></div>
        </div>

        <div className="row">
          {items.map((item) => (
            <ServiceItem {...item} key={item.title} />
          ))}
        </div>
      </div>

      <div className="default-shape">
        <div className="shape-1">
          <Image
            width={15}
            height={15}
            src="/assets/img/shape/4.png"
            alt="image"
          />
        </div>

        <div className="shape-2 rotateme">
          <Image
            width={22}
            height={22}
            src="/assets/img/shape/5.svg"
            alt="image"
          />
        </div>

        <div className="shape-3">
          <Image
            width={21}
            height={20}
            src="/assets/img/shape/6.svg"
            alt="image"
          />
        </div>

        <div className="shape-4">
          <Image
            width={18}
            height={18}
            src="/assets/img/shape/7.png"
            alt="image"
          />
        </div>

        <div className="shape-5">
          <Image
            width={12}
            height={11}
            src="/assets/img/shape/8.png"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
}
