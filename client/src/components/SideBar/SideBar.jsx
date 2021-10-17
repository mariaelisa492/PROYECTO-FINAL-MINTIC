import { Link } from "react-router-dom";
import "./sideBar.scss";
import logoUser from '../../assets/img/icon-user.png';
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { MdOutlineAddBusiness, MdProductionQuantityLimits } from 'react-icons/md'
import { BsDoorClosed } from 'react-icons/bs'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <img src={logoUser} width="100" height="100" alt="user" />
                <h3>Admin</h3>
                <ul>
                    <li><Link to={'/sales'}><i><MdProductionQuantityLimits /></i> Sales</Link></li>
                    <li><Link to={'/products'}><i><MdOutlineAddBusiness /></i> Products</Link></li>
                    <li><Link to={'/sellers'}><i><AiOutlineUsergroupAdd /></i> Sellers</Link></li>
                </ul>
            </div>
            <div>
                <h4><Link to={'/'}><i><BsDoorClosed/></i> Log out</Link></h4>
            </div>
        </div>
    )
}
export default Sidebar;