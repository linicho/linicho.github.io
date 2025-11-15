import { Grid } from '@cloudscape-design/components';
import '../css/HomePage.css';
import AdvancedScrollingText3D from './ScrollingText.tsx';
import Headset_pic from '../assets/headset_pic.png';
import cpp_icon from '../assets/cpp-icon.png';
import python_icon from '../assets/python-icon.png';
import typescript_icon from '../assets/ts-icon.png';
import javascript_icon from '../assets/js-icon.png';
import react_icon from '../assets/react-icon.png';
import html_icon from '../assets/html-icon.png';
import css_icon from '../assets/css-icon.png';
import sql_icon from '../assets/sql-icon.png';
import git_icon from '../assets/git-icon.png';
import cloudscape_icon from '../assets/cscape-icon.png';
import aws_icon from '../assets/aws-icon.png';
import modeling_icon from '../assets/blender-icon.png';
import vs_icon from '../assets/vs-icon.png';
import flutter_icon from '../assets/flutter-icon.png';
import docker_icon from '../assets/docker-icon.png';
import vite_icon from '../assets/vite-icon.png';

const HomePage = () => {

  return (
    <div className="home-page" id='home-page'>

      <div 
        className='page-section' 
        style={{
          backgroundImage: `
            linear-gradient(to bottom, var(--bg-secondary-transparent), var(--bg-primary)),
            url(${Headset_pic})
          `,
          backgroundSize: 'fill',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='section-bubble'>
          <div style={{alignContent: "center"}}>
            <h1>HELLO, I'M NICHOLAS LI</h1>
            <h2>A PROFESSIONAL</h2>
            <AdvancedScrollingText3D 
              words={['SOFTWARE ENGINEER', 'WEB DEVELOPER', 'MOBILE APP DEVELOPER', 'DESIGNER']} 
              speed={4} 
              direction="up" 
              tiltAngle={180}
            />
          </div>
        </div>
      </div>
      
      <hr />

      <div className='page-section'>
        <div className='section-bubble'>
          <Grid
            gridDefinition={[
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 },
            { colspan: 3 }
          ]}>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={cpp_icon}/><div>C++</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={python_icon}/><div>Python</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={typescript_icon}/><div>TypeScript</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={javascript_icon}/><div>JavaScript</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={react_icon}/><div>React</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={html_icon}/><div>HTML</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={css_icon}/><div>CSS</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={sql_icon}/><div>SQL Database</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={git_icon}/><div>Git/GitHub</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={cloudscape_icon}/><div>Cloudscape</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={aws_icon}/><div>AWS Services</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={modeling_icon}/><div>Blender Modeling</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={vs_icon}/><div>Visual Studio</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={flutter_icon}/><div>Flutter</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={docker_icon}/><div>Docker</div></div></div>
            <div className='skill-box'><div className='small-box'><img className="small-img" src={vite_icon}/><div>Vite</div></div></div>
          </Grid>
        </div>
      </div>

      <hr />
      
      <div className='page-section'>
        <div className='section-bubble'>
          <div>Projects? this box might be too small tho</div>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;