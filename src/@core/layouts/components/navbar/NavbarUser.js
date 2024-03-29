import React, { useState, useEffect } from "react";
// ** Dropdowns Imports
import { Fragment } from "react";

import UserDropdown from "./UserDropdown";

// ** Third Party Components
import { Sun, Moon, Menu } from "react-feather";
import {
  NavItem,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
} from "reactstrap";

import {
  PhoneCall,
  Bell,
  Monitor,
  EyeOff,
  Maximize,
  Minimize,
} from "react-feather";

const NavbarUser = (props) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showOnlineUsers, setShowOnlineUsers] = useState(false);
  const [showOfflineUsers, setShowOfflineUsers] = useState(false);
  const [showCallingList, setShowCallingList] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // ** Props
  const { skin, setSkin, setMenuVisibility } = props;

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === "dark") {
      return <Sun className="ficon" onClick={() => setSkin("light")} />;
    } else {
      return <Moon className="ficon" onClick={() => setSkin("dark")} />;
    }
  };

  const handleFullscreenChange = () => {
    setIsFullscreen(document.fullscreenElement !== null);
  };

  const handleFullscreenToggle = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [isFullscreen]);

  return (
    <Fragment>
      <ul className="navbar-nav d-xl-none d-flex align-items-center">
        <NavItem className="mobile-menu mr-auto">
          <NavLink
            className="nav-menu-main menu-toggle hidden-xs is-active"
            onClick={() => setMenuVisibility(true)}
          >
            <Menu className="ficon" />
          </NavLink>
        </NavItem>
      </ul>
      <div className="bookmark-wrapper d-flex align-items-center">
        <NavItem className="d-none d-lg-block">
          <NavLink className="nav-link-style">
            <ThemeToggler />
          </NavLink>
        </NavItem>
      </div>
      <div className="ml-auto d-flex">
        <div className="d-flex align-items-center">
          <Button.Ripple
            color="flat-secondary"
            style={{ padding: "5px", margin: "0px 2px" }}
            onClick={() => setShowCallingList((prev) => !prev)}
          >
            <PhoneCall size={20} />
          </Button.Ripple>

          <Button.Ripple
            color="flat-secondary"
            className="overflow-visible position-relative"
            style={{ padding: "5px", margin: "0px 2px" }}
            onClick={() => setShowOnlineUsers((prev) => !prev)}
          >
            <Monitor size={20} className="ficon"/>
            {1 > 0 ? (
              <Badge
                pill
                color="white"
                className="badge-up text-danger"
                style={{ top: "-6px", right: "-4px" }}
              >
                10
              </Badge>
            ) : null}
          </Button.Ripple>

          <Button.Ripple
            color="flat-secondary"
            className="overflow-visible position-relative"
            style={{ padding: "5px", margin: "0px 2px" }}
            onClick={() => setShowOfflineUsers((prev) => !prev)}
          >
            <EyeOff size={20} className="ficon"/>
            {1 > 0 ? (
              <Badge
                pill
                color="white"
                className="badge-up text-danger"
                style={{ top: "-6px", right: "-4px" }}
              >
                2
              </Badge>
            ) : null}
          </Button.Ripple>

          <Button.Ripple
            color="flat-secondary"
            style={{ padding: "5px", margin: "0px 2px" }}
            onClick={handleFullscreenToggle}
          >
            {isFullscreen ? <Minimize size="20" /> : <Maximize size="20" />}
          </Button.Ripple>

          <Button.Ripple
            color="flat-secondary"
            className="overflow-visible  position-relative"
            style={{ padding: "5px", margin: "0px 2px" }}
            onClick={() => setShowNotifications((prev) => !prev)}
          >
            <Bell size={20} className="ficon" />
            {1 > 0 ? (
              <Badge
                pill
                color="danger"
                className="badge-up"
                style={{ top: "-6px", right: "-4px" }}
              >
                2
              </Badge>
            ) : null}
          </Button.Ripple>

          <Modal
            isOpen={showCallingList}
            toggle={() => setShowCallingList((prev) => !prev)}
            className={`modal-xl`}
          >
            <ModalHeader toggle={() => setShowCallingList((prev) => !prev)}>
              Extra Large Modal
              {/* {item.title} */}
            </ModalHeader>
            <ModalBody>calling list</ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => setShowCallingList((prev) => !prev)}
                outline
              >
                Accept
              </Button>
            </ModalFooter>
          </Modal>

          <Modal
            isOpen={showOnlineUsers}
            toggle={() => setShowOnlineUsers((prev) => !prev)}
            className={`modal-xl`}
          >
            <ModalHeader toggle={() => setShowOnlineUsers((prev) => !prev)}>
              Extra Large Modal
              {/* {item.title} */}
            </ModalHeader>
            <ModalBody>online users</ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => setShowOnlineUsers((prev) => !prev)}
                outline
              >
                Accept
              </Button>
            </ModalFooter>
          </Modal>

          <Modal
            isOpen={showOfflineUsers}
            toggle={() => setShowOfflineUsers((prev) => !prev)}
            className={`modal-xl`}
          >
            <ModalHeader toggle={() => setShowOfflineUsers((prev) => !prev)}>
              Extra Large Modal
              {/* {item.title} */}
            </ModalHeader>
            <ModalBody>offline users</ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => setShowOfflineUsers((prev) => !prev)}
                outline
              >
                Accept
              </Button>
            </ModalFooter>
          </Modal>

          <Modal
            isOpen={showNotifications}
            toggle={() => setShowNotifications((prev) => !prev)}
            className={`modal-sm`}
          >
            <ModalHeader toggle={() => setShowNotifications((prev) => !prev)}>
              Extra Large Model
              {/* {item.title} */}
            </ModalHeader>
            <ModalBody>Notifications</ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => setShowNotifications((prev) => !prev)}
                outline
              >
                Accept
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <ul className="nav navbar-nav align-items-center">
          <UserDropdown />
        </ul>
      </div>
    </Fragment>
  );
};
export default NavbarUser;
