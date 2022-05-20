import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    font-size: 60px;
    padding: 50px;
`;

const Line = styled.div``;

const Content = styled.div`
    ${Line} {
        font-size: 36px;
        .yellow {
            color: #f0dd4f;
        }

        .grey {
            color: #cfcfcf;
        }
    }

    a {
        display: block;
        padding: 20px;
        margin: 50px 0 0;
        background-color: #dddddd;
        text-align: center;
        border-radius: 10px;

        &:hover {
            background-color: #d7b0b0;
            color: #ffffff;
        }
    }
`;

interface IWeek {
    week: string;
}

interface IData {
    count: number;
}

function Week() {
    const [ star, setStar ] = useState(0);
    const { week } = useParams<IWeek>();
    const { state } = useLocation<IData>();
    useEffect(() => setStar(state.count), [state]);
    const onClick = (e:React.MouseEvent<HTMLSpanElement>) => {
        setStar(Number(e.currentTarget.dataset.count) + 1);
    }
    return (
        <Container>
            <Header>{week}</Header>
            <Content>
                <Line>
                    {[...Array(5)].map((x, i) => 
                        <span key={i} data-count={i} onClick={onClick}>
                            {i < star ? 
                            <FontAwesomeIcon className="yellow" icon={faStar}/> :
                            <FontAwesomeIcon className="grey" icon={faStar}/>
                            }
                        </span>
                    )}
                </Line>
                <Link to={{
                        pathname: `/`,
                        state: { week, count: star }
                    }}>수정하기</Link>
            </Content>
        </Container>
    )
}

export default Week;