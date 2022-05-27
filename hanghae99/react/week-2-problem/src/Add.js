import styled from 'styled-components';
import {Link, useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import Header from './components/Header';
import { addWord, modifyWord } from './redux/modules/firebase';
import { useEffect, useRef } from 'react';

function Add ({mod, data}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    // 편집할 단어의 값을 가져옴
    const word = useSelector((state) => state.word.list).filter((v) => v.id === params.id)[0];

    const engRef = useRef();
    const korRef = useRef();
    const examEngRef = useRef();
    const examKorRef = useRef();

    useEffect(() => {
        if (mod) {
            if (word) {
                engRef.current.value = word.eng;
                korRef.current.value = word.kor;
                examEngRef.current.value = word.examEng;
                examKorRef.current.value = word.examKor;
            } else {
                history.push("/");
            }
        }
    }, []);
    return (
        <Container>
            <Navi>
                <Link to="/">HOME</Link>
            </Navi>
            <Box>
                <Header />
                <Form onSubmit={(e) => {
                        e.preventDefault(); // onSubmit Event 차단
                        dispatch(
                            mod ? modifyWord(params.id, {
                                eng: engRef.current.value, 
                                kor: korRef.current.value,
                                examEng: examEngRef.current.value,
                                examKor: examKorRef.current.value,
                            }) : addWord({
                                eng: engRef.current.value, 
                                kor: korRef.current.value,
                                examEng: examEngRef.current.value,
                                examKor: examKorRef.current.value,
                            })
                        );
                        history.push("/");
                    }}>
                    <Title>단어 추가</Title>
                    <Input>
                        <English ref={engRef} type="text" placeholder="영어"></English>
                        <Korean ref={korRef} type="text" placeholder="한글"></Korean>
                        <English ref={examEngRef} type="text" placeholder="영어 예문"></English>
                        <Korean ref={examKorRef} type="text" placeholder="한글 예문"></Korean>
                    </Input>
                    <Button>ENTER</Button>
                </Form>
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
        background-color: #8065EF;
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
        background-color: #c8bfed;
    }
`;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Box = styled.div`
    width: 600px;
`;

const Title = styled.div``;
const Input = styled.div``;
const English = styled.input``;
const Korean = styled.input``;
const Button = styled.button``;
const Form = styled.form`
    width: 100%;
    height: 560px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #dddddd;
    box-shadow: 0px 4px 6px 0px #cccccc;

    ${Title} {
        font-size: 36px;
        padding: 40px 0 30px;
    }

    ${Input} {
        display: flex;
        flex-direction: column;
        width: 80%;

        input {
            height: 60px;
            border-radius: 10px;
            border: 1px solid #dddddd;
            box-shadow: 0px 4px 6px 0px #cccccc;
            padding: 0 20px;
            font-size: 16px;

            &:focus {
                outline: none;
            }
        }

        input + input {
            margin-top: 20px;
        }
    }

    ${Button} {
        border: none;
        width: 80%;
        height: 70px;
        margin-top: 30px;
        border-radius: 10px;
        box-shadow: 0px 4px 6px 0px #cccccc;
        background-color: #444444;
        color: #ffffff;
        font-size: 24px;
        cursor: pointer;
        transition: background .3s, color .3s;
    }

    ${Button}:hover  {
        background-color: #e8e8e8;
        color: #474747;
    }
`;

export default Add;