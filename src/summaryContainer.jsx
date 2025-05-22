import ReactionImage from "./assets/images/icon-reaction.svg";
import MemoryImage from "./assets/images/icon-memory.svg?url";
import VertbalImage from "./assets/images/icon-verbal.svg?url";
import VisualImage from "./assets/images/icon-visual.svg";
import SummaryRectangle from "./summaryRectangle";
import "./summaryContainer.css";
function SummaryContainer() {
  return (
    <div className="summary-wrapper">
      <div className="summary-wrapper__left">
        <div className="summary-wrapper__left-row1">Your Result</div>
        <div className="summary-wrapper__left-row2">
          <span className="actual-score">
            <div className="actual-score-line1">76</div>
            <div className="actual-score-line2">of 100</div>
          </span>
        </div>
        <div className="summary-wrapper__left-row3">Great</div>
        <div className="summary-wrapper__left-row4">
          You scored higher than 65% of the people who have tkaen these tests.
        </div>
      </div>
      <div className="summary-wrapper__right">
        <div className="summary-rightside-title">Summary</div>
        <div className="summary-categories">
          <SummaryRectangle
            summaryName="Reaction"
            score={80}
            imgSrc={ReactionImage}
            className="feedback-wrapper feedback-wrapper__right-side-reaction general-container"
            leftsideClassName=" feedback-wrapper__left-side reaction-color"
          ></SummaryRectangle>
          <SummaryRectangle
            summaryName="Memory"
            score={92}
            imgSrc={MemoryImage}
            className="feedback-wrapper feedback-wrapper__right-side-memory general-container"
            leftsideClassName=" feedback-wrapper__left-side memory-color"
          ></SummaryRectangle>
          <SummaryRectangle
            summaryName="Verbal"
            score={61}
            imgSrc={VertbalImage}
            className="feedback-wrapper feedback-wrapper__right-side-verbal general-container"
            leftsideClassName=" feedback-wrapper__left-side verbal-color"
          ></SummaryRectangle>
          <SummaryRectangle
            summaryName="Visual"
            score={73}
            imgSrc={VisualImage}
            className="feedback-wrapper feedback-wrapper__right-side-visual general-container"
            leftsideClassName=" feedback-wrapper__left-side visual-color"
          ></SummaryRectangle>
        </div>

        <button className="continue-button">Continue</button>
      </div>
    </div>
  );
}

export default SummaryContainer;
