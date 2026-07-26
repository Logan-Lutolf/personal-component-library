import { createContext, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavMenuProps {
    children?: React.ReactNode,
    className?: string
}

const NavMenu = ({children, className}: NavMenuProps) => {
    return (
        <div className={twMerge("", className)}>{children}</div>
    )
}



interface NavChildrenProps {
    children?: React.ReactNode,
    className?: string
}

const NavMenuList = ({children, className}: NavChildrenProps) => {
    return (
        <div className={twMerge("flex flex-row items-start justify-evenly border border-b-white border-x-0 border-t-0", className)}>
            {children}
        </div>
    )
}


const shownContext = createContext<boolean | null>(null)
const NavMenuItem = ({children, className}: NavChildrenProps) => {
    const [open, setOpen] = useState(false)
    return (
        <shownContext.Provider value={open}>
            <div className={twMerge("text-white cursor-pointer relative", className)} onClick={() => setOpen(!open)} >
                {children}
            </div>
        </shownContext.Provider>
    )
}


const NavMenuContent = ({children, className}: NavChildrenProps) => {
    const context = useContext(shownContext)

    if (context == null)
        throw Error("No menu trigger context")
    if (!context) return null
    
    return (
        <div className={twMerge("w-56 absolute z-10 top-full left-0 mt-3 flex flex-col rounded-lg bg-(--background-dim)", className)}>
            {children}
        </div>
    )
}

const ListItem = ({children, className}: NavChildrenProps) => {
    return (
        <div className={twMerge("transition duration-450 px-4 py-2 bg-(--background-dim) hover:bg-(--background) w-full h-full", className)}>
            {children}
        </div>
    )
}

NavMenu.List = NavMenuList
NavMenu.Item = NavMenuItem
NavMenu.Content = NavMenuContent
NavMenu.ListItem = ListItem

export default NavMenu