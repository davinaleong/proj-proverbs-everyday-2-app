import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleNotch
} from "@fortawesome/free-solid-svg-icons"

const LoaderIconComponent = () => {
    return (
        <div className="loader loader-icon">
            <FontAwesomeIcon icon={faCircleNotch} className="fa-spin"/>
        </div>
    )
}

export default LoaderIconComponent