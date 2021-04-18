import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Header = () => {
    const { header } = useContext(GlobalContext);
    return (
        <div className='header-container'>
            <h1>{header}</h1>
        </div>
    )
}

export default Header

