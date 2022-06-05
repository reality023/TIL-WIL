import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import Header from "../components/Header";
import { getFBPost, removeFBPost } from "../redux/firebase/fbPost";

const Post = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const data = useSelector((state) => state.post.list);
  const account = useSelector((state) => state.account);
  const [post, setPost] = useState({});

  useEffect(() => {
    dispatch(getFBPost(params.id));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      try {
        setPost(data[0]);
      } catch (e) {
        navigate("/");
      }
    }

  }, [data]);

  return (
    <Container>
      <Header />
      <Content card={post.type}>
        <Wrap card={post.type}>
          <MainContent card={post.type}>
            <Subject>
              <h2>{post.subject}</h2>
            </Subject>
            <Line>
              <em>{post.authorName}</em>
              <p>{post.date}</p>
            </Line>
            <Description>
              <p>{post.description}</p>
            </Description>
          </MainContent>
          <Image card={post.type}>
            <img src={post.image} alt="" />
          </Image>
        </Wrap>
        {post.authorId === account.docId && (
          <Wrap>
            <Modify onClick={
              () => {
                navigate(`/modify/${params.id}`);
              }
            }>수정하기</Modify>
            <Remove onClick={
              () => {
                dispatch(removeFBPost(post.docId));
                navigate(`/`);
              }
            }>삭제하기</Remove>
          </Wrap>
        )}
      </Content>
    </Container>
  );
}
// Card Type 0 : 이미지 하단
// Card Type 1 : 이미지 좌측
// Card Type 2 : 이미지 우측

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;

  ${props => props.card === 0 ? css`
    img {
      width: 100%;
      height: 500px;
    }
  `: css`
    img {
      width: 50%;
    }
  `}
`;

const MainContent = styled.div`
  ${props => props.card === 1 && css`
    order: 1;
  `}

  ${props => (props.card === 1 || props.card === 2) && css`
    width: 50%;
  `}
`;

const Wrap = styled.div`
  width: 1400px;
  border: 1px solid #ddd;
  box-shadow: 0 0 6px 0 #ddd;
  display: flex;
  ${props => props.card === 0 ? css`
    flex-direction: column;
  ` : css`
    flex-direction: row;
  `}

  & + & {
    margin-top: 40px;
    margin-bottom: 100px;
  }
`;

const Subject = styled.div`
  width: 100%;

  h2 {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 36px;
    padding: 40px 40px 20px;
    border: none;
    display: flex;
    align-items: center;
  }
`;

const Line = styled.div`
  padding: 0 40px;
  display: flex;

  em {
    color: #B84141;
  }

  p {
    margin-left: 20px;
  }
`;

const Description = styled.div`
  width: 100%;
  p {
    padding: 40px 40px;
    width: 100%;
    font-size: 24px;
    resize: none;
    border: none;
    box-sizing: border-box;
  }
`;

const Image = styled.div`
  ${props => props.card !== 0 ? css`
    width: 50%;
    min-height: 800px;
  ` : css`
    width: 100%;
  `}
  background-color: #EEEEEE;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color .3s, color .3s;
  color: #888888;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #CCCCCC;
    opacity: 0;
    transition: opacity .3s;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;



const Modify = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  background-color: #caa946;
  color: #FFFFFF;
  margin: 20px;
  cursor: pointer;
  transition: background .3s, color .3s;

  &:hover {
    background-color: #DDDDDD;
    color: #444444;
  }
`;

const Remove = styled(Modify)`
  background-color: #c14769;
  margin-left: 0px;
`;

export default Post;