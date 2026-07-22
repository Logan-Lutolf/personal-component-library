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
    primary: "",
    secondary: "",
    destructive: "",
    ghost: ""
}

const sizeStyles: Record<ButtonSizes, string> = {
    sm: "",
    lg: ""
}


/* Define props for component */
interface ButtonProps {
    label: string,
    color: ButtonColors,
    size: ButtonSizes,
    className: string
}


/* Define component and export it */
const Button = ({
    label,
    color,
    size,
    className
}: ButtonProps) => {
    return (
        <button
            className={cn(
                colorStyles[color],
                sizeStyles[size],
                className,
                ""
            )}
        >
            {label}
        </button>
    )
}

export default Button