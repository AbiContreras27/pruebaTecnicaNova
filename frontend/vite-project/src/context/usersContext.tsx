import { createContext, useState, useEffect, ReactNode } from "react";
import {User, UserContextType } from "../interfaces/interface";


export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({children}: {children: ReactNode}) => {
  const [userData, setUserData] = useState<User[]>([]);
  const [searchText, setSearchText] = useState("");
  

  useEffect(() => {

    fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => setUserData(data))
    .catch((error) => console.error("error al obtener data de usuarios:", error))
  }, []);
  
  const filteredUsers = userData.filter((user) => 
    user.fullname.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase())
    )

  const SearchUsers = (searchText: string) => {
    setSearchText(searchText)
  }

  const value = {
    userData,
    filteredUsers,
    SearchUsers
  }

  return (
    <UserContext.Provider
      value={value}
      >
        {children}
      </UserContext.Provider>
  )
};
