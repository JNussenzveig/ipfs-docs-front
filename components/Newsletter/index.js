export default function Newsletter() {
  return (
    <div className='bg-white'>
      <div className='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-row items-center justify-center w-full'>
        <div className='lg:w-2/4'>
          <h2 className='text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
            Want more News ?
            <br className='hidden sm:inline' />
            <span className='text-indigo-600'>Sign up for My newsletter.</span>
          </h2>
          <p className='text-lg font-semibold text-gray-600 mt-6'>
            Não perca nenhuma novidade, cadastre seu email e fique sabendo de
            tudo do mundo da tecnologia!
          </p>
        </div>
        <div className='lg:w-2/4'>
          <form className='mt-8 sm:flex w-full'>
            <input
              aria-label='Email address'
              type='email'
              required
              className='appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out'
              placeholder='Enter your email'
            />
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
              <button className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'>
                Send me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
