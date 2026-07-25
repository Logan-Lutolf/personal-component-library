import { useContext, createContext, useId } from "react"
import { twMerge } from "tailwind-merge"

interface InputContextValue {
    id: string,
    // disabled: boolean
}

const InputContext = createContext<InputContextValue | null>(null)

const useInputContext = () => {
    const context = useContext(InputContext)

    if (!context) 
        throw new Error("Input context error")
    return context
}


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {  // #TOD
    children?: React.ReactNode,
    className?: string
}

const Input = ({
    children,
    className,
    id,
    //disabled,
    ...props
} : InputProps) => {
    const inputId = id ?? useId()

    // TODO: Figure out how to change input box width in instances of Input rather than source code
    // TODO: Figure out border styling issue

    return(
        <InputContext.Provider value={{id: inputId}}>
            <div className={twMerge("text-(--foreground)", className)}>
                {children}
                <input 
                    id={inputId}
                    className="border border-(--disabled) rounded-md h-9 bg-(--background-dim) px-3 w-auto"
                    {...props}
                />
            </div>
        </InputContext.Provider>
    )
}




// should i twMerge with classnames in these? and do I need props?

interface InputChildrenProps {
    children?: React.ReactNode,
    className?: string
}

function InputLabel ({children, className}: InputChildrenProps) {
    const { id } = useInputContext()

    // TODO: change label to Label later?
    return (
        <div className={twMerge(className, "text-xl")}>
            <label htmlFor={id}>
                {children}
            </label> 
        </div>
    )
}

function InputDescription ({children, className}: InputChildrenProps) {
    const { id } = useInputContext()
    
    return (
        <div id={id}  className={twMerge("text-xs font-extralight", className)}>
            {children}
        </div>
    )
}


Input.Label = InputLabel
Input.Description = InputDescription

export default Input