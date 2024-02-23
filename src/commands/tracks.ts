const createTracks = () : string[] => {
  const defaultMsgArr = [
    "<br>",
    "TBA",
    "<br>"
  ]  
  
  const defaultMsg : string[] = [];
  
  defaultMsgArr.forEach((ele) => {
    defaultMsg.push(ele);
  })

  return defaultMsg;
}

export const TRACKS = createTracks();
