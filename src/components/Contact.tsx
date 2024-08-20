"use client";
import { useFormState, useFormStatus } from "react-dom";
import { sendContactForm } from "../app/_actions/contact";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MapComponent from "./MapComponent";

const Contact = () => {
  const [errors, actions] = useFormState(sendContactForm, {});

  return (
    <section className=" h-full" id="contact">
      <div className="container flex flex-col items-center justify-center p-6 mx-auto mt-4 text-center xl:px-0">
        {/* <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">Testimonials</div> */}
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Seguridad en Manos Expertas
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Contáctanos para asegurar la seguridad y el éxito de tu próximo
          evento.
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="rounded-lg bg-white p-8 shadow lg:col-span-3 lg:p-12 border-dashed border-2">
            <h2 className="text-3xl pb-6 font-medium">Contactanos</h2>
            <form action={actions} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <Input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <Input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <Input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    name="phone"
                  />
                </div>
              </div>

              {/* <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
              <div>
                <label
                  htmlFor="Option1"
                  className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                  tabIndex="0"
                >
                  <input className="sr-only" id="Option1" type="radio" tabIndex="-1" name="option" />
  
                  <span className="text-sm"> Option 1 </span>
                </label>
              </div>
  
              <div>
                <label
                  htmlFor="Option2"
                  className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                  tabIndex="0"
                >
                  <input className="sr-only" id="Option2" type="radio" tabIndex="-1" name="option" />
  
                  <span className="text-sm"> Option 2 </span>
                </label>
              </div>
  
              <div>
                <label
                  htmlFor="Option3"
                  className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                  tabIndex="0"
                >
                  <input className="sr-only" id="Option3" type="radio" tabIndex="-1" name="option" />
  
                  <span className="text-sm"> Option 3 </span>
                </label>
              </div>
            </div>
   */}
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <Textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name="message"
                ></Textarea>
              </div>

              <div className="mt-4">
                <SubmitButton />
              </div>
            </form>
          </div>
          <div className="lg:col-span-2 lg:py-2">
            <p className="max-w-xl text-lg">
              Numero de telefono direccion y cosas asi
            </p>

            <div className="mt-0">
              <a href="#" className="text-2xl font-bold text-indigo-600">
                {" "}
                0151 475 4450{" "}
              </a>

              <address className="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
            <div className="py-6">
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
    >
      {pending ? "Enviando" : "Enviar"}
    </button>
  );
}

export default Contact;
