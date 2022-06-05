import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PostAdd = () => {
  return (
    <Container>
      <Link to="/add">
        <FontAwesomeIcon icon={faPlus} />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;

  a {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    border-radius: 50%;
    background-color: #397cac;
    color: #FFFFFF;
    margin: 40px;
    transition: color .3s, background-color .3s;

    &:hover {
      color: #BBBBBB;
      background-color: #dddddd;
    }
  }
`;

export default PostAdd;