import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

export default function UsingUseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    login: "",
    password: "",
  });


  const handleChangeData = (e) => {
    const {name, value} = e.target



    setUserData(prev => ({...prev, [name]: value}))

  }

  return (
    <div>
      <form className="p-3 flex flex-col gap-3">
        <label htmlFor="firstName">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name"
            value={userData.firstName}
            onChange={handleChangeData}
            className="border border-black rounded-xl p-3 w-full"
          />
        </label>
        <label htmlFor="lastName">
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name"
            value={userData.lastName}
            onChange={handleChangeData}
            className="border border-black rounded-xl p-3 w-full"
          />
        </label>
        <label htmlFor="login">
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Login"
            value={userData.login}
            onChange={handleChangeData}
            className="border border-black rounded-xl p-3 w-full"
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChangeData}
            className="border border-black rounded-xl p-3 w-full"
          />
        </label>

        <p>{JSON.stringify(userData, null, 2)}</p>

        <button>Create</button>
      </form>
    </div>
  );
}
