export default function ServiceItem({
  icon,
  title,
  description,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="col-lg-4 col-md-6 flex">
      <div className={`single-services-two flex-grow ${color}`}>
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        {/*<a href="single-services-2.html" className="read-btn">*/}
        {/*  بیشتر بدانید*/}
        {/*</a>*/}
      </div>
    </div>
  );
}
