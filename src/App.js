import React, {useState} from "react";
import axios from 'axios';
import "./App.css";
import Date from './Date'
import Paragraph from "./Paragraph";
import Figure from "./Figure";
import Footer from "./Footer";
import Title from "./Title";

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
    axios.get('Cr1UTvl8b202kv3ium9Isiy784ELbjUeq2ezZgK9')
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

  if (!content) return <h3>Loading...</h3>;
  return (
    <div className="App">
      <Title title={title} />
      <Date date={date} />
      <Figure src={imageUrl} alt='photo-of-the-day' />
      <Paragraph text={text} />
      <Footer copyright={copyright} />

    </div>
  );
}

export default App;
