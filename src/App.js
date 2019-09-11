import React, {useState} from "react";
import "./App.css";

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
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
