import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import PricingSection from '../components/PricingSection';

export default function Home() {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <Head>
          <title>CloudX</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <HeroSection />
        <FeatureSection 
          callout='Serviços' 
          title='Armazenamento seguro, rápido e barato!' 
          description='Seus arquivos pessoais serão criptografados e armazenados e só você controla quem pode acessar.' 
          items={[
            { title: 'Velocidade da Luz', text: 'Todos os seus arquivos ficam disponíveis 100% do tempo e são servidos pra você com a velocidade da luz!' },
            { title: 'Criptografia de Ponta', text: 'Seus arquivos completamente seguros com uma criptografia de ponta para total segurança.' },
            { title: 'Preços Acessíveis', text: 'À partir de R$30/mês você pode desfrutar de toda nossa estrutura. Barato, né?!' },
            { title: 'Você no controle', text: 'Controle quem pode acessar e editar seus arquivos com a maior facilidade!' },
            { title: 'Preserve o que importa', text: 'Oferecemos um serviço de backup automático de arquivos para dispositivos móveis e desktop!' },
            { title: 'Primeiro mês grátis', text: 'Aproveite agora e desfrute de TUDO isso por 30 dias grátis!' },
          ]} 
        />
        <PricingSection />
        {/* <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <h1 className='text-6xl font-bold'>
            Welcome to{' '}
            <a className='text-blue-600' href='https://nextjs.org'>
              Next.js!
            </a>
          </h1>

          <p className='mt-3 text-2xl'>
            Get started by editing{' '}
            <code className='p-3 font-mono text-lg bg-gray-100 rounded-md'>
              pages/index.js
            </code>
          </p>

          <div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
            <a
              href='https://nextjs.org/docs'
              className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
            >
              <h3 className='text-2xl font-bold'>Documentation &rarr;</h3>
              <p className='mt-4 text-xl'>
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href='https://nextjs.org/learn'
              className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
            >
              <h3 className='text-2xl font-bold'>Learn &rarr;</h3>
              <p className='mt-4 text-xl'>
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href='https://github.com/vercel/next.js/tree/master/examples'
              className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
            >
              <h3 className='text-2xl font-bold'>Examples &rarr;</h3>
              <p className='mt-4 text-xl'>
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              className='p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600'
            >
              <h3 className='text-2xl font-bold'>Deploy &rarr;</h3>
              <p className='mt-4 text-xl'>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main> */}

        <footer className='flex items-center justify-center w-full h-24 border-t'>
          <a
            className='flex items-center justify-center'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by&nbsp;<b>VEIG</b>
          </a>
        </footer>
      </div>
    </>
  );
}
