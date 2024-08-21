"use client";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function vancies() {
  const locale = useLocale();
  return (
    <section className="w-full h-full py-8 md:py-24 lg:py-32" id="vacancies">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 p-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Puestos vacantes
            </h2>
            <p className="max-w-[900px] text-gray-500 text-2xl md:text-4xl/relaxed lg:text-4xl/relaxed xl:text-3xl/relaxed dark:text-gray-400">
              Buscamos personas responsables para formar parte de nuestro equipo
              de seguridad durante la temporada de béisbol invernal 2024-2025.
              Si tienes experiencia en seguridad y te apasiona el deporte
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          {" "}
          {/* Contenedor para centrar el botón */}
          <Link
            href={locale + "/application"}
            className="mt-4 inline-flex h-16 items-center justify-center rounded-md bg-gray-900 px-8 text-xl font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Aplica ahora
          </Link>
        </div>
      </div>
    </section>
  );
}

type VacancieProps = {
  title: string;
  description: string;
};

const Vacancie = ({ title, description }: VacancieProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
      {/* <img
      src="/placeholder.svg"
      alt="Frontend Developer"
      width={600}
      height={400}
      className="w-full h-48 object-cover"
    /> */}
      <div className="bg-white dark:bg-gray-950 p-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-md text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
