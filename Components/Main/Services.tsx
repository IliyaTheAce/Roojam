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
    title: "CCTV",
    description:
      "دوربین های مداربسته (آنالوگ، HD، تحت شبکه و هوشمند)",
    icon: "flaticon-promotion",
    color: "bg-04cfc4",
  },
  {
    title: "برنامه نویسی",
    description:
      "توسعه وب (بک و فرانت)، توسعه اپلیکیشن نیتیو، برنامه های اختصاصی",
    icon: "flaticon-optimize",
    color: "bg-fc9ba7",
  },
  {
    title: "تچهیزات شبکه",
    description:
      "سوییچ، روتر، اکسس پوینت و تجهیزات فیبرنوری",
    icon: "flaticon-it",
    color: "bg-2cdcf7",
  },
  {
    title: "سیستم های ذخیره سازی",
    description:
      "NVR، DVR، سرور های اختصاصی ، کیونپ، کیمپیوتر های سرور و تجهیزات دیتاسنتر ",
    icon: "flaticon-setting",
    color: "bg-009af0",
  },
  {
    title: "تجهیزات امنیتی",
    description:
      "دزدگیر، اعلام حریق و کنترل دسترسی",
    icon: "flaticon-promotion",
    // icon: "flaticon-shopping-cart",
    color: "bg-f4d62c",
  },
  {
    title: "تجهیزات ارتباطی",
    description:
      "VoIP و ارتباطات یکپارچه",
    icon: "flaticon-cellphone",
    color: "bg-1e2d75",
  },
];
export default async function Services() {
  return (
    <section className="services-section pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>خدمات شرکت</h2>
          <p>ما به عنوان فروشنده ای معتبر و قابل اعتماد تجهیزات شبکه، دوربین های نظارتی،تجهیزات نظارتی کیونپ (QNAP)، کامپیوتر سرور و سایر تجهیزات مرتبط با بالاترین کیفیت و مناسب ترین قیمت ارائه میدهیم.  </p>
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
