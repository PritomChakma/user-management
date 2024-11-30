import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../../Firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [looding, setLooding] = useState(true);

  const createUser = (email, password) => {
    setLooding(true);
    return createUserWithEmailAndPassword(auth , email, password);
  };

  const userInfo = {
    user,
    looding,
    createUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
