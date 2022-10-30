import resumee from "../assets/James-Young-Resume.pdf";
export default function Footer(){
    return(
        <footer>
            <ul>
            <a href="https://github.com/jamesyoungGHusername">Github</a>
            <a href="https://www.linkedin.com/in/james-young-52479810a/">Linkedin</a>
            <a href={resumee} download>resume</a>
            </ul>
            
        </footer>
    );
}