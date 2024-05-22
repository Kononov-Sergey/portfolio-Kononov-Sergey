import Image from "next/image";
import { semestersData } from "./data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8 p-24">
      <h1 className="text-3xl font-bold text-center">Портфолио Кононов Сергей ИВТ</h1>
      {semestersData.map((semester) => (
        <details key={semester.name}>
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
