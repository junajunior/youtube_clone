import './App.css';
import React from 'react'


function App() {
  return (
    <React.Fragment>
      <div className='w-full h-full bg-gray-900 '>
        <div className=' text-white grid grid-cols-7 ml-4 '>
          <div className='bg-gray-900 w-full h-full '>
            <div className=' '>
              <div className='inline-flex items-center  '>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <h1 className=' text-white text-2xl ml-3'> Youtube</h1>
              </div>
            </div>
            <div className='space-y-6 border-b-2 mt-4 '>
              <div className='inline-flex items-center justify-center  '>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h1 className=' text-gray-300 ml-4 text-1xl  '> Home</h1>
              </div>
              <div className='flex '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <h1 className=' text-gray-300 ml-4 text-1xl  '> Explore</h1>
              </div>
              <div className='inline-flex items-center justify-center  '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
                <h1 className=' text-gray-300 ml-4 text-1xl '> Subscription</h1>
              </div>
            </div>
            <div className='space-y-9 border-b-2 mt-5'>
              <div className='inline-flex items-center justify-center '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <h1 className=' text-gray-300 ml-4 text-1xl  '> Library</h1>
              </div>
              <div className='flex items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className=' text-gray-300 ml-4 text-1xl '> History</h1>
              </div>
              <div className='inline-flex items-center justify-center '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                <h1 className=' text-gray-300 ml-4 text-1xl '>Your videos</h1>
              </div>
              <div className='flex items-center  '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <h1 className=' text-gray-300 ml-4 text-1xl '>Watch Later</h1>
              </div>
              <div className='inline-flex items-center justify-center '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                  <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
                </svg>
                <h1 className=' text-gray-300 ml-4 text-1xl '>Your Clips</h1>
              </div>
            </div>
            <div className='space-y-9 mt-5'>
              <div className='inline-flex items-center justify-center '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className=' text-gray-300 ml-4 text-1xl  '> React js</h1>
              </div>
              <div className='flex items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className=' text-gray-300 ml-4 text-1xl '> Node js</h1>
              </div>
              <div className='inline-flex items-center justify-center '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className=' text-gray-300 ml-4 text-1xl '>Express js</h1>
              </div>
              <div className='flex items-center  '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h1 className=' text-gray-300 ml-4 text-1xl '>Redux js</h1>
              </div>
            </div>
          </div>
          {/* HEADER */}
          <div className='bg-gray-900 col-start-2 col-end-12  '>

            <div className='bg-gray-900 w-full  h-16   flex items-center justify-between'>
              <div className='inline-flex h-10 border-2  rounded-sm ml-80'>
                <input type="search" className='flex text-white font-bold bg-gray-600 w-96 ' />
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-full bg-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className='space-x-4 inline-flex mr-10'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
            </div>


            <div className='bg-black'>
              <div className=' justify-around bg-gray-800 w-full h-12 items-center inline-flex '>
                <h1 className=' border-2 text-center rounded-lg text-gray-500 font-bold w-24 h-9'>mix 1</h1>
                <h1 className=' border-2 text-center rounded-lg text-gray-500 font-bold w-24 h-9'>mix 2</h1>
                <h1 className=' border-2 text-center rounded-lg text-gray-500 font-bold w-24 h-9'>mix 3</h1>
                <h1 className=' border-2 text-center rounded-lg text-gray-500 font-bold w-24 h-9'>mix 4</h1>
                <h1 className=' border-2 text-center rounded-lg text-gray-500 font-bold w-24 h-9'>mix 5</h1>
                <h1 className=' border-2 text-center rounded-lg text-gray-500 font-bold w-24 h-9'>mix 6</h1>
                <h1 className=' border-2 text-center rounded-lg text-gray-500 font-bold w-24 h-9'>mix 7</h1>
              </div>
            </div>

            <div className='bg-gray-600 w-full h-screen flex flex-col'>
              <div className='flex justify-center space-x-14 mt-6 '>
                <div className='w-80  h-44 bg-green-500 '>
                  <img className='w-80  h-44 ' src="data:image/jpeg;base64,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" alt="" />
                  <div className='inline-flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 pb-9 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className='text-white font-semibold text-md '>
                      Belajar react js hanya dalam 1 jam dijamin bisa kalau mau
                      <p className='text-black font-medium mt-3 text-sm '>
                        sandhika galih
                      </p>
                      <p className='text-black font-medium text-sm '>
                        793.950 views . 7 hours ago
                      </p>
                    </h1>
                  </div>
                </div>

                <div className='w-80  h-44 bg-green-500'>
                  <img className='w-80  h-44' src="https://th.bing.com/th/id/OIP.qi9bNfVEc9nJRchMnQ6zwwHaEU?pid=ImgDet&rs=1" alt="" />
                  <div className='inline-flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 pb-9 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className='text-white font-semibold text-md '>
                      apakah html dan css sangat penting di duni  a programming??
                      <p className='text-black font-medium mt-3 text-sm '>
                        web programming UNPAS
                      </p>
                      <p className='text-black font-medium text-sm '>
                        193.351 views . 3 days ago
                      </p>
                    </h1>
                  </div>
                </div>

                <div className='w-80  h-44 bg-green-500'>
                  <img className='w-80  h-44' src="https://th.bing.com/th/id/OIP.QXXviQI-N1jzuOOajsIe7gHaD4?pid=ImgDet&rs=1" alt="" />
                  <div className='inline-flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 pb-9 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className='text-white font-semibold text-md '>
                      membuat routing sendiri? apakah bisa? node js tutorial
                      <p className='text-black font-medium mt-3 text-sm '>
                        Programmer indonesia
                      </p>
                      <p className='text-black font-medium text-sm '>
                        502.632 views . 19 hours ago
                      </p>
                    </h1>
                  </div>
                </div>
              </div>
              
              <div className='flex justify-center h-full space-x-14 mt-28'>
                <div className='w-80  h-44 bg-green-500 '>
                  <img className='w-80  h-44 ' src="data:image/jpeg;base64,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" alt="" />
                  <div className='inline-flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 pb-9 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className='text-white font-semibold text-md '>
                      Belajar react js hanya dalam 1 jam dijamin bisa kalau mau
                      <p className='text-black font-medium mt-3 text-sm '>
                        sandhika galih
                      </p>
                      <p className='text-black font-medium text-sm '>
                        793.950 views . 7 hours ago
                      </p>
                    </h1>
                  </div>
                </div>

                <div className='w-80  h-44 bg-green-500'>
                  <img className='w-80  h-44' src="https://th.bing.com/th/id/OIP.qi9bNfVEc9nJRchMnQ6zwwHaEU?pid=ImgDet&rs=1" alt="" />
                  <div className='inline-flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 pb-9 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className='text-white font-semibold text-md '>
                      apakah html dan css sangat penting di duni  a programming??
                      <p className='text-black font-medium mt-3 text-sm '>
                        web programming UNPAS
                      </p>
                      <p className='text-black font-medium text-sm '>
                        193.351 views . 3 days ago
                      </p>
                    </h1>
                  </div>
                </div>

                <div className='w-80  h-44 bg-green-500'>
                  <img className='w-80  h-44' src="https://th.bing.com/th/id/OIP.QXXviQI-N1jzuOOajsIe7gHaD4?pid=ImgDet&rs=1" alt="" />
                  <div className='inline-flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 pb-9 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className='text-white font-semibold text-md '>
                      membuat routing sendiri? apakah bisa? node js tutorial
                      <p className='text-black font-medium mt-3 text-sm '>
                        Programmer indonesia
                      </p>
                      <p className='text-black font-medium text-sm '>
                        502.632 views . 19 hours ago
                      </p>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;




