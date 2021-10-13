import { Link } from "react-router-dom";
import "./sideBar.scss";
import WebFont from 'webfontloader';
const Sidebar= () =>{
     return(
      <div className="sidebar">
            <ul>
                  <li><Link to={'/Home'}><img href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>Home</Link></li>
                  <li><Link to={'/Ventas'}>Ventas</Link></li>
                  <li><Link to={'/Products'}>Productos</Link></li>
                  <li><Link to={'/Vendedores'}>Vendedores</Link></li>
              </ul>
     </div>
          )

}
export default Sidebar;
