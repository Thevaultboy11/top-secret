import React, {useEffect, useState} from 'react'
import TypeAssessment from '../components/TypeAssement'
function CalculatorForm() {
    
/* 
    x - type of scope
    k - type of penetration test
    i - number of input points
    m - microservices
    p - pages on a application
    r - routes on the api
    n - network type
    sub - how much subnets are there
    s - number of services
*/ 
  const [{x,  k, i, m, p, r, n, sub, s}, setPriceVariables  ] = useState<any>({x:0,  k:1, i: 0, m:0, p:0, r: 0, n:0, sub:0, s:0 })
  const [submitState, setSubmitState] = useState(0);
  const [FullPrice, setFullPrice] = useState(0);
  const [{isOpen, text}, setModalData] = useState({isOpen: false, text:""});
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = 'hidden'; // Disable scrolling
  //   } else {
  //     document.body.style.overflow = ''; // Re-enable scrolling
  //   }

  //   return () => {
  //     document.body.style.overflow = ''; // Ensure scrolling is re-enabled when the component unmounts
  //   };
  // }, [isOpen]);

  useEffect(() => {
    if (submitState === 2) {
      const timeoutId = setTimeout(() => {
        console.log('radi')
        setSubmitState(3);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [submitState]);
  const calculatePrice = () => {
    let result 
    if (x === 0) {
        if ((i == 0) || (m == 0) || (p == 0)) {
          setModalData({isOpen: true, text: 'Enter the number of inputs, the number of pages, and third party software for you web application.'})
          return
        }
        result = ((((i-m)*30 + 60) * k) / 60) * 100
    }else if (x == 1) {
      if ((i == 0) || (m == 0) || (p == 0)) {
        setModalData({isOpen: true, text: 'Enter the number of inputs, the number of pages, and third party software for you mobile application.'})
        return
      }
      result = ((((i-m)*30 + 60) * k) / 60) * 100
    } else if (x == 2) {
        if (r == 0) {
          setModalData({isOpen: true, text: 'Enter the number of API endpoints.'})
          return
        }
        result = (((r * 30) * k) / 60) * 100
    }else {
      if ((s == 0) || (sub == 0)) {
        setModalData({isOpen: true, text: 'Enter the number of devices and subnets.'})
        return
      }
        result = (((s * 40) * n) / 60) * 100
    }
    setSubmitState(2)
    setFullPrice(result)
  }
  const handleOptionChange = (event) => {
    setPriceVariables((prevObject) => ({
        ...prevObject,  // Spread the previous object properties
        x: Number(event.target.value),   // Update the 'x' property with the new value
      }));
  };
  const handlePriceVariables = (variable, value) => {
    setPriceVariables((prevObject) => ({
      ...prevObject,  // Spread the previous object properties
      [variable]: Number(value),   // Update the 'x' property with the new value
    }));
  }
  if (submitState == 2) {
    return (
      <div className='p-20 text-center'>
        <p className='text-xl md:text-2xl my-4'>Calculating the price...</p>
        <div
          className="inline-block h-32 w-32 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
        </div>
      </div>
    )
  }
  console.log(submitState, submitState == 3)
  if (submitState == 3) {
    const type_scope = ['Web Application assesment', 'Mobile Application assesment','API assessment', 'Network Assessment']
    const type_assessment = ['White box', 'Gray box','Black box']
    const type_network = ['Internal network','External network']
    const type_multiplyer = [i,i,r,sub]
    const type_multiplyer_text = ["input points","input pointss",'API routes', 'subnets']
    return (
      <>
        <h2 className='text-2xl mb-4'> Rough estimate of the price for these factors:</h2>
        <ul>
          <li>
            For the {type_scope[x]}
          </li>
          <li>
            The {x !== 3 ? type_assessment[k-1] : type_network[n]} assment.
           </li>
           <li>
              With the number of {type_multiplyer[k]} {type_multiplyer_text[k]}
           </li>
        </ul>
        <div className='text-center'>
          <h1 className='text-2xl'>The price for a regular security assment: {FullPrice}$</h1>
          <h1 className='text-2xl'>Hybrid model <span className='text-primary  line-through'> {FullPrice}$</span></h1>
          <p className='text-xl my-4'>Because we are running <b>Amplify security untill Hallowen offer.</b>  <br/>The hybrid assment is <b>free</b>.<a className='ml-4 text-primary' href='/story-type/case-study'>Explanation</a></p>
        </div>
      </>
    )
  }
  return (
    <>
    {isOpen && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white w-full max-w-4xl py-30 rounded-lg shadow ">
            <button onClick={() => {setModalData({isOpen: false, text: ""})}}  type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6  text-center">
                <svg className="mx-auto text-primary w-16 h-16 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 className="mb-5 md:text-2xl">{text}</h3>
                </div>
        </div>
        )}

    <div className="max-w-4xl">
      
      <h2 className='text-2xl mb-4'>
        Choose Assessment Type:
      </h2>
      <div className='grid gap-x-4 grid-cols-1 md:grid-cols-4'>
        <div className='flex items-center gap-x-4 text-lg'>
          <label className='flex items-center gap-x-2'>
            <input
              className='w-4 h-4'
              type="radio"
              value={0}
              checked={x === 0}
              onChange={handleOptionChange}
            />
            <span>Web application testing</span>
          </label>
        </div>
        <div className='flex items-center gap-x-4 text-lg'>
          <label className='flex items-center gap-x-2'>
            <input
              className='w-4 h-4'
              type="radio"
              value={1}
              checked={x === 1}
              onChange={handleOptionChange}
            />
            <span>Mobile application testing</span>
          </label>
        </div>
        <div className='flex items-center gap-x-4 text-lg'>
          <label className='flex items-center gap-x-2'>
            <input
              className='w-4 h-4'
              type="radio"
              value={2}
              checked={x === 2}
              onChange={handleOptionChange}
            />
            <span>API assessment</span>
          </label>
        </div>
        <div className='flex items-center gap-x-4 text-lg'>
          <label className='flex items-center gap-x-2'>
            <input
              className='w-4 h-4'
              type="radio"
              value={3}
              onChange={handleOptionChange}
              checked={x === 3}
            />
            <span>Network assessment</span>
          </label>
        </div>
      </div>
     {(x === 0 || x == 1) && (
       <div className='mt-8'>
       <TypeAssessment onChangePriceVariables={handlePriceVariables} k={k}/>
       <div className='flex flex-col gap-y-6 w-full'>
          <div className=''>
            <label htmlFor="number_of_pages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of dynamic pages. (Where the content loads based on the user profile.)</label>
            <input type="number" onChange={(e) => handlePriceVariables('p', e.target.value)} id="number_of_pages" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div className=''>
            <label htmlFor="number_of_input_pages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of input fields. (Every action a user can make to change a curtain action.)<a className='ml-4 text-primary' href='/'>Explanation</a></label>
            <input type="number" onChange={(e) => handlePriceVariables('i', e.target.value)} id="number_of_input_pages" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div className=''>
            <label htmlFor="number_of_micro_services" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of third party software. (Every microservice for handling logic of the application.)</label>
            <input type="number" id="number_of_micro_services" onChange={(e) => handlePriceVariables('m', e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
        </div>
        </div>
      )}
  
      {x === 2 && (
        <div className='mt-8'>
          <TypeAssessment onChangePriceVariables={handlePriceVariables} k={k}/>
          <div className=''>
            <label htmlFor="number_routes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Number of API endpoints: <a className='ml-4 text-primary' href='/'>Explanation</a> 
            </label>
            <input type="number" id="number_routes" onChange={(e) => handlePriceVariables('r', e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>

        </div>
      )}
  
      {x === 3 && (
        <div className='mt-8'>
          <div className='flex items-center gap-x-4 text-lg'>
            <label className='flex items-center gap-x-2'>
              <input
                className='w-4 h-4'
                type="radio"
                value={3}
                onChange={() => handlePriceVariables('n', 1)}
                checked={n === 1}
              />
              <span>Internal network</span>
            </label>
        </div>
        <div className='flex items-center gap-x-4 text-lg'>
          <label className='flex items-center gap-x-2'>
            <input
              className='w-4 h-4'
              type="radio"
              value={3}
              onChange={() => handlePriceVariables('n', 2)}
              checked={n === 2}
            />
            <span>Network assessment</span>
          </label>
        </div>
           <div className=''>
            <label htmlFor="number_subnets" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Number of subnets: () <a className='ml-4 text-primary' href='/'>Explanation</a> 
            </label>
            <input onChange={(e) => handlePriceVariables('sub', e.target.value)} type="number" id="number_subnets" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div className=''>
            <label htmlFor="number_devices" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Number of devices on the network: () <a className='ml-4 text-primary' href='/'>Explanation</a> 
            </label>
            <input onChange={(e) => handlePriceVariables('s', e.target.value)}  type="number" id="number_devices" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
        </div>
      )}
      <div className='w-full flex justify-center'>  <button className='cta-button-lg  md:w-72 mt-12' onClick={() => {
        calculatePrice()
        
      }}>Calculate the cost</button>
    </div>
    </div>
    </>
  );  
}

export default CalculatorForm
