import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import PostCard from '../components/PostCard';
import PostAdd from '../components/PostAdd';
import Header from '../components/Header';
import { useEffect } from 'react';
import { getFBPostList } from '../redux/firebase/fbPost';

const Main = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.account.isLogin);
  const post = useSelector((state) => state.post.list);

  useEffect(() => {
    dispatch(getFBPostList());
  }, []);

  return (
    <Container>
      {isLogin && <PostAdd />}
      <Header />
      <Content>
        <ul>
          {
            post.map((data, index) => {
              return (
                <PostCard key={index} data={data} />
              )
            })
          }
        </ul>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  padding: 80px 0;
  ul {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export default Main;