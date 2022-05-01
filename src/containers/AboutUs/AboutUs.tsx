import { ReactNode } from "react";
import { RiWechatFill } from "react-icons/ri";

// components
import { AboutUsStylesProvider } from "./AboutUs.styles";


function AboutUs({ children }: { children: ReactNode | Array<ReactNode> }) {


  return (
    <AboutUsStylesProvider>
      <div className="about-us__header">
        <h1 className="about-us__header-label">About us</h1>
      </div>
      <div className="about-us__content">
        <div className="about-us__content-left">
          <p className="about-us__content-text">
            Picture this….you’re in your weekly meeting and you ask a question.
            No one responds. Whether they’re zoned out or are responding to emails or chatting
            on slack, it can feel defeating.
          </p>
          <div className="about-us__content-faq">
            In order to have an epic meeting, you need five parts:
            <ul className="about-us__content-faq-list">
              <li className="about-us__content-faq-item">Set a cadence for your team meetings</li>
              <li className="about-us__content-faq-item">Have a clear meeting objective and agenda</li>
              <li className="about-us__content-faq-item">Start on time and end on time</li>
              <li className="about-us__content-faq-item">Have the right attendees in the room</li>
              <li className="about-us__content-faq-item">Have clear action items [who, what, when] at the end of the meeting</li>
            </ul>
          </div>
          <p className="about-us__content-text">
              Rate It was created to help leaders and managers have epic meetings that aren’t wasting anyone’s time.
              With timely feedback on how meetings can be productive, you will soon be holding
              world-class and super effective meetings.
          </p>
        </div>
        <div className="about-us__content-right">
          <RiWechatFill className="about-us__content-logo"/>
          <p className="about-us__content-logo-label">Rate It</p>
        </div>
      </div>
      { children }
    </AboutUsStylesProvider>
  );
}

export default AboutUs;
