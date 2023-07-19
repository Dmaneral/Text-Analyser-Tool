import React, { useEffect, useState } from 'react';
import './Body.css';
import Analyse from './Analyse';
import TimeAndWordAnalyse from './TimeAndWordAnalyse';

const pronounsList = ['i', 'we', 'you', 'he', 'she', 'it',
    'they', 'me', 'us', 'her', 'him', 'them', 'mine',
    'ours', 'yours', 'hers', 'his', 'theirs', 'myself',
    'yourself', 'herself', 'himself', 'itself',
    'ourselves', 'yourselves', 'themselves',]

function Body() {
    const [text, setText] = useState("");
    const [words, setWords] = useState(0);
    const [characters, setCharacters] = useState(0);
    const [sentences, setSentences] = useState(0);
    const [paragraphs, setParagraphs] = useState(0);
    const [pronouns, setPronouns] = useState(0);
    const [readTime, setReadTime] = useState<number | string>(0);
    const [longestWord, setLongestWord] = useState('');

    let pronounsCounter = 0;
 
    useEffect(() => {
        if (text.length === 0) {
            setWords(0);
            setCharacters(0);
            setSentences(0);
            setParagraphs(0);
            setLongestWord("-");
            setReadTime(0);
        }

        if (text.length > 0) {
            setWords(text.split(" ").length);
            setCharacters(text.length);
            setSentences(text.split(/[.?!|\r?\n|\r]+/).length);
            setParagraphs(text.replace(/\n$/gm, '').split(/\n/).length);

            const splitText = text.split(/[' '|\r?\n|\r]/)
            for (let word of splitText) {
                if (pronounsList.includes(word.toLowerCase())) {
                    pronounsCounter++;
                }
            }
            setPronouns(pronounsCounter);

            let longest = splitText.sort(
                function (a, b) {
                    return b.length - a.length;
                }
            )[0];
            setLongestWord(longest);
            setReadTime((words / 225).toFixed(2));
        }
    }, [text])

    function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value); 
    }

    return (
        <div className="Body">
            <Analyse
                words={words}
                characters={characters}
                sentences={sentences}
                paragraphs={paragraphs}
                pronouns={pronouns}
            />

            <textarea placeholder='Paste your text here...' value={text} onChange={handleInput}></textarea>

            <TimeAndWordAnalyse
                time={`${readTime} Minute(s)`}
                longestWord={longestWord}
            />
        </div>
    );
}

export default Body;