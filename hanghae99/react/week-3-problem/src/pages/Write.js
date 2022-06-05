import styled, { css } from "styled-components";
import Header from "../components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import type_bottom from "../images/bottom-image.png";
import type_left from "../images/left-image.png";
import type_right from "../images/right-image.png";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { addFBPost, getFBPost, modifyFBPost } from "../redux/firebase/fbPost";
import { storage } from "../redux/firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Write = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const match = useMatch("/modify/:id"); // 편집 모드인지 체크
  const params = useParams();
  const [inputType, setInputType] = useState(0);
  const inputSubject = useRef(null);
  const inputDescription = useRef(null);
  const inputImage = useRef(null);
  const user = useSelector((state) => state.account);
  const data = useSelector((state) => state.post.list);
  const [mode, setMode] = useState("ADD");
  const [imageVisible, setImageVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [active, setActive] = useState(false);

  const chkBtn = (e) => {
    if (inputSubject.current.value.length > 0 && inputDescription.current.value.length > 0 && imageUrl.length > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  const selectFile = async (e) => {
    // 이미지 미리보기
    let reader = new FileReader();
    reader.onload = function(e) {
      var img = document.getElementById("previewImage");
      img.setAttribute("src", e.target.result);
    }
    reader.readAsDataURL(e.target.files[0]);

    setImageVisible(true);
    // 이미지 미리보기
    // 이미지 업로드
    const image = inputImage.current?.files[0];

    const _upload = ref(storage, `images/${image.name}`);

    await uploadBytes(_upload, image).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

    await getDownloadURL(_upload).then((url) => {
      setImageUrl(url);
    });

    chkBtn();
  }

  const writePost = (e) => {
    e.preventDefault();

    if (active) {
      const subject = inputSubject.current.value;
      const description = inputDescription.current.value;
      
      console.log(imageUrl);
  
      const post = {
        authorId: user.docId,
        authorName: user.name, 
        subject,
        description,
        type: inputType,
        image: imageUrl,
      };
      if (mode === "EDIT") {
        dispatch(modifyFBPost(data[0].docId, post));
      } else {
        dispatch(addFBPost(post));
      }
      navigate("/");
    } else {
      alert("모든 값을 입력해 주세요");
    }
  }

  useEffect(() => {
    if (match) {
      setMode("EDIT");
    }
  }, [match]);

  useEffect(() => {
    if (mode === "EDIT") {
      dispatch(getFBPost(params.id));
    }
  }, [mode]);

  useEffect(() => {
    if (data.length > 0 && mode === "EDIT") {
      try {
        setInputType(data[0].type);
        inputSubject.current.value = data[0].subject;
        inputDescription.current.value = data[0].description;
        var img = document.getElementById("previewImage");
        img.setAttribute("src", data[0].image);
        setImageVisible(true);
        setImageUrl(data[0].image);
        setActive(true);
      } catch (e) {
        navigate("/");
      }
    }
  }, [data]);

  return (
    <Container>
      <Header />
      <Content>
        <Wrap>
          <Type type={inputType}>
            <em>타입 선택</em>
            <ul>
              <li onClick={
                () => {
                  setInputType(0);
                }
              }><img src={type_bottom} alt="bottom" /></li>
              <li onClick={
                () => {
                  setInputType(1);
                }
              }><img src={type_left} alt="left" /></li>
              <li onClick={
                () => {
                  setInputType(2);
                }
              }><img src={type_right} alt="right" /></li>
            </ul>
          </Type>
        </Wrap>
        <Wrap>
          <Form onSubmit={writePost}>
            <MainContent>
              <Subject>
                <input type="text" placeholder="제목" ref={inputSubject} onChange={chkBtn} required/>
              </Subject>
              <Description>
                <textarea name="description" cols="30" rows="10" placeholder="내용" ref={inputDescription} onChange={chkBtn} required></textarea>
              </Description>
            </MainContent>
            <label htmlFor="imageFile">
            <Image visible={imageVisible}>
              <img id="previewImage" src="" alt=""/>
              <FontAwesomeIcon icon={faPlus} />
            </Image>
            </label>
            <input type="file" accept="image/*" id="imageFile" className="image-file" onChange={selectFile} ref={inputImage}/>
            <Line>
              <Button active={active}>작성하기</Button>
            </Line>
          </Form>
        </Wrap>
      </Content>
    </Container>
  )
}

const Container = styled.div``;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;

const Wrap = styled.div`
  width: 1400px;
  border: 1px solid #ddd;
  box-shadow: 0 0 6px 0 #ddd;

  & + & {
    margin-top: 40px;
  }
`;

const Type = styled.div`
  padding: 40px;
  em {
    font-size: 36px;
  }

  ${props => props.type >= 0 && css`
    ul {
      li:nth-of-type(${props.type + 1}) {
        background-color: #EEEEEE;
      }
    }
  `}

  ul {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    li {
      padding: 40px 40px;
      border: 1px solid #ddd;
      cursor: pointer;
    }
  }

  img {
    width: 300px;
  }
`;

const Form = styled.form`
  width: 100%;
  .image-file {
    display: none;
  }
`;

const MainContent = styled.div`

`;

const Subject = styled.div`
  width: 100%;
  height: 100px;

  input {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 36px;
    padding: 0 20px;
    border: none;
    border-bottom: 1px solid #ddd;
  }
`;

const Description = styled.div`
  width: 100%;
  min-height: 600px;
  border-bottom: 1px solid #ddd;
  textarea {
    padding: 20px;
    width: 100%;
    height: 600px;
    font-size: 24px;
    resize: none;
    border: none;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #EEEEEE;
  cursor: pointer;
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

  &:hover {
    color: #666666;
  }

  &:hover::after {
    opacity: 0.4;
  }

  &:hover svg {
    opacity: 1;
  }

  svg {
    width: 36px;
    height: 36px;
    position: absolute;
    opacity: 0.5;
    transition: opacity .3s;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  ${props => props.visible && css`
    img {
      display: block;
    }

    svg {
      display: none;
    }
  `}
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 150px;
  height: 70px;
  font-size: 24px;
  color: #FFFFFF;
  border: none;
  transition: color .3s, background-color .3s;
  cursor: pointer;


  ${props => props.active && css`
    background-color: #4876CF;

    &:hover {
      color: #FFFFFF;
      background-color: #B233BD;
    }
  `}
`;

export default Write;