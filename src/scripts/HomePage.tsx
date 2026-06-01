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

      {/* Welcome Section */}
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
          <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
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

      {/* Skills Section */}
      <div className='page-section'>
        <div className='section-bubble'>
          <h1 style={{paddingBottom: '40px'}}>Skills</h1>
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
            <div className='skill-box'><img className="small-img" src={cpp_icon}/><div>C++</div></div>
            <div className='skill-box'><img className="small-img" src={python_icon}/><div>Python</div></div>
            <div className='skill-box'><img className="small-img" src={typescript_icon}/><div>TypeScript</div></div>
            <div className='skill-box'><img className="small-img" src={javascript_icon}/><div>JavaScript</div></div>
            <div className='skill-box'><img className="small-img" src={react_icon}/><div>React</div></div>
            <div className='skill-box'><img className="small-img" src={html_icon}/><div>HTML</div></div>
            <div className='skill-box'><img className="small-img" src={css_icon}/><div>CSS</div></div>
            <div className='skill-box'><img className="small-img" src={sql_icon}/><div>SQL Database</div></div>
            <div className='skill-box'><img className="small-img" src={git_icon}/><div>Git/GitHub</div></div>
            <div className='skill-box'><img className="small-img" src={cloudscape_icon}/><div>Cloudscape</div></div>
            <div className='skill-box'><img className="small-img" src={aws_icon}/><div>AWS Services</div></div>
            <div className='skill-box'><img className="small-img" src={modeling_icon}/><div>Blender Modeling</div></div>
            <div className='skill-box'><img className="small-img" src={vs_icon}/><div>Visual Studio</div></div>
            <div className='skill-box'><img className="small-img" src={flutter_icon}/><div>Flutter</div></div>
            <div className='skill-box'><img className="small-img" src={docker_icon}/><div>Docker</div></div>
            <div className='skill-box'><img className="small-img" src={vite_icon}/><div>Vite</div></div>
          </Grid>
        </div>
      </div>

      <hr />
      
      {/* Projects Section */}
      <div className='page-section' style={{height: 'fit-content'}}>
        <div>
          <h1 style={{paddingBottom: '40px'}}>Projects</h1>
        </div>
        
        <div className='section-bubble'>
          {/* Project entries will go here in the future */}
          <div className="">
            <h1 className="">VR Headset</h1>
            <p className=""><em>A custom-built VR system | 1-month solo project</em></p>
            
            <p className="">I've always wanted a VR headset—so I built one myself. Over one month, I designed and 3D-printed the chassis in Blender, programmed a Seeed XIAO nRF52840 Sense to track head movements, and developed a custom PC application in Visual Studio that creates an immersive virtual workspace.</p>
            
            <p className=""><strong>How it works:</strong> The headset connects via HDMI and USB-C. Inside the app, your other computer screens appear as floating displays in a 3D space. You can drag, rotate, and toggle screens on/off with your keyboard. When you move your head, the gyroscope data guides the virtual camera—letting you look around your custom environment naturally.</p>
            
            <p className=""><strong>Challenges I solved:</strong> Gyroscope drift (through calibration), Arduino-to-app communication, dynamic monitor management with a custom <code>Monitor</code> class, and three 3D-print iterations to perfect the fit.</p>
            
            <p className=""><strong>What's next:</strong> Adding a passthrough camera and VR game compatibility.</p>
            
            <p className=""><strong>Skills:</strong> 3D modeling (Blender) • 3D printing • Embedded C++ (Arduino) • C# / .NET • Hardware-software integration • Rapid prototyping</p>
            
            <p className="">I'm a creator who loves learning new skills and building things from the ground up.</p>
          </div>

          <div className="">
            <h1 className="">VR Headset</h1>
            <p className=""><em>A Self-Built Virtual Reality System | 1-Month Personal Project</em></p>
            
            <h2 className="">Project Overview</h2>
            <p className="">I've always wanted a VR headset, but I didn't want to buy one—I wanted to <em>build</em> one. So I challenged myself to create a fully functional VR headset from scratch in one month. This project became a complete learning experience where I taught myself 3D modeling in Blender, designed and printed the physical hardware, programmed an Arduino for motion tracking, and developed a custom PC application to tie everything together.</p>
            <p className="">The result is a working VR system where physical head movements control a virtual camera in a 3D space, allowing the user to interact with their actual computer screens in an immersive environment.</p>
            
            <h2 className="">Technical Details</h2>
            <p className=""><strong>Hardware:</strong></p>
            <ul className="">
              <li><strong>Microcontroller:</strong> Seeed Studio XIAO nRF52840 Sense (with integrated gyroscope)</li>
              <li><strong>Displays:</strong> 2x 2.9-inch dual displays</li>
              <li><strong>Connectivity:</strong> HDMI for video, USB-C for data/power (no battery needed)</li>
              <li><strong>Chassis:</strong> Custom-designed and 3D printed using my personal printer over 3 iterations</li>
            </ul>
            <p className=""><strong>Software & Tools:</strong></p>
            <ul className="">
              <li><strong>Firmware Development:</strong> Arduino IDE (C++)</li>
              <li><strong>Application Development:</strong> Visual Studio 2022 (C# / .NET)</li>
              <li><strong>3D Modeling:</strong> Blender (self-taught for this project)</li>
              <li><strong>3D Printing:</strong> Personal FDM printer with PLA filament</li>
            </ul>
            
            <h2 className="">How It Works</h2>
            <p className=""><strong>The Hardware:</strong> I designed the headset chassis in Blender, going through three print iterations to get the fit right—the first two had poor connections or didn't sit comfortably on the head. The final design securely houses the Seeed XIAO board and both displays, with the integrated gyroscope ready to track movement.</p>
            <p className=""><strong>The Firmware:</strong> The Seeed XIAO runs code written in the Arduino IDE that continuously reads gyroscope data. I had to address significant sensor drift by implementing a calibration routine that stabilizes the readings before they're sent to the PC. The calibrated orientation data is then transmitted over USB-C.</p>
            <p className=""><strong>The PC Application:</strong> This is where the magic happens. The application:</p>
            <ul className="">
              <li>Creates a 3D virtual space with a movable "head" camera</li>
              <li>Scans for all available displays <em>except</em> the one the app itself is running on</li>
              <li>Projects those displays as floating screens within the 3D environment</li>
              <li>Receives gyroscope data from the Arduino and maps it to the virtual camera's rotation</li>
            </ul>
            <p className=""><strong>User Experience:</strong></p>
            <ol className="">
              <li>Put on the headset—it's connected to your PC via HDMI and USB-C</li>
              <li>Inside the headset, you see a 3D space with your other computer screens floating before you</li>
              <li>Use your mouse to drag and rotate each screen to your preferred position</li>
              <li>Press number keys (1-0) to toggle screens on or off as needed</li>
              <li>Move your head naturally—the virtual camera follows, letting you look around your custom workspace</li>
            </ol>
            
            <h2 className="">Challenges & Problem-Solving</h2>
            <p className="">This project pushed me to solve several difficult problems:</p>
            <p className=""><strong>1. Gyroscope Drift</strong><br />The raw gyroscope data would drift over time, making the view slowly rotate even when the head was still. I solved this by implementing a calibration routine that samples the sensor at rest and applies offset corrections before sending data to the application.</p>
            <p className=""><strong>2. Arduino-to-App Communication</strong><br />Getting the head tracking data from the Arduino to the PC application reliably was surprisingly difficult. I had to design a simple but robust serial protocol that could transmit orientation data without introducing noticeable latency or corruption.</p>
            <p className=""><strong>3. Dynamic Monitor Management</strong><br />Creating a flexible system to handle multiple monitors was a challenge. I built a dedicated <code>Monitor</code> class that could:</p>
            <ul className="">
              <li>Detect and store information about each connected display</li>
              <li>Toggle individual screens on/off with number key presses</li>
              <li>Support up to 10 simultaneous virtual screens</li>
              <li>Maintain position and rotation data for each screen independently</li>
            </ul>
            <p className=""><strong>4. Physical Design Iteration</strong><br />The 3D-printed chassis took three attempts to get right. The first two prints had fitment issues or structural weaknesses. Each failure taught me something about Blender modeling and print orientation, leading to a comfortable, functional final design.</p>
            
            <h2 className="">Results & Next Steps</h2>
            <p className="">The headset works! Tracking is responsive with minimal perceived latency, and the ability to arrange virtual screens creates a genuinely useful multi-monitor experience without needing multiple physical displays. The calibration successfully eliminates drift during normal use.</p>
            <p className=""><strong>What I'd Improve in Version 2:</strong></p>
            <ul className="">
              <li><strong>Add a passthrough camera:</strong> Integrate a camera so the user can see their real-world surroundings from within the app</li>
              <li><strong>VR game compatibility:</strong> Extend the system to work with existing VR games and applications</li>
              <li><strong>Wireless option:</strong> Explore wireless video transmission to eliminate the HDMI cable</li>
              <li><strong>Refined ergonomics:</strong> Further optimize the chassis weight distribution for longer wear sessions</li>
            </ul>
            
            <h2 className="">Skills Demonstrated</h2>
            <ul className="">
              <li><strong>3D Modeling & Printing:</strong> Self-taught Blender to design a custom enclosure; iterated through 3 prototypes</li>
              <li><strong>Embedded Systems:</strong> Arduino programming, sensor calibration, serial communication</li>
              <li><strong>Application Development:</strong> C# / .NET in Visual Studio, 3D graphics, multi-monitor management</li>
              <li><strong>Hardware-Software Integration:</strong> Synchronizing physical movement with virtual camera control</li>
              <li><strong>Problem-Solving:</strong> Debugging gyro drift, communication protocols, physical fit issues</li>
              <li><strong>Rapid Prototyping:</strong> Complete functional prototype delivered in 1 month</li>
            </ul>
            
            <h2 className="">Why I Built This</h2>
            <p className="">I'm a creator at heart. I could have bought a VR headset, but building one taught me more than any store-bought product ever could. This project represents what I love about computer science: taking an idea, learning whatever skills are necessary, and making something real.</p>
            <p className="">Whether it's software engineering, full-stack development, or creative technology roles, I bring this same curiosity and hands-on approach to every problem. I don't just want to write code—I want to understand systems, build things, and keep learning.</p>
            
            <h2 className="">Media</h2>
            <p className=""><em>[Photos of the headset, internal components, Blender model, app screenshots, and demo video would go here]</em></p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;