const createTracks = () : string[] => {
  const defaultMsgArr = [
    "<br>",
    "<span class='keys'>- AI for India 🇮🇳</span><br/>Innovate for India and present unique ideas that inspire<br />the nation’s AI journey. Focus on empowering the Indian <br/>society with toolkits to promote citizen participation in<br/>vernacular languages.",
    "<span class='keys'>- Human-Centred Design 🤖</span><br/>Develop and design solutions that address complex and<br/>everyday socio-technical problems with tools like accessible<br/>design, GenAI and XR.",
    "<span class='keys'>- Sustainable Technology 🌱</span><br/>With focus on low-carbon footprint, come up with solutions to<br/>enable and monitor sustainable development at the grassroots<br/>level.",
    "<span class='keys'>- Sponsor Track: Polygon 🔗</span><br/>Build solutions on Polygon that democratize Web3.",
    "<span class='keys'>- Sponsor Track: ETHIndia 🔗</span><br/>Build an innovative project on the Ethereum blockchain.",
    "<br>"
  ]  
  
  const defaultMsg : string[] = [];
  
  defaultMsgArr.forEach((ele) => {
    defaultMsg.push(ele);
  })

  return defaultMsg;
}

export const TRACKS = createTracks();
