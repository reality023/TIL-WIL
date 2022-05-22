import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`;

const Header = styled.div`
    font-size: 60px;
    color: #000000;
    padding: 50px 0;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Line = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    
    em {
        font-size: 40px;
        width: 100px;
    }

    span {
        font-size: 36px;
        .yellow {
            color: #f0dd4f;
        }

        .grey {
            color: #cfcfcf;
        }
    }

    a {
        margin: 0 20px;
        padding: 10px;
        background-color: #dddddd;
        border-radius: 5px;
    }
`;

const Avg = styled.div`
    font-size: 24px;
    line-height: 50px;
`;

const Button = styled.div`
    width: 100px;
    height: 50px;
    background-color: #3260aa;
    color: #FFFFFF;
    font-size: 24px;
    line-height: 50px;
    text-align: center;
`;

interface IData {
    count: number,
    week: string
}

function Home() {
    const [ day, setDay ] = useState<string[]>([]);
    const [ week, setWeek ] = useState<number[]>([]);
    const [ avg, setAvg ] = useState(0);
    const { state } = useLocation<IData>();
    useEffect(() => {
        setDay(["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]);
        for (let i = 0; i < 7; i++) {
            setWeek((current) => [...current, Math.floor(Math.random()*6)]);
        }

    }, []);

    useEffect(() => {
        if ( state ) {
            setWeek((current) => {
                const arr = current.slice();
                arr[day.indexOf(state.week.toUpperCase())] = state.count;
                return arr;
            })
        }
        if (week.length > 0) {
            setAvg(week.reduce((result, v) => result + v) / 7);
        }
    }, [day]);

    const onClick = () => {
        setAvg(0);
    }
    return (
        <Container>
            <Header>내 일주일은?</Header>
            <Content>
                {week.map((v, i) => 
                    <Line key={i}>
                        <em>{day[i]}</em>
                        <span>
                        {[...Array(5)].map((x, j) => 
                            j < v ? 
                            <FontAwesomeIcon key={j} className="yellow" icon={faStar}/> :
                            <FontAwesomeIcon key={j} className="grey" icon={faStar}/>
                        )}
                        </span>
                        <Link to={
                            {
                                pathname: `/${day[i]}`,
                                state: { count : week[i] }
                            }
                        }>수정</Link>
                    </Line>
                )}
                <Avg>{avg.toFixed(1)}</Avg>
                <Button onClick={onClick}>리셋</Button>
            </Content>
        </Container>
    );
}

export default Home;