import React, { useEffect, useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { email, password };

    console.log(userData);

      fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then(async (response) => {
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            window.alert("Successful");
          } else {
            throw new Error("Failed");
          }
        })
        .catch((error) => {
          console.log(error);
          window.alert("Failed");
        });
  };
  return (
    <section className="">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full"
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border rounded-lg px-3 py-2 w-full"
            type="password"
            placeholder="Enter a password"
            id="password"
            name="email"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  );
};

export default SignUp;
