// import { Link } from "react-router-dom";
import * as S from "./Style";
import TopBar from "@components/TopBar/TopBar";

function Home() {
  return (
    <S.Wrapper>
      <TopBar />
      {/* <div>
        <Link to="/about">ABOUT</Link>
      </div> */}
    </S.Wrapper>
  );
}

export default Home;
