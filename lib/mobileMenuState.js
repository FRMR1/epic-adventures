import { useContext, useState, createContext } from "react"

// const { createContext } = require("react/cjs/react.development")

const LocalStateContext = createContext()
const LocalStateProvider = LocalStateContext.Provider

const MobileMenuStateProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <LocalStateProvider value={{ isOpen, setIsOpen }}>
            {children}
        </LocalStateProvider>
    )
}

const useMobileMenuState = () => {
    const all = useContext(LocalStateContext)
    return all
}

export { MobileMenuStateProvider, useMobileMenuState }
