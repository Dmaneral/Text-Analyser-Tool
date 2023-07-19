import './Analyse.css';

interface AnalyseProps {
        words: number,
        characters: number,
        sentences: number,
        paragraphs: number | string | null,
        pronouns: number
    }

function Analyse(props: AnalyseProps) {
    

    return (
        <div className="Analyse">
            <div>
                <label>Words</label>
                <div>{props.words}</div>
            </div>
            <div>
                <label>Characters</label>
                <div>{props.characters}</div>
            </div>
            <div>
                <label>Sentences</label>
                <div>{props.sentences}</div>
            </div>
            <div>
                <label>Paragraphs</label>
                <div>{props.paragraphs}</div>
            </div>
            <div>
                <label>Pronouns</label>
                <div>{props.pronouns}</div>
            </div>
        </div>
    )
}

export default Analyse;