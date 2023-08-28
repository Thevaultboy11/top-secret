import React from 'react';

const CaseStudy = ({ data }) => {
  return (
    <>
        {data.map(item => (
        <a href={`case-studies/${item.url}`}  key={item.title} className="cursor-pointer w-full max-w-sm block p-6 bg-white border border-gray-200  rounded-xl  shadow hover:bg-gray-100 dark:bg-slate-900 dark:border-slate-300 dark:hover:bg-slate-800">
        <div >
          <img className=" rounded-xl  select-none" src={item.img} alt={item.title} />
          <p className="my-4 text-blue-600 text-left font-bold">{item.client_name}</p>
          <h2 className="italic text-left text-xl md:text-2xl">{item.title}</h2>
        </div>
        </a>
        
      ))}
    </>
  );
};

export default CaseStudy;