"use client";
import { usePathname, useRouter } from "next/navigation";

function LanguageSwitcher({ lang, text }: { lang: string; text: string }) {
  const router = useRouter();
  const path = usePathname();
  return (
    <button
      onClick={() => {
        router.push(`/${lang}/${path.slice(3)}`);
      }}
      className={"optional-btn"}
    >
      {text}
    </button>
  );
}
export default LanguageSwitcher;
