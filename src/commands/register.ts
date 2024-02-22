const createRegister = () : string[] => {
  const defaultMsgArr = [
    "<br>",
    "Registration for HackDUCS 2024 has not started yet.",
    "Type <span class='command'>'help'</span> to get started.",
    "<br>"
  ]  
  
  const defaultMsg : string[] = [];
  
  defaultMsgArr.forEach((ele) => {
    defaultMsg.push(ele);
  })

  return defaultMsg;
}

export const REGISTER = createRegister();
