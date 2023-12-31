"use client";

interface dataInterface {
  result: boolean;
  data?: any[];
  forceMessage?: string;
}

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BaseUrl } from "@/Constants/Config";
import { revalidatePath } from "next/cache";
export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState<dataInterface>();
  var pageNumber = 1;
  if (searchParams.get("page")) {
    const page = searchParams.get("page");
    if (page) pageNumber = parseInt(page);
  }
  const FetchData = async () => {
    const messages = await (
      await fetch(new URL(`/api/message?page=${pageNumber}`, BaseUrl))
    ).json();
    setData(messages);
  };

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="w-full box-border ">
      <div>
        <section className="bg-white rounded-lg">
          <header className="border-[#eff2f7] px-4 py-3 text-2xl font-yekan border-b-[1px] flex w-full justify-between items-center">
            <span>پیام ها</span>
            <button
              className="p-2 bg-blue-400 rounded-lg"
              onClick={async () => {
                FetchData();
              }}
            >
              <i className="fi fi-br-refresh flex items-center text-white"></i>
            </button>
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
              {data &&
                data.data &&
                data.data.map(
                  (
                    item: {
                      composer: string;
                      title: string;
                      phone: string;
                      time: Date;
                      _id: string;
                    },
                    index: number
                  ) => {
                    return (
                      <tr
                        key={item._id}
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
                          <button
                            className="p-2 bg-green-300 rounded-lg ml-2"
                            onClick={() => {
                              router.push(
                                `/admin/dashboard/messages/${item._id}`
                              );
                            }}
                          >
                            <i className="fi fi-rr-eye flex items-center "></i>
                          </button>
                          <button
                            className="p-2 bg-red-300 rounded-lg"
                            onClick={async () => {
                              const unreadMessage = await fetch(
                                new URL(
                                  `/api/messages?type=${item._id}`,
                                  BaseUrl
                                ),
                                { method: "Delete" }
                              );
                              revalidatePath('/admin/dashboard/messages')
                            }}
                          >
                            <i className="fi fi-rr-trash flex items-center"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
