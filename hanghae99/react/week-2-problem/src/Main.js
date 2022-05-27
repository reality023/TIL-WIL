import styled, { css } from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';

import Header from './components/Header';
import { listWord, removeWord } from './redux/modules/firebase';

function Main () {
    const history = useHistory();
    const dispatch = useDispatch();

    const words = useSelector((state) => state.word.list); // 리덕스 리스트 가져오기
    const [list, setList] = useState(words);

    const [active, setActive] = useState([]);

    const search = useRef();

    useEffect(() => {
        setActive(Array.from({length: words.length}).fill(false)); // 빈배열을 리덕스 리스트만큼 만들어 false 값을 준다
        dispatch(listWord()); // Word 데이터 로드
    }, []);

    useEffect(() => {
        setList(words);
    }, [words]);

    return (
        <Container>
            <Navi>
                <Link to="/add">ADD</Link>
            </Navi>
            <Header />
            <Box>
                <Content>
                    <Search onSubmit={
                            (e) => { // 검색
                                e.preventDefault(); // submit 이벤트 막기
                                setList(words.filter((word) => {
                                    if (word.eng.includes(search.current.value)) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }));
                            }
                        }>
                        <SearchInput>
                            <input type="text" ref={search} placeholder="KEYWORD" />
                        </SearchInput>
                        <SearchButton>
                            <button>SEARCH</button>
                        </SearchButton>
                    </Search>
                    <CardList>
                        {
                        list.map((data, index) => {
                            return (
                                <Card 
                                    key={index} 
                                    isActive={active[index]} // active 상태에 따라 true, false 적용
                                    onClick={() => {
                                        if (!active[index]) { // Card의 active 상태가 false 인 경우에만 실행
                                            setActive((current) => {
                                                const arr = [...current];
                                                arr[index] = true; // active 상태를 true로 변경
                                                return arr;
                                            });
                                        }
                                    }}
                                >
                                    <em>{data.eng}</em>
                                    <p>{data.kor}</p>
                                    <Example>
                                        <em>{data.examEng}</em>
                                        <p>{data.examKor}</p>
                                    </Example>
                                    <CardMenu>
                                        <CardBack
                                            onClick={
                                                () => {
                                                    setActive((current) => {
                                                        const arr = [...current];
                                                        arr[index] = false;
                                                        return arr;
                                                    });
                                                }
                                            }
                                        >BACK</CardBack>
                                        <CardModify
                                            onClick={
                                                () => {
                                                    history.push(`/modify/${data.id}`);
                                                }
                                            }
                                        >MODIFY</CardModify>
                                        <CardRemove
                                            onClick={
                                                () => {
                                                    setActive((current) => {
                                                            const arr = [...current];
                                                            return arr.fill(false);
                                                        }
                                                    );
                                                    dispatch(removeWord(data.id));
                                                }
                                            }
                                        >REMOVE</CardRemove>
                                    </CardMenu>
                                </Card>
                            )
                        })
                        }
                    </CardList>
                </Content>
            </Box>
        </Container>
    );
}

const Navi = styled.nav`
    position: fixed;
    width: 100px;
    height: 100px;
    right: 50px;
    bottom: 50px;

    a {
        display: block;
        width: 100%;
        height: 100%;
        background-color: #0172C3;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        border-radius: 10px;
        font-size: 24px;
        box-shadow: 0px 0px 6px 0px #0172C3;
        transition: color .3s, background .3s;
    }

    a:hover {
        color: #444444;
        background-color: #c0dcf0;
    }
`;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Box = styled.div`
    width: 1200px;
`;

const Content = styled.div``;

const SearchInput = styled.div``;
const SearchButton = styled.div``;
const Search = styled.form`
    width: 100%;
    display: flex;

    ${SearchInput} {
        width: 65%;
        height: 80px;
        border-radius: 10px;
        box-shadow: 0px 4px 6px 0px #cccccc;
        border: 1px solid #eeeeee;
        overflow: hidden;

        input {
            width: 100%;
            height: 100%;
            border: none;
            padding: 0 25px;
            font-size: 24px;
            color: #444444;
        }

        input:focus {
            outline: none;
        }
    }

    ${SearchButton} {
        margin-left: 5%;
        width: 30%;
        height: 80px;
        background-color: #444444;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0px 4px 6px 0px #cccccc;
        border: 1px solid #eeeeee;

        button {
            background-color: transparent;
            border: none;
            width: 100%;
            height: 100%;
            color: #ffffff;
            font-size: 24px;
            cursor: pointer;
            transition: color .3s, background .3s;
        }

        button:hover {
            background-color: #ddd;
            color: #444444;
        }
    }
`;


const CardBack = styled.div``;
const CardModify = styled.div``;
const CardRemove = styled.div``;
const Example = styled.div``;
const Card = styled.div`
    font-family: ${(props) => props.theme.fontFamily.suncheon};
    position: relative;
    width: 30%;
    height: 220px;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    color: #444444;
    cursor: pointer;
    overflow: hidden;
    ${props => !props.isActive && css`
        box-shadow: 0px 4px 6px 0px #cccccc;
    `}

    em {
        font-size: 36px;
    }

    p {
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #666666;
    }

    ${Example} {
        em {
            font-size: 14px;
            color: #407fb6;
            line-height: 1;
        }
        
        p {
            margin-top: 10px;
            font-size: 14px;
            color: #407fb6;
            line-height: 1.5;
        }
    }

    &:hover {
        background-color: #eeeeee;
    }


    ${CardBack} {
        width: 50%;
        height: 100%;
        background-color: #444;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: left .2s;
        top: 0;
        left: ${props => props.isActive ? "0" : "-50%"};
        
    }

    ${CardModify} {
        width: 50%;
        height: 50%;
        background-color: #E2BC5A;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: top .2s;
        top: ${props => props.isActive ? "0" : "-50%"};
        right: 0;
    }

    ${CardRemove} {
        width: 50%;
        height: 50%;
        background-color: #D87878;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: bottom .2s;
        bottom: ${props => props.isActive ? "0" : "-50%"};
        right: 0;
    }
`;


const CardMenu = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    div {
        position: absolute;
    }
`;

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    width: 100%;

    ${Card} + ${Card} {
        margin-left: 5%;
    }

    ${Card}:nth-of-type(3n + 1) {
        margin-left: 0;
    }
`;

export default Main;
