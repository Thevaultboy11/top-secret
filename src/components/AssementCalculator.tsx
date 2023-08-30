import React, { useEffect, useState } from "react";
import TypeAssessment from "../components/TypeAssement";
import { Icon } from "astro-icon";

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
  const [{ x, k, i, m, p, r, n, sub, s }, setPriceVariables] = useState<any>({
    x: 0,
    k: 1,
    i: 0,
    m: 0,
    p: 0,
    r: 0,
    n: 0,
    sub: 0,
    s: 0,
  });
  const [submitState, setSubmitState] = useState(0);
  const [PriceToPay, setPriceToPay] = useState(0);

  const [FullPrice, setFullPrice] = useState(0);
  const [{ isOpen, text }, setModalData] = useState({
    isOpen: false,
    text: "",
  });
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
        console.log("radi");
        setSubmitState(3);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [submitState]);
  const calculatePrice = () => {
    let result;
    if (x === 0) {
      if (i == 0 || m == 0 || p == 0) {
        setModalData({
          isOpen: true,
          text: "Enter the number of inputs, the number of pages, and third party software for you web application.",
        });
        return;
      }
      result = ((((i - m) * 30 + 60) * k) / 60) * 100;
    } else if (x == 1) {
      if (i == 0 || m == 0 || p == 0) {
        setModalData({
          isOpen: true,
          text: "Enter the number of inputs, the number of pages, and third party software for you mobile application.",
        });
        return;
      }
      result = ((((i - m) * 30 + 60) * k) / 60) * 100;
    } else if (x == 2) {
      if (r == 0) {
        setModalData({
          isOpen: true,
          text: "Enter the number of API endpoints.",
        });
        return;
      }
      result = ((r * 30 * k) / 60) * 100;
    } else {
      if (s == 0 || sub == 0) {
        setModalData({
          isOpen: true,
          text: "Enter the number of devices and subnets.",
        });
        return;
      }
      result = ((s * 40 * n) / 60) * 100;
    }
    setSubmitState(2);
    setFullPrice(Math.ceil(result));
  };
  const handleOptionChange = (event) => {
    setPriceVariables((prevObject) => ({
      ...prevObject,
      x: Math.abs(Number(event.target.value)),
    }));
  };

  const handlePriceVariables = (variable, value) => {
    const positiveValue = Math.abs(Number(value));
    setPriceVariables((prevObject) => ({
      ...prevObject,
      [variable]: positiveValue,
    }));
  };

  if (submitState == 2) {
    return (
      <div className="p-20 text-center">
        <p className="text-xl md:text-base my-4">Calculating the price...</p>
        <div
          className="inline-block h-32 w-32 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      </div>
    );
  }
  if (submitState == 3) {
    const type_scope = [
      "Web Application assesment",
      "Mobile Application assesment",
      "API assessment",
      "Network Assessment",
    ];
    const type_assessment = ["White box", "Gray box", "Black box"];
    const type_network = ["Internal network", "External network"];
    const type_multiplyer = [i, i, r, sub];
    const type_multiplyer_text = [
      "input points",
      "input pointss",
      "API routes",
      "subnets",
    ];
    return (
      <>
        <h2 className="text-base mb-4">
          {" "}
          Rough estimate of the price for these factors:
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <li className="bg-white border border-1 border-paper rounded-md p-4 flex justify-center items-center">
            <p>For the {type_scope[x]}</p>
          </li>
          <li className="bg-white border border-1 border-paper rounded-md p-4 flex justify-center items-center">
            <p>
              {" "}
              The {x !== 3 ? type_assessment[k - 1] : type_network[n]} approach.
            </p>
          </li>
          <li className="bg-white border border-1 border-paper rounded-md p-4 flex justify-center items-center">
            <p>
              {" "}
              With the number of {type_multiplyer[k]} {type_multiplyer_text[k]}
            </p>
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div>
            <h1 className="text-base">The asked price</h1>
            <div className="bg-white border border-1 border-paper rounded-md p-4 flex justify-center items-center">
              <p>{PriceToPay}$</p>
            </div>
          </div>
          <div>
            <h1 className="text-base">Industry standard</h1>
            <div className="bg-white border border-1 border-paper rounded-md p-4 flex justify-center items-center">
              <p>{FullPrice}$</p>
            </div>
          </div>
        </div>
        <div className="bg-primary rounded-md w-full p-4 mt-8">
          {" "}
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-white font-bold text-lg">
              Hybrid model{" "}
              <span className="text-white font-bold line-through">
                {" "}
                {FullPrice}$
              </span>{" "}
            </p>
            <p className="text-white  text-lg">
              {" "}
              Because we are running Amplify security until halloween offer.{" "}
              <br />
            </p>
            <p className="text-white">
              The hybrid assment is <b>FREE</b>.
            </p>
            <a className="ml-4 text-secondary " href="/learn-more">
              Explanation
            </a>
          </div>
        </div>

        <p className="text-xl my-4"></p>
      </>
    );
  }
  return (
    <>
      {isOpen && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white w-full max-w-4xl py-30 rounded-lg shadow ">
          <button
            onClick={() => {
              setModalData({ isOpen: false, text: "" });
            }}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6  text-center">
            <svg
              className="mx-auto text-primary w-16 h-16 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 md:text-base">{text}</h3>
          </div>
        </div>
      )}

      <div className="max-w-4xl">
        <h3 className="mb-4 text-base">Price you are willing to pay.</h3>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-dollar-sign"
            >
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <input
            onChange={(e: any) => {
              setPriceToPay(e.target.value);
            }}
            type="number"
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1000"
          />
        </div>
        <h3 className="mb-4 text-base">Choose Assessment Type:</h3>
        <ul className="items-center grid grid-cols-1 md:grid-cols-4 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-license"
                type="radio"
                value={0}
                checked={x === 0}
                onChange={handleOptionChange}
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
              />
              <label
                htmlFor="horizontal-list-radio-license"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Web application testing
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-id"
                type="radio"
                value={1}
                checked={x === 1}
                onChange={handleOptionChange}
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
              />
              <label
                htmlFor="horizontal-list-radio-id"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Mobile application testing
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-millitary"
                type="radio"
                value={2}
                checked={x === 2}
                onChange={handleOptionChange}
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
              />
              <label
                htmlFor="horizontal-list-radio-millitary"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                API testing
              </label>
            </div>
          </li>
          <li className="w-full dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-passport"
                type="radio"
                value={3}
                checked={x === 3}
                onChange={handleOptionChange}
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
              />
              <label
                htmlFor="horizontal-list-radio-passport"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Network testing
              </label>
            </div>
          </li>
        </ul>

        {(x === 0 || x == 1) && (
          <div className="">
            <TypeAssessment
              onChangePriceVariables={handlePriceVariables}
              k={k}
            />
            <div className="flex flex-col gap-y-6 w-full">
              <div className="">
                <label
                  htmlFor="number_of_pages"
                  className="block my-4 text-base"
                >
                  Number of dynamic pages. (Where the content loads based on the
                  user profile.)
                </label>
                <input
                  value={p}
                  min="1"
                  type="number"
                  onChange={(e) => handlePriceVariables("p", e.target.value)}
                  id="number_of_pages"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="number_of_input_pages"
                  className="block my-4 text-base"
                >
                  Number of input fields. (Every action a user can make to
                  change a curtain action.)
                  <a className="ml-4 text-primary" href="/">
                    Explanation
                  </a>
                </label>
                <input
                  min="1"
                  value={i}
                  type="number"
                  onChange={(e) => handlePriceVariables("i", e.target.value)}
                  id="number_of_input_pages"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="">
                <label
                  htmlFor="number_of_micro_services"
                  className="block my-4 text-base"
                >
                  Number of third party software. (Every microservice for
                  handling logic of the application.)
                </label>
                <input
                  type="number"
                  value={m}
                  id="number_of_micro_services"
                  onChange={(e) => handlePriceVariables("m", e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {x === 2 && (
          <div className="">
            <TypeAssessment
              onChangePriceVariables={handlePriceVariables}
              k={k}
            />
            <div className="">
              <label htmlFor="number_routes" className="block my-4 text-base">
                Number of API endpoints:{" "}
                <a className="ml-4 text-primary" href="/">
                  Explanation
                </a>
              </label>
              <input
                type="number"
                id="number_routes"
                value={r}
                onChange={(e) => handlePriceVariables("r", e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
          </div>
        )}

        {x === 3 && (
          <div className="">
            <div className="">
              <p className="block my-4 text-base">Type of network testing </p>
              <ul className="items-center grid grid-cols-1 md:grid-cols-4 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="internal-network"
                      type="radio"
                      value={3}
                      onChange={() => handlePriceVariables("n", 2)}
                      name="list-network"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
                    />
                    <label
                      htmlFor="internal-network"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Internal network
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center pl-3">
                    <input
                      id="external-network"
                      type="radio"
                      value={3}
                      onChange={() => handlePriceVariables("n", 1)}
                      name="list-network"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
                    />
                    <label
                      htmlFor="external-network"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      External network
                    </label>
                  </div>
                </li>
              </ul>
              <label htmlFor="number_subnets" className="block my-4 text-base">
                Number of subnets: (){" "}
                <a className="ml-4 text-primary" href="/">
                  Explanation
                </a>
              </label>
              <input
                onChange={(e) => handlePriceVariables("sub", e.target.value)}
                type="number"
                value={sub}
                id="number_subnets"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="">
              <label htmlFor="number_devices" className="block my-4 text-base">
                Number of devices on the network: (){" "}
                <a className="ml-4 text-primary" href="/">
                  Explanation
                </a>
              </label>
              <input
                value={s}
                onChange={(e) => handlePriceVariables("s", e.target.value)}
                type="number"
                id="number_devices"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
          </div>
        )}
        <div className="w-full flex justify-center">
          {" "}
          <button
            className="cta-button-lg  md:w-72 mt-12"
            onClick={() => {
              calculatePrice();
            }}
          >
            Calculate the cost
          </button>
        </div>
      </div>
    </>
  );
}

export default CalculatorForm;
