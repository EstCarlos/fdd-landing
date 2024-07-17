// components/LanguageSelector.tsx
"use client";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { useLocale } from "use-intl";

const LanguageSelector: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  // const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   const nextLocale = e.target.value;
  //   startTransition(() => {
  //     router.replace(`/${nextLocale}`);
  //   });
  // };
  const changeLanguage = (nextLocale: string) => {
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => changeLanguage("en")}
          className={`p-2 rounded ${
            localActive === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          disabled={isPending}
        >
          <span className="fi fi-us"></span> English
        </button>
        <button
          onClick={() => changeLanguage("es")}
          className={`p-2 rounded ${
            localActive === "es" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          disabled={isPending}
        >
          <span className="fi fi-es"></span> Español
        </button>
      </div>
    </>
  );
};

export default LanguageSelector;
