import './summaryRectangle.css'

function SummaryRectangle(prop){
return(
    <>
    <div className={prop.className}>
        <div className={prop.leftsideClassName}>
            <img src={prop.imgSrc} alt="" />
            {prop.summaryName}
        </div>
        <div className="feedback-wrapper__right-side">
            <div className="score">{prop.score}</div><div className="over100">/100</div>
        </div>
    </div>
    
    </>
)
}

export default SummaryRectangle