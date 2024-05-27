"use client";

import Image from "next/image";
import { semestersData } from "./data";
import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    if (mq.matches) {
      setIsDark(true);
    }

    // This callback will fire if the perferred color scheme changes without a reload
    mq.addEventListener("change", (evt) => setIsDark(evt.matches));
  }, []);

  return (
    <main className="flex min-h-screen flex-col gap-8 p-24">
      <header className="flex items-center justify-center gap-12">
        <Image
          src={
            dark ? "/prostoy-dlya-temnogo-fona.png" : "/prostoy-dlya-svetlogo-fona.png"
          }
          alt="logo"
          width={200}
          height={200}
        />

        <h1 className="text-4xl font-bold text-center">Портфолио Кононов Сергей ИВТ</h1>
      </header>

      {semestersData.map((semester) => (
        <details className="select-none" key={semester.name}>
          <summary className="cursor-pointer text-2xl">{semester.name}</summary>
          <ul className="px-8 flex flex-col gap-2">
            {semester.data.map((link) => (
              <li key={link.name}>
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
