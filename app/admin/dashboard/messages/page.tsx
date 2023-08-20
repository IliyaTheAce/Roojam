"use client";
import FetchMessages from "@/lib/Actions/FetchMessages";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const [data, setData] = useState({});
  var pageNumber = 1;
  if (searchParams.get("page")) {
    pageNumber = parseInt(searchParams.get("page"));
  }
  const FetchData = async () => {
    setData(await FetchMessages(pageNumber));
  };

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="w-full box-border ">
      <div>
        <section className="bg-white rounded-lg">
          <header className="border-[#eff2f7] px-4 py-3 text-2xl font-yekan border-b-[1px]">
            پیام ها
          </header>
          <table className="w-full bg-transparent table border-gray-600 table-striped table-advance table-hover message_table">
            <thead className="table-header-group">
              <tr className="text-right">
                <th>ردیف</th>
                <th>فرستنده</th>
                <th>موضوع</th>
                <th>شماره تلفن</th>
                <th>زمان ارسال</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.data &&
                data.data.map((item, index) => {
                  return (
                    <tr
                      className={`${
                        index % 2 === 0 && "bg-gray-100"
                      } border-b-[1px] `}
                    >
                      <td>
                        <a href="#">{index + 1}</a>
                      </td>
                      <td className="hidden-phone">{item.composer}</td>
                      <td>{item.title}</td>
                      <td>{item.phone}</td>
                      <td>
                        <span className="label label-info label-mini">
                          {new Date(item.time).toLocaleString("fa")}
                        </span>
                      </td>
                      <td>
                        <button className="p-2 bg-green-300 rounded-lg ml-2">
                          <i className="fi fi-rr-eye flex items-center "></i>
                        </button>
                        <button className="p-2 bg-red-300 rounded-lg">
                          <i className="fi fi-rr-trash flex items-center"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
