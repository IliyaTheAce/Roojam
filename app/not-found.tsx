import "./globals.css";
import Image from "next/image";
import Link from "next/link";
export default function Custom404() {
  return (
    <section className="error-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="error-content">
              <Image
                width={1250}
                height={664}
                src="/assets/img/404.png"
                alt="error"
              />

              <h3>صفحه یافت نشد</h3>
              <p>
                ممکن است صفحه مورد نظر حذف شده باشد. نام آن تغییر کرده یا موقتاً
                در دسترس نباشد.
              </p>

              <Link href="/" className="default-btn">
                بازگشت به خانه
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
