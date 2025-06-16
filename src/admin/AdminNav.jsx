import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../custom-hooks/useAuth";
import "../styles/adminNav.css";
import { NavLink } from "react-router-dom";

const admin_routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
  },

  {
    path: "/dashboard/all-products",
    name: "All-Products",
  },

  {
    path: "/dashboard/orders",
    name: "Orders",
  },
  {
    path: "/dashboard/users",
    name: "Users",
  },
];

const AdminNav = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <header className="admin_header">
        <div className="admin_nav-top">
          <Container>
            <Row>
              <div className="admin_nav-wrapper-top">
                <div className="logo">
                  <h2>Multimart</h2>
                </div>
                <div className="search_box">
                  <input type="text" placeholder="Search..." />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
                <div className="admin_nav-top-right">
                  <span>
                    <i class="ri-notification-2-line"></i>
                  </span>
                  <span>
                    <i class="ri-settings-3-line"></i>
                  </span>
                  <img src={currentUser?.photoURL} alt="" />
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </header>
      <section className="admin_menu p-0">
        <Container>
          <Row>
            <div className="admin_navigation">
              <ul className="admin_menu-list">
                {admin_routes.map((item, index) => (
                  <li className="admin_menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_admin-menu" : ""
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
