import React, { Children, createContext, useEffect, useState } from 'react'

export const UserDetails = createContext();

export const UserDetailsProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState(null);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        console.log("working");
        console.log(userDetails);
        if (login){
            console.log("hii");
            
            localStorage.setItem("UserDetails", JSON.stringify(userDetails));
        }

    }, [login])
    useEffect(() => {
        console.log("testing");
        const stored = localStorage.getItem("UserDetails");
      
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            console.log("Loaded from localStorage:", parsed);
            
          } catch (err) {
            console.error("Error parsing userDetails from localStorage:", err);
          }
        } else {
          console.log("No userDetails in localStorage.");
        }
      }, []);



    return (
        <UserDetails.Provider value={{ setLogin, userDetails, setUserDetails }}>
            {children}
        </UserDetails.Provider>
    );
}