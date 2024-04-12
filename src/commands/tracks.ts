const createTracks = () : string[] => {
  const defaultMsgArr = [
    "<br>",
    "<span class='keys'>- AI for India 🇮🇳</span>",
    "<span class='keys'>- Human-Centred Design 🤖</span>",
    "<span class='keys'>- Sustainable Technology 🌱</span>",
    "<span class='keys'>- Sponsor Track: Polygon 🔗</span>",
    "<span class='keys'>- Sponsor Track: ETHIndia 🔗</span>",
    "<br>"
  ]  
  
  const defaultMsg : string[] = [];
  
  defaultMsgArr.forEach((ele) => {
    defaultMsg.push(ele);
  })

  return defaultMsg;
}

export const TRACKS = createTracks();
