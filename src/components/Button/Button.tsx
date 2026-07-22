import cn from 'clsx'


/* Define options for component */
const options = {
    variants: ["primary", "secondary", "destructive", "ghost"],  
    sizes: ["sm", "lg"]  // extend to more sizes later
}


/* Typecheck */
type ButtonColors = typeof options.variants[number];
type ButtonSizes = typeof options.sizes[number];


/* Define styles for options */
const colorStyles: Record<ButtonColors, string> = {
    primary: "bg-(--primary) text-white",
    secondary: "bg-(--secondary) text-white",
    destructive: "bg-(--destructive) text-white",
    ghost: "border border-(--primary) hover:bg-(--primary)/13 text-(--primary) active:bg-(--primary)/40"
}

const sizeStyles: Record<ButtonSizes, string> = {
    sm: "px-4 py-3 text-sm rounded-2xl",
    lg: "px-6 py-3 text-lg rounded-2xl"
}


/* Define props for component */
interface ButtonProps {
    label?: string,
    color?: ButtonColors,
    size?: ButtonSizes,
    className?: string
    onClick?: () => void
}


/* Define component and export it */
const Button = ({
    label = "Click me...",
    color = "primary",
    size = "sm",
    className,
    onClick
}: ButtonProps) => {
    return (
        <button
            className={cn(
                sizeStyles[size],
                className,
                "cursor-pointer transition duration-200 active:opacity-65 hover:opacity-85",  // Maybe hover/actions later
                colorStyles[color]
            )}
        >
            {label}
        </button>
    )
}

export default Button