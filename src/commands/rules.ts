const createRegister = () : string[] => {

  const defaultMsgArr = [
    `<span class="keys">
       Tentative Rules
     </span>
     <br/><br/>
     `,
    `
- Eligibility: College/University Students<br />
- Team Size: 2-4, Cross-college teams allowed<br />
- Tracks will be released on Day 0 at 12:00 PM.<br />
- Development must start after release of tracks.<br />
- Projects submitted to other hackathons will not be considered.<br />
- Plagiarism will lead to disqualification.<br />
- Preliminary Presentations:<br />
&nbsp;&nbsp;- Online presentations on Google Meet / Zoom.<br />
&nbsp;&nbsp;- Time Limit: 12-15 mins (8 mins + questions)<br />
&nbsp;&nbsp;- Slides: Maximum of 12 slides; Formats: .pptx, .pdf<br />
&nbsp;&nbsp;- Maximum of 5 teams from each track will be selected for demos<br />
- Final Prototype Demos:<br />
- In-person project demonstration at event venue. Time Limit: 12-15 mins<br />
&nbsp;&nbsp;- Project must be submitted on Devfolio before the presentation begins.<br />
&nbsp;&nbsp;- Project source code must be hosted on a public repository on GitHub.<br />
&nbsp;&nbsp;- Short video demo needs to be uploaded on YouTube and submitted on Devfolio.<br />
&nbsp;&nbsp;- 10 teams qualify for Final Presentations<br />
- Final Presentations:<br />
&nbsp;&nbsp;- No Time Limit 🙂<br />
&nbsp;&nbsp;- In-person presentation at event venue.<br />
- Qualified teams must arrange for travel and accommodation.<br />
- Food and beverages will be provided as part of the parent event.
    `
  ]  
  
  const defaultMsg : string[] = [];

  defaultMsg.push("<br>");
  
  defaultMsgArr.forEach((ele) => {
    defaultMsg.push(ele);
  })

  defaultMsg.push("<br>");


  return defaultMsg;
}

export const RULES = createRegister();
