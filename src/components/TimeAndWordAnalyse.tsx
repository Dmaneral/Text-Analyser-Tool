import './TimeAndWordAnalyse.css';

interface AnalyseProps {
        time: number | string,
        longestWord: string
    }

function TimeAndWordAnalyse(props: AnalyseProps) {
    

    return (
        <div className="TimeAndWordAnalyse">
            <div>
                <div>Average Reading Time: <span>{props.time}</span></div>
            </div>
            <div>
                <div>Longest Word: <span>{props.longestWord}</span></div>
            </div>
        </div>
    )
}

export default TimeAndWordAnalyse;