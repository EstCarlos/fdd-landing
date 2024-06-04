const Services = () => {
  return (
    <section className="h-full  py-12 text-center bg-white dark:bg-gray-900 " id="services">
      <div className="container flex flex-col items-center justify-center p-6 mx-auto text-center xl:px-0">
        {/* <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">Testimonials</div> */}
        <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Here&#x27;s what our customers said
        </h2>
        <p className="max-w-2xl text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Testimonails is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </p>
      </div>
      <div
        className="container max-w-screen-xl px-4 mx-auto my-10"
        id="features"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          
        <Service title='Blazing Fast Deployment' description='Deploy your apps in seconds with our cutting-edge infrastructure. No more waiting for slow builds and
        deployments.'/>
         <Service title='Blazing Fast Deployment' description='Deploy your apps in seconds with our cutting-edge infrastructure. No more waiting for slow builds and
        deployments.'/>
         <Service title='Blazing Fast Deployment' description='Deploy your apps in seconds with our cutting-edge infrastructure. No more waiting for slow builds and
        deployments.'/>
       
        </div>
      </div>
    </section>
  );
};
import React from 'react'
import { Card } from "@/components/ui/card"
import Link from "next/link"

type ServiceProps = {
  title: string
  description: string
}


  function Service({title, description} : ServiceProps) {
  return (
    <Card className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
      <div className="flex items-center mb-4">
        <div className="bg-gray-100 p-3 rounded-full dark:bg-gray-700">
          <RocketIcon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-medium ml-4 text-gray-800 dark:text-gray-200">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {description}
      </p>
      <Link
        href="#"
        className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        prefetch={false}
      >
        Get Started
        <ArrowRightIcon className="ml-2 w-4 h-4" />
      </Link>
    </Card>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

export default Services

