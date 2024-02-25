const createRegister = () : string[] => {
  const defaultMsgArr = [
    "<br>",
    "Registration for HackDUCS 2024 has not started yet. Stay tuned for updates!",
    "<br>"
  ]  
  
  const defaultMsg : string[] = [];
  
  defaultMsgArr.forEach((ele) => {
    defaultMsg.push(ele);
  })

  return defaultMsg;
}

export const REGISTER = createRegister();
