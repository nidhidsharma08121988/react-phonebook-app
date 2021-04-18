import { Link } from "react-router-dom"
const linkStyle = {
    textDecoration: 'none',
    color: 'initial !important',
    cursor: 'pointer'
}
const Footer = () => {
    return (
        <div className='footer'>
            <Link style={linkStyle} to='/AddContact'><button className='btn add-btn'>+</button></Link>
        </div >
    )
}
export default Footer
