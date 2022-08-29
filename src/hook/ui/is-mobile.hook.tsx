import {useWindowSize} from "./window-size.hook";
import {useState} from "react";
import {useEvent} from "./event.hook";
import {mediaQueries, screenSizes} from "../../enums/screen-sizes.enum";
import {useMediaQuery} from "react-responsive";


export const useIsMobile = () => {
    const { width } = useWindowSize()
    const [printMode, setPrintMode] = useState(false)
    const isLandscape = useMediaQuery({query: mediaQueries.LANDSCAPE})

    useEvent('beforeprint', () => setPrintMode(true))
    useEvent('afterprint', () => setPrintMode(false))

    return !printMode && (width < screenSizes.TABLET || isLandscape)
}