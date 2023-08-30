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
    const apiUrl = "http://localhost:8080/api/create-business";
    const apiData = {
      fullName: name,
      email: email,
      phoneNumber: number,
      businessDescription: business_type,
      pentestType: security_assessment,
      applicationType: "0", // Replace with the actual value
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        alert(["Response:", data]);
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
        <label className=" flex items-center gap-x-2 col-span-2">
          <input
            className="w-4 h-4"
            type="radio"
            value={0}
            checked={security_assessment === 0}
            onChange={(e) =>
              changeFormData("security_assessment", Number(e.target.value))
            }
          />
          <span className="text-xl ">
            Web application testing <br />/ Mobile application testing
          </span>
        </label>
        <label className="flex items-center gap-x-2">
          <input
            className="w-4 h-4"
            type="radio"
            value={1}
            checked={security_assessment === 1}
            onChange={(e) =>
              changeFormData("security_assessment", Number(e.target.value))
            }
          />
          <span className="text-xl ">Networking assessment</span>
        </label>
        <label className="flex items-center gap-x-2">
          <input
            className="w-4 h-4"
            type="radio"
            value={2}
            checked={security_assessment === 2}
            onChange={(e) =>
              changeFormData("security_assessment", Number(e.target.value))
            }
          />
          <span className="text-xl  ">API assessment</span>
        </label>
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
