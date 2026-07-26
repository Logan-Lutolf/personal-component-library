import { createContext, HtmlHTMLAttributes, useContext, useState } from "react"
import { twMerge } from "tailwind-merge"


interface ImageProps extends React.HTMLAttributes<HTMLImageElement>{
    children?: React.ReactNode,
    className?: string,
    imageUrl: string,
}


const Image = ({
    children,
    className,
    imageUrl,
    ...props
}: ImageProps) => {
    const hoverStyles = useContext(ImageCoverContext) ? "zoom-50" : ""
    
    return(
        <div className={twMerge("", className, hoverStyles)}>
            {children}
            <img
                className="w-full h-full"
                src={imageUrl}
                {...props}
            />
        </div>
    )
}


interface ImageChildrenProps {
    children?: React.ReactNode,
    className?: string
}


const ImageCoverContext = createContext<boolean | null>(false)
const ImageCover = ({children, className}: ImageChildrenProps) => {
    var hoverContext = useContext(ImageCoverContext)
    
    return (
        <div 
            onMouseEnter={() => {hoverContext = true}}
            onMouseLeave={() => {hoverContext = false}}
            className={twMerge("top-0 left-0 right-0 bottom-0 pacity-0 hover:opacity-75 transition duration-200 absolute flex flex-col items-center justify-center bg-amber-200", className)}
        >
            {children}
        </div>
    )
}


const ImageInfo = ({children, className}: ImageChildrenProps) => {
    return (
        <div className={twMerge("", className)}>
            {children}
        </div>
    )
}


Image.Cover = ImageCover
Image.Info = ImageInfo

export default Image