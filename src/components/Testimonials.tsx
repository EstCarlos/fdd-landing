const Testimonials = () => {
  return (
    <div className="pb-5 h-full" id="testimonials">
      <div className="container flex flex-col items-center justify-center p-6 mx-auto mt-4 text-center xl:px-0">
        {/* <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">Testimonios</div> */}
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Esto es lo que nuestros clientes dicen
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Los testimonios son una excelente manera de aumentar la confianza y el
          conocimiento de la marca. Usa esta sección para destacar a tus
          clientes más populares.
        </p>
      </div>
      <div className="container p-6 mx-auto mb-10 xl:px-0">
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal">
                La seguridad en nuestro evento fue impecable. Gracias a
                <mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                  FDD
                </mark>
                por mantener a todos a salvo y asegurar que todo saliera
                perfecto.
              </p>
              <div className="flex items-center mt-8 space-x-3">
                <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                  <img
                    alt="Avatar"
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-lg font-medium">Ana Pérez</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Organizadora de Eventos en ABC Corp.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal">
                La atención al detalle y la profesionalidad del equipo de
                seguridad fueron excepcionales. Recomiendo
                <mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                  FDD
                </mark>
                a cualquier persona que necesite servicios de seguridad de alta
                calidad.
              </p>
              <div className="flex items-center mt-8 space-x-3">
                <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                  <img
                    alt="Avatar"
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-lg font-medium">Carlos Gómez</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Gerente de Proyectos en XYZ Ltd.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal">
                No puedo agradecer lo suficiente al equipo de
                <mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                  FDD
                </mark>
                por su excelente trabajo en nuestro evento. Nos sentimos seguros
                y bien cuidados durante todo el tiempo.
              </p>
              <div className="flex items-center mt-8 space-x-3">
                <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                  <img
                    alt="Avatar"
                    src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-lg font-medium">Laura Martínez</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    CEO de Events Inc.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
