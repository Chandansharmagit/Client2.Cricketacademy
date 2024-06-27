import React, { createContext, useContext, useEffect, useState } from "react";


const SocketContext = createContext(); // Create the context

export const useSocket = () => useContext(SocketContext); // Hook to access socket

export const SocketProvider = ({ children }) => {
  

  return (
    <SocketContext.Provider >
      {children}
    </SocketContext.Provider>
  );
};
