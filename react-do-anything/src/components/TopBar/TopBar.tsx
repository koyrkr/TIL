import { useState } from "react";
import { IconContext } from "react-icons";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import * as S from "./Style";
import colors from "@constants/colors";

const TopBar = () => {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  //TODO(Gina) : MySQL, API Structure 고민
  //TODO(Gina) : 디비 구조도 고민해볼 것

  const handleShowSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  };
  return (
    <IconContext.Provider value={{ color: colors.white }}>
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

// TODO(Gina): 영화, 애니메이션 소감
// TODO(Gina): 현재 하는 공부 내용 정리

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <BsIcons.BsFillHouseDoorFill />,
  },
  {
    title: "About",
    path: "/about",
    icon: <BsIcons.BsFillInfoCircleFill />,
  },
  {
    title: "Movie Review",
    path: "/movie-review",
    icon: <BsIcons.BsFilm />,
  },
  {
    title: "Study",
    path: "/study",
    icon: <BsIcons.BsFillBookFill />,
  },
  {
    title: "Contact Me",
    path: "/contact-me",
    icon: <BsIcons.BsEnvelopeFill />,
  },
];
