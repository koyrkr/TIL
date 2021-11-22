import { useState } from "react";
import * as S from "./Style";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as BsIcons from "react-icons/bs";

const TopBar = () => {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  //TODO(Gina) : 디자인 style 좀 더 손보기
  //TODO(Gina) : 페이지 구성 생각하기
  const handleShowSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  };
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <S.TopBarWrapper>
        <Link to="#">
          <FaIcons.FaBars onClick={handleShowSideBar} />
        </Link>
      </S.TopBarWrapper>
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
