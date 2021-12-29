import React from "react";

//const NavBar = (props) => {
const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {/* {props.totalCounters} */}
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
//     return (
//       <nav class="navbar navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand">
//             Navbar{" "}
//             <span className="badge badge-pill badge-secondary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

export default NavBar;
