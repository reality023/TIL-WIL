import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const PostCard = ({ data }) => { // type-0 : 이미지 하단, type-1 : 이미지 좌측, type-2 : 이미지 우측
  return (
    <Container>
      <Card to={`/post/${data.id}`} card={data.type}>
        <CardContent card={data.type}>
          <Subject>{data.subject}</Subject>
          <Info>
            <Author>{data.authorName}</Author>
            <Time>{data.date}</Time>
          </Info>
          <Desc>{data.description}</Desc>
        </CardContent>
        <img src={data.image} alt={data.subject} card={data.type} />{/* alt에는 제목 */}
      </Card>
    </Container>
  );
}
// Card Type 0 : 이미지 하단
// Card Type 1 : 이미지 좌측
// Card Type 2 : 이미지 우측

// POST 박스 내용
const Container = styled.li`
  width: 100%;

  & + & {
    margin-top: 50px;
  }

  a {
    position: relative;
    display: flex;
    width: 100%;
    box-shadow: 0 0 6px 0 #ddd;
    border: 1px solid #EEEEEE;
    transition: box-shadow .3s, border .3s;
  }

  a:hover {
    box-shadow: 0 0 10px 0 #CCCCCC;
    border: 1px solid #CCCCCC;
  }

  a::before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background-color: #CCCCCC;
    transition: opacity .5s;
    opacity: 0;
  }

  a:hover::before {
    opacity: 0.30;
  }
`;

const Card = styled(Link)`
  display: flex;
  // Card Type이 0일 경우 세로 정렬, 아닐 경우 가로 정렬
  ${props => props.card === 0 ? css`
    flex-direction: column;
    img {
      width: 100%;
      height: 500px;
    }
  `: css`
    flex-direction: row; 
    img {
      width: 50%;
    }
  `}
  width: 100%;
  
  img {
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  // Card Type이  1일 경우 이미지를 상단으로 적용
  ${props => props.card === 1 && css`
    order: 1;
  `}

  ${props => (props.card === 1 || props.card === 2) && css`
    width: 50%;
  `}
`;

const Subject = styled.div`
  padding: 25px 20px 20px;
  font-size: 24px;
`;

const Desc = styled.div`
  padding: 20px;
  font-size: 20px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
const Author = styled.div`
  color: #B84141;
`;
const Time = styled.div`
  color: #C1C1C1;
`;
// POST 박스 내용


export default PostCard;