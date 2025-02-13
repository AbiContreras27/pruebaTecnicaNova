import { createContext, useState, useEffect, ReactNode } from "react";
import {User, UserContextType } from "../interfaces/interface";


export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({children}: {children: ReactNode}) => {
  const [userData, setUserData] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  

  useEffect(() => {

    fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
      setUserData(data)
      setFilteredUsers(data)
    })
    .catch((error) => console.error("error al obtener data de usuarios:", error))
  }, []);


  const SearchUsers = (term: string) => {
    if (!term.trim()) {
      setFilteredUsers(userData)
      return
    }
    setFilteredUsers(
      userData.filter(
        (user) => user.fullname.toLowerCase().includes(term.toLowerCase()) ||
        user.email.toLowerCase().includes(term.toLowerCase())
      )
    )
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
