import Link from "next/link";

export default function ProjectItem({
  link,
  image,
  title,
  description,
  readMore,
  date,
}: {
  link: string;
  image: string;
  title: string;
  description: string;
  readMore: string;
  date: string;
}) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single-blog">
        <div className="image">
          <Link href={link}>
            <img src={image} alt={title} />
          </Link>
        </div>

        <div className="content">
          <span>{date}</span>
          <h3>
            <Link href={link}>{title}</Link>
          </h3>
          <p>{description}</p>
          <Link href={link} className="read-more">
            {readMore}
          </Link>
        </div>
      </div>
    </div>
  );
}
