import command from '../../config.json' assert {type: 'json'};

const createAbout = () : string[] => {
  const about : string[] = [];

  about.push("<br>");
  
  about.push(
   `<span class="keys">HackDUCS @ Sankalan 2024 - The Annual Techfest of DUCS</span>
    <br/><br/>
    <span>🚀 Welcome to HackDUCS - where ideas evolve, friendships form, <br/>
    and innovation takes center stage! 🚀</span>
    <br/><br/>
    <span>Coming Soon.</span>
    `
  );

  about.push("<br>");
  return about
}

export const ABOUT = createAbout();
