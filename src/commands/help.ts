const helpObj = {
  "commands": [
    [
    "'about'",
    "All About HackDUCS 2024",
    ],
    [
      "'register'",
      "Show Registration Details"
    ],
    [
      "'sankalan'",
      "Open the Sankalan Website"
    ],
    [
      "'socials'",
      "List of Social Media Handles"
    ],
    [
      "'whoami'",
      "A Perplexing Question"
    ],
    ["'sudo'",
      "???"
    ],
    ["'banner'",
      "Display System Banner"
    ],
    [
      "'clear'",
      "Clear Screen"
    ]
  ],
}

const createHelp = () : string[] => {
  const help : string[] = []
  help.push("<br>")

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    help.push(string);
  })

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> for auto completion.");
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.");
  help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.");
  help.push("<br>");
  return help
}

export const HELP = createHelp();