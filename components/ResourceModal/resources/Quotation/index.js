// import { useState } from 'react'

import FormModal from '../../../FormModal';

// export default function QuotationCreateModal ({ closeModal, formSubmit, items, setItems }) {
//   const [isOpen, setOpen] = useState(true)

//   return (
//     <>
//       {isOpen && 
//         <FormModal 
//           closeModal={e => setOpen(false)}
//           formSubmit={formSubmit}
//           title={'Create Quotation'}
//           fields={[
//             { type: 'text', name: 'title', placeholder: 'Quotation title', label: 'Title' },
//             { type: 'text', name: 'description', placeholder: 'Quotation description', label: 'Description' },
//             { type: 'array', name: 'items', label: 'Quote Items' }
//           ]}
//           items={items}
//           setItems={setItems}
//         />}
//     </>
//   )
// }

import { useEffect, useState } from 'react'
import { DocumentTextIcon, PaperClipIcon } from '@heroicons/react/outline'

export default function QuotationCreateModal({
  resourceName,
  resourceList = [
    { title: 'Test Quotation', category: 'Technology' },
    { title: 'Test Quotation 2', category: 'Technology' },
    { title: 'Test Quotation 3', category: 'Technology' },
  ],
  handleSubmit,
  items,
  setItems
}) {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      setResults(resourceList.filter(item => item.title.toLowerCase().search(searchTerm.toLowerCase()) > -1 || item.category.toLowerCase().search(searchTerm.toLowerCase()) > -1))
    } else {
      setResults(resourceList)
    }
  }, [searchTerm])

  return (
    <>
      {showForm && 
        <FormModal 
          closeModal={e => setShowForm(false)}
          formSubmit={handleSubmit}
          title={'Create Quotation'}
          fields={[
            { type: 'text', name: 'title', placeholder: 'Quotation title', label: 'Title' },
            { type: 'text', name: 'description', placeholder: 'Quotation description', label: 'Description' },
            { type: 'array', name: 'items', label: 'Quote Items' }
          ]}
          items={items}
          setItems={setItems}
        />}
      <section class='px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4 flex items-center justify-center flex-col w-full mt-10'>
        <div className='sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 flex flex-col items-center justify-center'>
          <header class='flex items-center justify-between w-full'>
            <h2 class='text-3xl leading-2 font-medium text-black'>{resourceName}</h2>
            <button onClick={e => setShowForm(true)} class='transition duration-200 ease-in-out hover:bg-indigo-200 hover:text-indigo-800 group flex items-center rounded-md bg-indigo-100 text-indigo-600 text-sm font-medium px-4 py-2'>
              <svg
                class='group-hover:text-light-indigo-600 text-light-indigo-500 mr-2'
                width='12'
                height='20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z'
                />
              </svg>
              New
            </button>
          </header>
          <form class='relative w-full mt-8 mb-4'>
            <svg
              width='20'
              height='20'
              fill='currentColor'
              class='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              />
            </svg>
            <input
              class='focus:border-light-indigo-500 focus:ring-1 focus:ring-light-indigo-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10'
              type='text'
              aria-label='Filter projects'
              placeholder='Filter projects'
              onChange={e => setSearch(e.target.value)}
              value={searchTerm}
            />
          </form>
          <ul class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 w-full'>
            {(results.length ? results : resourceList).map((item) => (
              <li>
                <a
                  href='item.url'
                  class='hover:bg-indigo-500 hover:border-gray-500 hover:shadow-lg group block rounded-lg p-4 border border-gray-300 transition-all duration-300 ease-in-out'
                >
                  <dl class='grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center'>
                    <div>
                      <dt class='sr-only'>Title</dt>
                      <dd class=' leading-6 font-medium text-black group-hover:text-white'>
                        {item.title}
                      </dd>
                    </div>
                    <div>
                      <dt class='sr-only'>Category</dt>
                      <dd class='group-hover:text-indigo-200 text-gray-500 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4'>
                        {item.category}
                      </dd>
                    </div>
                    <div>
                      <dt class='sr-only'>Items</dt>
                      <dd class='group-hover:text-indigo-200 text-gray-500 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4 flex flex-row items-center'>
                        <PaperClipIcon style={{ width: 16, height: 16 }} />
                        <span className='ml-1'>{item.items.length} items</span>
                      </dd>
                    </div>
                  </dl>
                </a>
              </li>
            ))}
            <li class='hover:shadow-lg flex rounded-lg' onClick={e => setShowForm(true)}>
              <a
                href='#'
                class='hover:border-transparent hover:border-gray-300 transition duration-200 ease-in-out hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium py-4'
              >
                New {resourceName}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
