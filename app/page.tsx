"use client";

import Image from "next/image";
import { semestersData } from "./data";
import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setIsDark] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    if (mq.matches) {
      setIsDark(true);
    }

    // This callback will fire if the perferred color scheme changes without a reload
    mq.addEventListener("change", (evt) => setIsDark(evt.matches));
  }, []);

  return (
    <main className="flex min-h-screen flex-col gap-10 p-8 md:p-24">
      <header className="flex flex-col md:flex-row items-center justify-center gap-12">
        {dark !== undefined && (
          <>
            <Image
              hidden={!dark}
              src={"/prostoy-dlya-temnogo-fona.png"}
              alt="logo"
              width={200}
              height={200}
            />
            <Image
              hidden={dark}
              src={"/prostoy-dlya-svetlogo-fona.png"}
              alt="logo"
              width={200}
              height={200}
            />
          </>
        )}
        <h1 className="text-4xl font-bold text-center">Портфолио Кононов Сергей ИВТ</h1>
      </header>

      {semestersData.map((semester) => (
        <details key={semester.name} className="select-none">
          <summary className="cursor-pointer text-2xl">
            <span className="ml-4">{semester.name}</span>
          </summary>
          <ul className="px-8 pt-2 flex flex-col gap-2">
            {semester.data.map((link) => (
              <li className="transition-all hover:translate-x-2.5" key={link.name}>
                <a
                  className="hover:underline"
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </main>
  );
}
