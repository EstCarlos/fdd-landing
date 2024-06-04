/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LWpfn3LI5UJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function vancies() {
  return (
    <section className="w-full h-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Open Positions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Join our growing team and help us build the future.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
         <Vacancie title="Frontend Developer" description="We\'re looking for a talented product designer to join our team and help us create beautiful and user-friendly products." />
         <Vacancie title="Frontend Developer" description="We\'re looking for a talented product designer to join our team and help us create beautiful and user-friendly products." />
         <Vacancie title="Frontend Developer" description="We\'re looking for a talented product designer to join our team and help us create beautiful and user-friendly products." />
         <Vacancie title="Frontend Developer" description="We\'re looking for a talented product designer to join our team and help us create beautiful and user-friendly products." />
        </div>
      </div>
    </section>
  )
}

import React from 'react'

type VacancieProps = {
    title: string
    description: string
    
}

const Vacancie = ({title, description} : VacancieProps) => {
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
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
       {description}
      </p>
      <Link
        href="aplication"
        className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        prefetch={false}
      >
        Apply Now
      </Link>
    </div>
  </div>
  )
}
