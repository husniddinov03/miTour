import { useState } from "react";
import { createContext, useContext } from "react";

export const InfoContext = createContext()
export const useInfoContext = () => useContext(InfoContext)

export const InfoProvider = ({ children }) => {

    const helpCss = [
        { textDecoration: "none" },
        { display: "flex", alignItems: "center", justifyContent: "space-between", } //tartiblash
    ]

    const value = {
        helpCss
    }

    return (
        <InfoContext.Provider value={value}>
            {children}
        </InfoContext.Provider>
    )
}
