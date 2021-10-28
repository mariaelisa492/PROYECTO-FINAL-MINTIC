import { Link } from "react-router-dom";
import "./sideBar.scss";
import logoUser from '../../assets/img/icon-user.png';
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { MdOutlineAddBusiness, MdProductionQuantityLimits } from 'react-icons/md'
import { BsDoorClosed } from 'react-icons/bs'
import { Logout } from "../../pages/Logout";
import { Login } from "../../pages/Login";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
    const {user, isAuthenticated} = useAuth0()
    return (
        <div className="sidebar">
            <div> {isAuthenticated?
                     <img className="login" src={user.picture} width="100" height="100" alt="user" />:
                     <img src={logoUser} width="100" height="100" alt="user" />
                }
                
                <Link to={'/profile'}><h3>Profile</h3></Link>
                <ul>
                    <li><Link to={'/sales'}><i><MdProductionQuantityLimits /></i> Sales</Link></li>
                    <li><Link to={'/'}><i><MdOutlineAddBusiness /></i> Products</Link></li>
                    <li><Link to={'/sellers'}><i><AiOutlineUsergroupAdd /></i> Sellers</Link></li>
                </ul>
            </div>
            <div>
                {isAuthenticated ?
                    <h4><Link to={'/'}><i><BsDoorClosed/></i><Logout/></Link></h4>
                    : <h4><Link to={'/'}><i><BsDoorClosed/></i><Login/></Link></h4>
                }
            </div>
        </div>
    )
}
export default Sidebar;