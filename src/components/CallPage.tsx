import React, { useState } from "react";

function CallPage() {
  const [
    { name, email, number, business_type, security_assessment },
    setFormData,
  ] = useState({
    email: "",
    number: "",
    business_type: "",
    name: "",
    security_assessment: 0,
  });

  const changeFormData = (field, value) => {
    console.log(import.meta.env.STARSHIP_SHIELD_API);
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    const apiUrl = "http://localhost:8080/api";
    const apiData = {
      fullName: name,
      email: email,
      phoneNumber: String(number),
      businessDescription: String(business_type),
      pentestType: String(security_assessment),
      applicationType: "0", // Replace with the actual value
    };
    fetch(`${apiUrl}/create-business`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    })
      .then((response) => {
        if (response.status == 200) {
          window.location.href = "/schedule-a-time";
        } else {
          console.error(response);
        }
      })
      .then((data) => {
        // Handle the response data
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };
  return (
    <form action="/schedule-a-time" onSubmit={(e) => onSubmit(e)} className="">
      <label className="text-xl" htmlFor="name">
        Name
      </label>
      <input
        onChange={(e) => changeFormData("name", e.target.value)}
        placeholder="Name"
        className="rounded-full w-full p-2 md:p-4 mb-6"
        type="text"
        id="name"
        name="user_name"
        required
      />

      <label className="text-xl" htmlFor="phone">
        Your email
      </label>
      <input
        onChange={(e) => changeFormData("email", e.target.value)}
        placeholder="example@buisnessemail.com"
        className="rounded-full w-full p-2 md:p-4 mb-6"
        type="email"
        id="email"
        name="user_email"
        required
      />

      <label className="text-xl" htmlFor="phone">
        Phone Number
      </label>
      <input
        onChange={(e) => changeFormData("number", e.target.value)}
        placeholder="Country code / number"
        className="rounded-full w-full p-2 md:p-4 mb-6"
        type="tel"
        id="phone"
        name="phone"
        required
      />
      <label className="text-xl" htmlFor="phone">
        About your buisness
      </label>
      <input
        onChange={(e) => changeFormData("business_type", e.target.value)}
        placeholder="Startup/Software development company"
        className="rounded-full w-full p-2 md:p-4 mb-6"
        type="string"
        required
      />
      <label className="text-xl ">
        What type of penetration test do you need?
      </label>
      <div className="grid gap-x-4 grid-cols-1 md:grid-cols-4 mt-4 w-full">
        <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
          <input
            onChange={(e) =>
              changeFormData("security_assessment", Number(e.target.value))
            }
            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="radio"
            name="inlineRadioOptions"
            id="web-mobile"
            value={0}
            checked={security_assessment === 0}
          />
          <label
            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="web-mobile"
          >
            Web / Mobile application testing
          </label>
        </div>
        <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
          <input
            onChange={(e) =>
              changeFormData("security_assessment", Number(e.target.value))
            }
            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="radio"
            name="inlineRadioOptions"
            id="networking-assement"
            value={1}
            checked={security_assessment === 1}
          />
          <label
            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="networking-assement"
          >
            Networking assesment
          </label>
        </div>
        <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
          <input
            onChange={(e) =>
              changeFormData("security_assessment", Number(e.target.value))
            }
            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="radio"
            name="inlineRadioOptions"
            id="api-assesment"
            value={3}
            checked={security_assessment === 3}
          />
          <label
            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="api-assesment"
          >
            Api assesment
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="cursor-pointer cta-button-lg md:w-80 mt-8"
        >
          Schedule a time that fits you.
        </button>
      </div>
    </form>
  );
}

export default CallPage;
