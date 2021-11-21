import { useState } from "react";
import * as S from "./Style";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as BsIcons from "react-icons/bs";

const TopBar = () => {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const handleShowSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  };
  return (
    <S.TopBarWrapper>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Link to="#">
          <FaIcons.FaBars onClick={handleShowSideBar} />
        </Link>
        {sideBarVisible && (
          <S.SideBarWrapper>
            {SideBarData.map((item, index) => {
              return (
                <S.SideBarMenuWrapper key={index}>
                  <S.SideBarMenuLink to={item.path}>
                    {item.icon}
                    <S.SideBarMenuText>{item.title}</S.SideBarMenuText>
                  </S.SideBarMenuLink>
                </S.SideBarMenuWrapper>
              );
            })}
          </S.SideBarWrapper>
        )}
      </IconContext.Provider>
    </S.TopBarWrapper>
  );
};

export default TopBar;

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <BsIcons.BsFillHouseDoorFill />,
  },
  {
    title: "About",
    path: "/About",
    icon: <BsIcons.BsFillInfoCircleFill />,
  },
  {
    title: "Contact Us",
    path: "/Contact",
    icon: <BsIcons.BsEnvelopeFill />,
  },
];
