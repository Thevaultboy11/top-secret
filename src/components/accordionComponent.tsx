import React, { useState } from "react";

export default function AccordionBasicExample(): JSX.Element {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <>
      <div className="" id="accordionExample">
        <div className="rounded-t-lg  border border-1 border-neutral-200 bg-paper dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${
                activeElement === "element1" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
              } group relative flex w-full items-center rounded-t-[15px] border-0 bg-paper px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Will this be a waste of time?
              <span
                className={`${
                  activeElement === "element1"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529]  dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          {activeElement === "element1" && (
            <div className="!mt-0 !rounded-b-none !shadow-none">
              <div className="px-5 py-4">
                No, Don’t be like Code Spaces, MyBizHomepage, Nirvanix, they
                were successful until they went bankrupt because of Data
                Breaches, <b>Be Better</b> <b>be Prepared</b>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="border border-t-0 border-neutral-200 bg-paper dark:border-neutral-600 dark:bg-neutral-800">
        <h2 className="mb-0" id="headingTwo">
          <button
            className={`${
              activeElement === "element2"
                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-paper px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
            type="button"
            onClick={() => handleClick("element2")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Security takes a long time.
            <span
              className={`${
                activeElement === "element2"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        {activeElement === "element2" && (
          <div className="!mt-0 !rounded-b-none !shadow-none">
            <div className="px-5 py-4">
              A good plan executed now is better than a perfect plan executed
              next week.
            </div>
          </div>
        )}
      </div>
      <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-paper dark:border-neutral-600 dark:bg-neutral-800">
        <h2 className="accordion-header mb-0" id="headingThree">
          <button
            className={`${
              activeElement === "element3"
                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-paper px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
            type="button"
            onClick={() => handleClick("element3")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Security is hard to implement.
            <span
              className={`${
                activeElement === "element3"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        {activeElement === "element3" && (
          <div className="!mt-0 !shadow-none">
            <div className="px-5 py-4">
              Security is not hard to <b>learn</b>, it is hard to <b>teach</b>.
              We will provide security assessment, education, and content so
              your developers can start writing code securely without(any risk
              for you and your business)
            </div>
          </div>
        )}
      </div>
    </>
  );
}
