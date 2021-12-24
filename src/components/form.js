import React, { useState } from "react";

const Myform = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  let name, value;
  const postUser = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, message } = user;

    if (firstName && lastName && phone && email && message) {
      const res = fetch(
        "https://form-firbase-default-rtdb.firebaseio.com/from-firebase.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,

            message,
          }),
        }
      );

      if (res) {
        setUser({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",

          message: "",
        });
        alert("your message is send successful");
      } else {
        alert("message sent");
      }
    } else {
      alert("plz all input fields");
    }
  };

  return (
    <>
      <div className="wrapper">
        <form method="POST">
          <h1>TYPE YOUR MESSAGE</h1>
          <div className="dbl-field">
            <div className="field">
              <input
                type="text"
                name="firstName"
                placeholder="Enter your  first name"
                value={user.firstName}
                onChange={postUser}
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={user.lastName}
                onChange={postUser}
              />
            </div>
          </div>
          <div className="dbl-field">
            <div className="field">
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={postUser}
              />
            </div>
            <div className="field">
              <input
                type="number"
                name="phone"
                placeholder="Enter your Phone number"
                value={user.phone}
                onChange={postUser}
              />
            </div>
          </div>
          <div className="message">
            <textarea
              placeholder="Write your message"
              name="message"
              value={user.message}
              onChange={postUser}
            ></textarea>
          </div>
          <div className="button-area">
            <button type="submit" onClick={submitData}>
              Send Message
            </button>
            <span></span>
          </div>
        </form>
      </div>
    </>
  );
};
export default Myform;
