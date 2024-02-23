import command from '../../config.json' assert {type: 'json'};

const createBanner = () : string[] => {
  const banner : string[] = [];
  banner.push("<br>")
  command.ascii.forEach((ele) => {
    let bannerString = "";
    //this is for the ascii art
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }
    
    let eleToPush = `<pre>${bannerString}</pre>`;
    banner.push(eleToPush);
  });  
  banner.push("<br>");
  banner.push("Welcome to HackDUCS 2024");
  banner.push(`Organized by the Delhi University Computer Science Society`);
  banner.push("Type <span class='command'>'help'</span> for a list of all available commands.");
  banner.push("<br>");
  banner.push(`<img src="res/Devfolio_Logo-White.png" alt="DEVFOLIO LOGO" id="devfolio-logo" />
  <img src="res/Polygon_Logo-White.png" alt="POLYGON LOGO" id="polygon-logo" />
  <img src="res/ethindia-light.png" alt="ETHINDIA LOGO" id="ethindia-logo" />`);
  banner.push("<br>");
  banner.push(`<div 
    class="apply-button" 
    data-hackathon-slug="hackducs-24" 
    data-button-theme="dark-inverted"
    style="height: 40px; width: 250px"
  ></div>`);
  banner.push("<br>");
          
  return banner;
}

export const BANNER = createBanner();
