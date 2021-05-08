import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

//   useEffect(() => {
//       fetch("/user")
//           .then(res => res.json())
//           .then(res => setUser(res))
//           .catch(err => {
//               console.log(err);
//           });
//   }, []);

  return (
      <UserContext.Provider value={[user,setUser]}>
          {children}
      </UserContext.Provider>
  );
};

export {UserContext, UserContextProvider};

