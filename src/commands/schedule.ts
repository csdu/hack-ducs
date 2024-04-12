const createAbout = () : string[] => {
  const about : string[] = [];

  about.push("<br>");
  
  about.push(
    `<span class="keys">Schedule</span>
     <br/><br/>

    `,
    `
<span>DAY 0 - 18/04/24<br/>
&nbsp;&nbsp;&nbsp;&nbsp;11:00 AM - Registrations Closed<br/>
DAY 1 - 19/04/24<br/>
&nbsp;&nbsp;&nbsp;&nbsp;12:00 PM - Presentation Submissions Due<br/>
&nbsp;&nbsp;&nbsp;&nbsp;12:30 PM - Presentation Order Communicated<br/>
&nbsp;&nbsp;&nbsp;&nbsp;01:00 PM - Preliminary Presentations Begin on GMeet/Zoom<br/>
&nbsp;&nbsp;&nbsp;&nbsp;05:00 PM - Preliminary Presentations End<br/>
&nbsp;&nbsp;&nbsp;&nbsp;07:00 PM - Results of Preliminary Round Declared<br/>
&nbsp;&nbsp;&nbsp;&nbsp;08:00 PM - Instructions Communicated to Semi Finalist Teams<br/>
DAY 2 (Sankalan Day 1) - 20/04/24<br/>
&nbsp;&nbsp;&nbsp;&nbsp;09:00 AM - Offline Reporting (as feasible) and Disbursement of Event Kits<br/>
&nbsp;&nbsp;&nbsp;&nbsp;10:00 AM - Inauguration and Workshop / Keynote - Hacking Begins<br/>
DAY 3 (Sankalan Day 2) - 21/04/24<br/>
&nbsp;&nbsp;&nbsp;&nbsp;09:00 AM - Offline Reporting<br/>
&nbsp;&nbsp;&nbsp;&nbsp;10:00 AM - Project Demonstrations Begin (Hybrid)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;11:30 AM - Project Demonstrations End<br/>
&nbsp;&nbsp;&nbsp;&nbsp;12:00 PM - Results of Demonstrations Declared and Communicated to Finalist Teams<br/>
&nbsp;&nbsp;&nbsp;&nbsp;03:00 PM - Final Presentations Begin (Hybrid)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;05:00 PM - Final Presentations End<br/>
&nbsp;&nbsp;&nbsp;&nbsp;05:30 PM - Results of Final Presentations / Winners Declared<br/>
&nbsp;&nbsp;&nbsp;&nbsp;06:00 PM - Prize Disbursement Formalities</span>
`
  );

  about.push("<br>");
  return about
}

export const SCHEDULE = createAbout();
