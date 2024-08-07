import Style from '../styles/Projects.module.css';
import { Project } from './Project';
import { AiOutlineQuestion } from 'react-icons/ai';
import xiboonme from '../assets/websites/xiboonme.png';
import xiboontech from '../assets/websites/xiboontech.png';
import tiscordme from '../assets/websites/tiscordme.png';
import fluorineme from '../assets/websites/fluorineme.png';
import tiscord from '../assets/logos/tiscord.png';
import fluorine from '../assets/logos/fluorine.png';
import { Website } from './Website';
export const Projects: React.FC = () => (
    <header className={Style.header}>
        <div>
            <h1>Projects</h1>
            <Project
                name="Moosical"
                description="An open-source selfhosted music streaming service"
                url="https://github.com/xiboon/moosical-backend/"
                icon={<AiOutlineQuestion></AiOutlineQuestion>}
            ></Project>
            <Project
                name="Tiscord"
                description="A fast, object-oriented Discord API library written in Typescript"
                url="https://tiscord.com/"
                icon={<img src={tiscord} />}
            ></Project>
            <Project
                name="Fluorine"
                description="Fantastic discord bot, perfect for your discord server!"
                url="https://github.com/Fluorinebot/Fluorine/"
                icon={<img style={{ borderRadius: '50%' }} src={fluorine} />}
            ></Project>
            <Project
                name="Kurwov"
                description="A fast, dependency-free library for Markov Chains"
                url="https://github.com/xiboon/kurwov"
                icon={<AiOutlineQuestion></AiOutlineQuestion>}
            ></Project>
        </div>
        <div className={Style.websites}>
            <h1>Websites</h1>
            <div>
                <Website name="xiboon.github.io" img={xiboontech}></Website>
                <Website name="tiscord.com" img={tiscordme}></Website>
                <Website name="fluorine.me" url="github.com/Fluorinebot/fluorine-site" img={fluorineme}></Website>
                <Website
                    name="xiboon.me (offline)"
                    url="github.com/xiboon/xiboon.github.io/tree/0357acbe1344f44f280ebdafaf87f079fd83bc40"
                    img={xiboonme}
                ></Website>
            </div>
        </div>
    </header>
);
