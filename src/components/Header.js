import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const Header = () => {
    const { header } = useContext(GlobalContext);
    return (
        <div className='header-container'>
            <h2>{header}</h2>
        </div>
    )
}

export default Header

