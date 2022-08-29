import {useState} from "react";
import {SizeType} from "../../types/size.type";
import {useEvent} from "./event.hook";

export const useWindowSize = () => {
    const currentSize = () => ({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const [windowSize, setWindowSize] = useState<SizeType>(currentSize())

    useEvent('resize', () => {
        setWindowSize(currentSize())
    })
    return windowSize
}