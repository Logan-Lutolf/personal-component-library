import { createContext, HtmlHTMLAttributes, useContext, useState } from "react"
import { twMerge } from "tailwind-merge"


interface ImageProps extends React.HTMLAttributes<HTMLImageElement>{
    children?: React.ReactNode,
    className?: string,
    imageUrl: string,
}


const ImageContext = createContext<boolean | null>(null)

const Image = ({
    children,
    className,
    imageUrl,
    ...props
}: ImageProps) => {
    const [hover, setHover] = useState(false)

    const zoomStyles = hover ? "scale-115" : ""

    return(
        <ImageContext.Provider value={hover}>
            <div 
                className={twMerge("relative h-full w-full overflow-hidden cursor-pointer", className)}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {children}
                <img
                    className={twMerge("w-full h-full hover:opacity-75 transition duration-200 hover:scale-205 object-cover", zoomStyles)}
                    src={imageUrl}
                    {...props}
                />
            </div>
        </ImageContext.Provider>
    )
}


interface ImageChildrenProps {
    children?: React.ReactNode,
    className?: string
}



const ImageInfo = ({children, className}: ImageChildrenProps) => {
    const ctx = useContext(ImageContext)
    const hoverStyles = ctx ? "hover:opacity-100 transition duration-200" : ""
    
    return (
        <div 
            className={twMerge("z-10 absolute inset-0 opacity-0 bg-(--background-dim)/50", className, hoverStyles)}
        >
            {children}
        </div>
    )
}


Image.Info = ImageInfo

export default Image