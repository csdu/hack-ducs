const createAbout = () : string[] => {
  const about : string[] = [];

  about.push("<br>");
  
  about.push(
   `<span class="keys">HackDUCS @ Sankalan 2024 - The Annual Techfest of DUCS</span>
    <br/><br/>
    <span>🚀 Welcome to HackDUCS - where ideas evolve, friendships form, <br/>
    and innovation takes center stage! 🚀</span>
    <br/><br/>
    <span class="keys">When?</span> April 19-21, 2024
    <br/>
    <span class="keys">Where?</span> <a href="https://goo.gl/maps/vikER7ewLJwSJdg67" target="_blank">https://goo.gl/maps/vikER7ewLJwSJdg67</a>
`
  );

  about.push("<br>");
  return about
}

export const ABOUT = createAbout();
