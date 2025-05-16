import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import SlidingGallery from './SlidingGallery'; 

import bot1 from '/src/assets/battleBots/bot1.jpg';
import bot2 from '/src/assets/battleBots/bot2.mp4';
import bot3 from '/src/assets/battleBots/bot3.mp4';
import bot4 from '/src/assets/battleBots/bot4.mp4';

import profileImage from '/src/assets/2x2.png';


const App = () => {
  const [pdfLink, setPdfLink] = useState('');

  // Add your PDF file IDs here
  const certificates = {
    certificate1: '13hyun99R9mQJO74p7W6VdeVie-iNpV_3', // It Essentials
    certificate2: '1-uyCdMH5vpT0N54-egabKiVuDEGvLx8A', // Intro to Networks
    certificate3: '1CJPqTya3NxiuXEcM9puMzbQETvuZjBsL', // Enterprise
    certificate4: '1kSvkBNeSsnPuqjW570crFnj6ssncseJa', // Intro to Modern AI
    certificate5: '1XlKsdRrLXw2Oix6viu0_szPZX6aWGy76', // Intro to IOT
    certificate6: '1CBOhBypQtvc_csVCY7EjtMhnILoIQamq', // Data Science
    certificate7: '1xAUL1qInV2k7u5W9fTvzPdxSr8du1XHL', // AI Fund
  };

  const handleButtonClick = (certificateId) => {
    // Update the PDF link based on the selected certificate
    setPdfLink(`https://drive.google.com/viewerng/viewer?embedded=true&url=https://drive.google.com/uc?id=${certificates[certificateId]}`);
  };

  const [viewType, setViewType] = useState(null); // 'embed' or 'gallery'
  const [viewSource, setViewSource] = useState(null)
  
  const handleViewChange = (type, source) => {
    setViewType(type);
    setViewSource(source);
  };

  const battleBots = [
  bot1,bot2,bot3,bot4,
  ];

  const btBase = 'bg-[#464847] dark:bg-[#d6ccc4] text-[#fbfbfb] dark:text-[#464847] hover:text-[#fbfbfb] hover:bg-[#a10a01] active:bg-[#780801] p-1 m-1 rounded-xl w-auto min-w-[20%] md:min-h-[20%] text-sm md:text-md lg:text-xl hover:scale-105 active:scale-95 ease-in-out transition-all duration-150 font-bold';

  const btDkBase = 'dark:bg-[#464847] bg-[#d6ccc4] dark:text-[#fbfbfb] text-[#464847] hover:text-[#fbfbfb] hover:bg-[#a10a01] active:bg-[#780801] p-1 m-1 rounded-xl w-auto min-w-[20%] md:min-h-[20%] text-sm md:text-md lg:text-xl hover:scale-105 active:scale-95 ease-in-out transition-all duration-150 font-bold';


  const bgBase = 'bg-[#d6ccc4] dark:bg-[#464847] w-screen h-screen snap-start flex items-center justify-center transition-colors duration-300';
  const mncontBase = 'bg-[#d6ccc4] dark:bg-[#464847] border-[#464847] dark:border-[#d6ccc4] border-3 w-[95%] h-full md:w-[90%]';
  
  const ltCont = 'bg-[#d6ccc4] dark:bg-[#464847]';

  const dkCont = 'dark:bg-[#d6ccc4] bg-[#464847]';

  const ltTxt = 'dark:text-[#fbfbfb] text-[#464847]';

  const dkTxt = 'text-[#fbfbfb] dark:text-[#464847]';

  const ltBdr = 'border-[#464847] dark:border-[#d6ccc4] border-3';

  const dkBdr = 'dark:border-[#464847] border-[#d6ccc4] border-3';


  return (
    <div>
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">

      {/*Personal Information*/}
      <div className={bgBase}>
        <div className="fixed md:top-5 md:right-5 top-1 right-1 z-50">
          <ThemeToggle />
        </div>

        <div className='w-full h-full flex items-center justify-center'>
          <div className={`${mncontBase} flex flex-col lg:flex-row gap-2`}>
            {/* First Column (Personal Info & Skills) */}
            <div className='flex-1 flex flex-col md:gap-2 items-start justify-start md:justify-start'>
              {/* Personal Info Row */}
              <div className={`${ltCont} ${ltTxt} ${ltBdr} w-full md:h-1/2 flex flex-row items-start justify-start md:items-center md:justify-center gap-2`}>
                <div className='h-full max-h-[75%] ml-2 md:max-h-[85%] aspect-square rounded-full border-2 border-black self-center'
                style={{
                  backgroundImage: `url(${profileImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}></div>
                <div className='h-full w-full'>
                  <h1 className={`${ltCont} ${ltTxt} p-2 w-full text-md md:text-3xl lg:text-5xl font-bold`}>Cataquian, Ivan Joshua D.</h1>
                </div>
              </div>
              {/* Skills Row */}
              <div className={`${dkCont} ${dkTxt} ${dkBdr} w-full md:h-1/2 flex flex-col items-start md:items-center p-2 gap-2`}>
                <h1 className={`w-auto md:w-full md:h-auto text-2xl font-bold p-2`}>Skills</h1>
                <div className='w-full h-full text-sm flex flex-col gap-2 overflow-y-auto max-h-[20vh] md:max-h-full'>
                  <div className='w-full h-full'>
                    <h2 className={`text-md md:text-xl font-bold`}>Networking & IT:</h2>
                    <p>Fundamental knowledge of Switching & Routing, PC Hardware, and Software Maintenance</p>
                    <h2 className={`text-md md:text-xl font-bold`}>Software & Tools:</h2>
                    <p>Skilled in MS Office Suite (Word, PowerPoint, Excel), Adobe Photoshop, and basic troubleshooting</p>
                    <h2 className={`text-md md:text-xl font-bold`}>Soft Skills:</h2>
                    <p>Excellent analytical and problem-solving skills, effective team collaboration, and adaptability</p>
                    <h2 className={`text-md md:text-xl font-bold`}>Additional:</h2>
                    <p>Quick learner with a strong passion for emerging technologies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column (Personal Background) */}
            <div className={`${ltCont} ${ltTxt} lg:w-1/2 flex flex-col items-center justify-start`}>
              <h1 className={`${dkCont} ${dkTxt} rounded-sm w-full p-2 font-black text-xl md:text-3xl`}>Personal Background</h1>
              <div className='w-full h-full p-2 gap-2 flex flex-row lg:flex-col items-center justify-start overflow-y-auto'> {/* Changed to flex-col */}
                {/* Yellow Box */}
                <div className='w-full h-auto max-h-[50vh] flex-1 flex flex-col overflow-y-auto overflow-x-clip p-1 gap-0.5 items-start justify-start'>
                  <p className='h-auto w-full p-2 text-[2vh] lg:text-lg overflow-y-auto'>A motivated Computer Engineering graduate from Holy Angel University with a strong foundation in programming (Java, C++, Python) and network systems. Eager to contribute to projects involving software development, network security, and system troubleshooting. Committed to applying technical skills and continuously learning to deliver impactful solutions in a professional environment.</p>
                </div>
                {/* Red Box */}
                <div className='w-full h-auto max-h-[50vh] flex-1 flex flex-col overflow-y-auto overflow-x-clip items-start justify-start p-2 gap-4'> {/* Changed to flex-col and items-start, added padding and gap */}
                  {/* Social Media Links */}
                  <div className='flex flex-row items-center justify-start gap-4'>
                    <a href="https://www.linkedin.com/in/ivan-joshua-cataquian-484bb6330/" target="_blank" rel="noopener noreferrer" className="text-2xl"> {/* Increased font size */}
                      <i className="fa-brands fa-linkedin align-middle"></i>
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="https://github.com/C474Q" target="_blank" rel="noopener noreferrer" className="text-2xl"> {/* Increased font size */}
                      <i className="fa-brands fa-github align-middle"></i>
                      <span className="sr-only">GitHub</span>
                    </a>
                  </div>

                  {/* Contact Information */}
                  <div className='flex flex-col items-start justify-start gap-2 text-sm md:text-2xl'> {/* Increased font size and aligned left */}
                    <a href="mailto:cataquianivan@gmail.com" className="leading-none">
                      <i className="fa-regular fa-envelope mr-2 align-middle"></i> {/* Increased mr */}
                      cataquianivan@gmail.com
                    </a>
                    {+639292134985 && (
                      <a href={`tel:${+639292134985}`} className="leading-none">
                        <i className="fa-solid fa-phone mr-2 align-middle"></i> {/* Increased mr */}
                        {+639292134985}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Academic Certificates and Information*/}
      <div className={bgBase}>
        
        <div className='w-full h-full flex flex-row items-center justify-center'>
            <div className={`${mncontBase} flex flex-col md:flex-row gap-2`}>
              <div className={`${dkCont} ${dkTxt} ${dkBdr} p-2 flex flex-col w-full md:w-[75%] h-[75%] md:h-full items-start justify-start`}>
                <h1 className='font-bold text-2xl md:text-3xl mb-2'> Academic Background / Qualifications</h1>
                  <div className={`${ltCont} ${ltTxt} ${ltBdr} w-full h-full flex flex-col items-center justify-center text-3xl`}>
                    {/* Embed the PDF here */}
                    {pdfLink ? (
                      <iframe
                        src={pdfLink}
                        width="100%"
                        height="100%"
                        title="Certificate"
                        frameBorder="0"
                      ></iframe>
                    ) : (
                      <div className={`${ltTxt} flex flex-col items-center justify-center`}>
                        <i className={`fa-solid fa-file text-5xl md:text-8xl`} aria-label="No certificate selected"></i>
                        <p className='md:text-2xl text-lg mt-2 md:mt-4'>No certificate selected</p>
                      </div>
                    )}
                </div>
              </div>
              <div className={`${ltCont} ${ltTxt} ${ltBdr} flex flex-col w-full md:w-[25%] h-[25%] md:h-full p-2 gap-2 items-center justify-center`}>
                <div className='w-full h-full flex flex-row md:flex-col items-center justify-start gap-2 md:gap-6 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto'>
                  <button
                    className={`${btBase} w-auto min-w-[40%] md:max-w-[90%] h-auto min-h-[5vh]`}
                    onClick={() => handleButtonClick('certificate1')}>
                    IT Essentials: PC Hardware and Software
                  </button>
                  <button
                    className={`${btBase} w-auto min-w-[40%] md:max-w-[90%] h-auto min-h-[5vh]`}
                    onClick={() => handleButtonClick('certificate2')}>
                    CCNAv7: Introduction to Networks
                  </button>
                  <button
                    className={`${btBase} w-auto min-w-[40%] md:max-w-[90%] h-auto min-h-[5vh]`}
                    onClick={() => handleButtonClick('certificate3')}>
                    CCNAv7: Enterprise Networking, Security, and Automation
                  </button>
                  <button
                    className={`${btBase} w-auto min-w-[40%] md:max-w-[90%] h-auto min-h-[5vh]`}
                    onClick={() => handleButtonClick('certificate4')}>
                    Introduction to Modern AI
                  </button>
                  <button
                    className={`${btBase} w-auto min-w-[40%] md:max-w-[90%] h-auto min-h-[5vh]`}
                    onClick={() => handleButtonClick('certificate5')}>
                    Introduction to IoT and Digital Transformation
                  </button>
                  <button
                    className={`${btBase} w-auto min-w-[40%] md:max-w-[90%] h-auto min-h-[5vh]`}
                    onClick={() => handleButtonClick('certificate6')}>
                    Introduction to Data Science
                  </button>
                  <button
                    className={`${btBase} w-auto min-w-[40%] md:max-w-[90%] h-auto min-h-[5vh]`}
                    onClick={() => handleButtonClick('certificate7')}>
                    AI Fundamentals with IBM SkillsBuild
                  </button>
                </div>
              </div>
            </div>
        </div>

      </div>
      {/*Project Portfolio*/}
      <div className='w-screen h-screen snap-start flex flex-col overflow-y-auto overflow-x-hidden'>
      <div className={bgBase}>
            <div className='w-full h-[100vh] items-center justify-center flex flex-col'>
              <div className={`${mncontBase} gap-2 flex flex-col items-center justify-center`}>
                <h1 className={`${dkCont} ${dkTxt} ${dkCont} w-full text-3xl self-start font-bold py-2`}>Projects</h1>
                <div className=' w-full min-h-[80%] flex items-center justify-center overflow-hidden'>
                  {viewType === 'embed' && viewSource && (
                    <iframe
                      src={viewSource}
                      className='w-full h-full border-none'
                      title='Embedded Site'
                    ></iframe>
                  )}
                  {viewType === 'gallery' && Array.isArray(viewSource) && (
                    <div className="w-full h-full"> {/* Container for the sliding gallery */}
                      <SlidingGallery items={viewSource} />
                    </div>
                  )}
                  {viewType === 'pdf' && viewSource && (
                    <iframe
                      src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(viewSource)}`}
                      width="100%"
                      height="100%"
                      title="PDF Viewer"
                      frameBorder="0"
                    ></iframe>
                  )}
                  {!viewType && (
                    <div className={`${ltTxt} flex flex-col items-center justify-center`}>
                      <i className={`fa-solid fa-diagram-project text-5xl md:text-8xl`} aria-label="No certificate selected"></i>
                      <p className='md:text-2xl text-lg mt-2 md:mt-4'>No project selected</p>
                    </div>
                  )}
                </div>

                <div className={`${dkCont} ${dkTxt} ${dkCont} p-2 w-full h-[20%] overflow-x-auto flex flex-row items-center justify-start`}>
                  <button
                    onClick={() => handleViewChange('embed', 'https://mock-spcf-edu.netlify.app')}
                    className={`${btDkBase} w-auto min-w-[20%] h-auto text-[8px] md:text-md`}>
                    SPCF Website Frontend Improvement Mock-up
                  </button>

                  <button
                    onClick={() => handleViewChange('gallery', battleBots)}
                    className={`${btDkBase} w-auto min-w-[20%] h-auto text-[8px] md:text-md`}>
                    Battlebots
                  </button>

                  <button
                    onClick={() => handleViewChange('pdf', 'https://drive.google.com/uc?id=10DFK4uIDxNduGiW40fdPu21aZXP0tpK4&export=download')}
                    className={`${btDkBase} w-auto min-w-[20%] h-auto text-[8px] md:text-md`}
                    >
                    BaybAIn Sign Language Translator
                  </button>

                </div>
              </div>
            </div>
          </div>

        <footer className={`${ltCont} ${dkTxt} w-full min-h-[10vh] snap-none flex items-center justify-center`}>
            <div className={`${dkCont} w-full h-full p-2`}>
              <div className={`w-full h-full flex flex-col`}>
                  <p className="text-center text-sm" style={{ margin: 0, padding: '0.5em 0' }}>
                  © {new Date().getFullYear()} Cataquian, Ivan Joshua D. All rights reserved.
                </p>
              </div>
            </div>
        </footer>
      </div>

    </div>
    </div>
  )
}

export default App
