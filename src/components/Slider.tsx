
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Image from "next/image"

export default function Slider() {
  return (
    <section className="w-full h-scren py-0 md:py-24 ">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[400px] md:h-[500px] lg:h-[750px] w-full overflow-hidden">
                {/* <Image src="/logo.svg" width={2000} height={100} alt="Product Image 1" className="h-full w-full object-cover" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent " />
                <div className="absolute bottom-0 left-0 right-0 px-6 py-96 text-center text-white">
                  <h3 className="text-2xl font-bold md:text-3xl">Introducing our latest product</h3>
                  <p className="mt-2 text-lg md:text-xl">
                    Experience the future of technology with our cutting-edge solution.
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[400px] md:h-[500px] lg:h-[750px] overflow-hidden ">
              {/* <Image src="/logo.svg" width={200} height={200} alt="Product Image 1" className="h-full w-full object-cover" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-6 py-96 text-center text-white">
                  <h3 className="text-2xl font-bold md:text-3xl">Elevate your business with our solution</h3>
                  <p className="mt-2 text-lg md:text-xl">Unlock new possibilities and drive your success.</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[400px] md:h-[500px] lg:h-[750px] overflow-hidden ">
              {/* <Image src="/logo.svg" width={200} height={200} alt="Product Image 1" className="h-full w-full object-cover" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-6 py-96  text-center text-white">
                  <h3 className="text-2xl font-bold md:text-3xl">
                    Transform your business with our innovative solution
                  </h3>
                  <p className="mt-2 text-lg md:text-xl">Discover the power of our cutting-edge technology.</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-900 shadow-md transition-colors hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:text-gray-50 dark:hover:bg-gray-950/75 dark:focus-visible:ring-gray-300">
            <ChevronLeftIcon className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-900 shadow-md transition-colors hover:bg-white/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-950/50 dark:text-gray-50 dark:hover:bg-gray-950/75 dark:focus-visible:ring-gray-300">
            <ChevronRightIcon className="h-6 w-6" />
          </CarouselNext>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 space-x-2">
            <div />
            <div />
            <div />
          </div>
        </Carousel>
     
    </section>
  )
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}