const navigationFallback = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HeroSection({ navigation }) {
  return (
    <div className="relative bg-white overflow-hidden flex items-start justify-start flex-wrap w-full">
      <div className="lg:w-1/2 sm:w-full xs:order-2 sm:order-2 md:order-1 lg:order-1">
        <div className="relative z-10 bg-white w-full">
          {/* <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> */}

          <main className="px-20 py-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Armazenamento Cloud</span>{' '}
                <span className="block text-indigo-600 xl:inline">rápido, fácil e seguro!</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A <b>CloudX</b> trabalha apenas com tecnologia de ponta, trazendo para você praticidade, performance, segurança e evolução. Aproveite nosso teste grátis de 20 dias!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Quero testar!
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 sm:w-full xs:order-1 sm:order-1 md:order-2 lg:order-2">
        <img
          className="w-full object-cover sm:w-full md:h-96 lg:w-full lg:h-full"
          src="https://www.jotform.com/blog/wp-content/uploads/2019/09/what-is-cloud-storage.png"
          alt=""
        />
      </div>
    </div>
  )
}