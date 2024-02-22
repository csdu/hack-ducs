import command from '../../config.json' assert {type: 'json'};

const createSocials = () : string[] => {
  const about : string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const INSTAGRAM = "Instagram";
  const LINKEDIN = "Linkedin";
  
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;   
  const instagram = `<i class='fa-brands fa-instagram'></i> ${INSTAGRAM}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  let string = "";

  about.push("<br>");
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += instagram;
  string += SPACE.repeat(17 - INSTAGRAM.length);
  string += `<a target='_blank' href='https://instagram.com/${command.social.instagram}'>@${command.social.instagram}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);  
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedinUrl}'>${command.social.linkedin}</a>`;
  about.push(string);

  about.push("<br>");
  return about
}

export const SOCIALS = createSocials();
