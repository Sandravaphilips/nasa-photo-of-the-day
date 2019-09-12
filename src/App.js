import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Navigation from './Navigation'
import Date from './Date'
import Paragraph from "./Paragraph";
import Figure from "./Figure";
import Footer from "./Footer";
import Title from "./Title";
import styled from 'styled-components';


const AppStyle = styled.div`
  background-color: black;
  margin: 0 auto;
  padding-bottom: 20px;
  color: white;

  h1 {
    color: #0066B3;
    margin-right: 65%;
  }
`

function App() {
  const [content, setContent] = useState({
    imageUrl: '',
    text: '',
    date: '',
    copyright: '',
    title: '',
  });
  // const [date, setDate] =  useState('');
  // const [text, setText] =  useState('');
  // const [copyright, setCopyright] =  useState('');
  // const [title, setTitle] =  useState('');

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=Cr1UTvl8b202kv3ium9Isiy784ELbjUeq2ezZgK9')
    .then(response => {
      setContent({
        imageUrl: response.data.url,
        text: response.data.explanation,
        date: response.data.date,
        copyright: response.data.copyright,
        title: response.data.title
      })
    })
  }, [])

  if (!content.imageUrl) return <h3>Loading...</h3>;
  return (
    <AppStyle className="App">
      <Navigation home='index.html' nasaWebsite='https://www.nasa.gov/'/>
      <h1>Astronomy Photo Of The Day</h1>
      <Title title={content.title} />
      <Date date={content.date} />
      <Figure src={content.imageUrl} alt='photo-of-the-day' />
      <Paragraph text={content.text} />
      <Footer copyright={content.copyright} />

    </AppStyle>
  );
}

export default App;
