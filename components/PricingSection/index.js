export default function PricingSection() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-10 text-gray-700 bg-gray-100 md:p-20 w-full'>
      <h2 className='text-2xl font-medium'>Conheça nossos planos!</h2>

      <div className='flex flex-wrap items-center justify-center w-full max-w-4xl mt-8'>
        <div className='flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition cubic transition-delay-200 border border-gray-200'>
          <div className='flex flex-col items-center p-10 bg-indigo-200'>
            <span className='font-semibold'>Light</span>
            <div className='flex items-center'>
              <span className='text-3xl'>R$</span>
              <span className='text-5xl font-bold'>30</span>
              <span className='text-2xl text-gray-500'>/mês</span>
            </div>
          </div>
          <div className='p-10'>
            <ul>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-green-600 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='ml-2'>20gb de armazenamento</span>
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-green-600 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='ml-2'>Fotos &amp; PDF's</span>
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-green-600 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='ml-2'>Controle de acesso</span>
              </li>
            </ul>
          </div>
          <div className='flex px-10 pb-10 justfy-center'>
            <button className='flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-green-400 rounded-lg text-white font-medium cursor-pointer shadow-md hover:shadow-lg'>
              Assine Já!
            </button>
          </div>
        </div>

        <div className='z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110 hover:shadow-xl transition cubic transition-delay-200 border border-gray-200'>
          <div className='flex flex-col items-center p-10 bg-indigo-700 text-white'>
            <span className='font-semibold'>Blaze</span>
            <div className='flex items-center'>
              <span className='text-3xl'>R$</span>
              <span className='text-6xl font-bold'>50</span>
              <span className='text-2xl text-gray-300'>/mês</span>
            </div>
          </div>
          <div className='p-10'>
            <ul>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-green-600 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='ml-2 italic'>100gb de armazenamento</span>
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-green-600 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='ml-2'>Fotos, Audio &amp; PDF's</span>
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-green-600 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='ml-2'>Controle de acesso</span>
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-green-600 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='ml-2'>Backup automático</span>
              </li>
            </ul>
          </div>
          <div className='flex px-10 pb-10 justfy-center'>
            <button className='flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-indigo-700 border border-indigo-700 rounded-lg text-white font-medium cursor-pointer shadow-md hover:shadow-lg'>
              Assine Já!
            </button>
          </div>
        </div>

        <div className='flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-19 hover:shadow-xl transition ease-in transition-delay-200'>
          <div className='flex flex-col items-center p-10 bg-indigo-300'>
            <span className='font-semibold'>Rocket</span>
            <div className='flex items-center'>
              <span className='text-3xl'>R$</span>
              <span className='text-5xl font-bold'>100</span>
              <span className='text-2xl text-gray-500'>/mês</span>
            </div>
          </div>
          <div className='p-10'>
            <ul>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-green-600 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='ml-2 italic'>Armazenamento ilimitado</span>
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-green-600 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='ml-2'>Todos os tipos de arquivos</span>
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-green-600 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='ml-2'>Controle de acesso</span>
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-green-600 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='ml-2'>Editor de arquivos</span>
              </li>
              <li className='flex items-center'>
                <svg
                  className='w-5 h-5 text-green-600 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fill-rule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span className='ml-2'>Backup automático</span>
              </li>
            </ul>
          </div>
          <div className='flex px-10 pb-10 justfy-center'>
            <button className='flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-green-500 rounded-lg text-white font-medium cursor-pointer shadow-md hover:shadow-lg'>
              Assine Já!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
