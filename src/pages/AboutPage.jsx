import HeroImage from '../assets/hero.png'

const AboutPage = () => {
  const emailAddress = 'ingrit1216@gmail.com';

  return (
    <>      
      <div className='mt-16 p-7'>
        <div className='flex flex-col lg:grid lg:grid-cols-3 justify-center items-center mb-12 gap-8 lg:gap-0'>
          <img src={HeroImage} alt="hero" data-aos="fade-right" className="w-60 h-60 lg:mb-0 lg:w-full md:h-64 lg:h-96 object-cover object-top lg:object-contain"/>      
          <div data-aos="fade-left" className='max-w-4xl col-span-2'>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-5">
              <h5 className="mb-2 text-2xl lg:text-3xl font-bold tracking-tight text-secondary">About Me</h5>
              <p className="mb-2 font-normal text-primary">
                Having successfully contributed to maintaining and elevating product standards, I am well-versed in the intricacies of QA processes,
                including test planning, execution, defect identification, and resolution . Well-driven work to collaborate in a team, highly experienced in
                brainstorming situations. As a person who had experience working in a top tech start-up before, I experienced working in a hustle and
                pressure environment in order to accomplish goals that had been set.
              </p>
              <div className='flex justify-center items-center md:justify-normal gap-3'>
                <a className='hover:scale-105 duration-150 shadow-md' href="https://www.linkedin.com/in/inggrit-pondaag16/" target="_blank" rel="noopener noreferrer">
                  <svg className='hover:fill-secondary fill-third w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.5 416H69V202.2h66.5V416zm-33.2-240c-21.9 0-39.6-17.8-39.6-39.6 0-21.9 17.8-39.6 39.6-39.6s39.6 17.8 39.6 39.6c-.1 21.8-17.8 39.6-39.6 39.6zM416 416h-66.5V304.4c0-24.1-.5-55.1-33.5-55.1-33.5 0-38.6 26.2-38.6 53.4V416h-66.5V202.2h63.8v28.4h.9c8.9-16.9 30.6-34.6 62.9-34.6 67.2 0 79.6 44.3 79.6 101.9V416z"/>
                  </svg>
                </a>

                <a className='hover:scale-105 duration-150 shadow-md' href="https://www.instagram.com/inggritpondaag/" target="_blank" rel="noopener noreferrer">
                  <svg className='hover:fill-secondary fill-third w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/>
                  </svg>
                </a>


                <a className='hover:scale-105 duration-150 shadow-md' href="https://www.facebook.com/profile.php?id=100005495714313" target="_blank" rel="noopener noreferrer">
                  <svg className='hover:fill-secondary fill-third w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/>
                  </svg>
                </a>
              </div>
            </div>
            <a href={`mailto:${emailAddress}`}>
              <button type="button" className="bg-transparent hover:bg-secondary text-secondary hover:text-white block md:hidden border-2 hover:scale-105 duration-150 font-medium text-xl rounded-lg mx-auto px-4 py-2 text-center focus:ring-2 ring-white">
                Email Me
              </button>
            </a>
          </div>   

        </div>
      
        <div className='flex flex-col lg:flex-row justify-around mb-14 gap-12'>
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-7">Experience</h3>
            <ol data-aos="zoom-in-left" className="relative border-s border-white">                  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Oct 2023 - Present</time>
                    <h3 className="text-lg font-semibold text-secondary">Asuransi Astra</h3>
                    <p className="mb-4 text-base font-normal text-gray-300">Quality Control</p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Apr 2023 - Aug 2023</time>
                    <h3 className="text-lg font-semibold text-secondary">PT Enkripsi Teknologi Handal</h3>
                    <p className="mb-4 text-base font-normal text-gray-300">Quality Assurance Intern</p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Aug 2022 - Dec 2022</time>
                    <h3 className="text-lg font-semibold text-secondary">Traveloka Indonesia</h3>
                    <p className="text-base font-normal text-gray-300">Quality Assurance Intern</p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Feb 2023 - Mar 2023</time>
                    <h3 className="text-lg font-semibold text-secondary">RevoU</h3>
                    <p className="text-base font-normal text-gray-300">Participant in Product Management Mini Course</p>
                </li>          
            </ol>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-7">Education</h3>
            <ol data-aos="zoom-in-left" className="relative border-s border-white">                  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Aug 2019 - Aug 2023</time>
                    <h3 className="text-lg font-semibold text-secondary">Universitas Sam Ratulangi</h3>
                    <p className="mb-4 text-base font-normal text-gray-300">Bachelor Degree in Informatics Engineering, 3.95/4.00</p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">Feb 2022 - Jun 2022</time>
                    <h3 className="text-lg font-semibold text-secondary">Alterra Academy</h3>
                    <p className="text-base font-normal text-gray-300">Participant in Be The Best Top Search Quality Engineer Program</p>
                </li>                    
            </ol>
          </div>
        </div>

        <div className='flex justify-center items-center'>
          <div className='max-w-5xl text-center w-full md:w-[80%]'>
            <h3 className="text-3xl font-bold text-secondary mb-7">Skills</h3>                
            <ul className="flex flex-col text-sm md:text-lg font-medium text-white bg-secondary border border-third rounded-lg ">
                <li data-aos="fade-right" className="w-full px-4 py-2 border-b-4 border-primary rounded-t-lg">Manual Testing</li>
                <li data-aos="fade-left" className="w-full px-4 py-2 border-b-4 border-primary">Automation Testing</li>
                <li data-aos="fade-right" className="w-full px-4 py-2 border-b-4 border-primary">Java</li>
                <li data-aos="fade-left" className="w-full px-4 py-2 border-b-4 border-primary">Python</li>
                <li data-aos="fade-left" className="w-full px-4 py-2 border-b-4 border-primary">Javascript</li>
                <li data-aos="fade-right" className="w-full px-4 py-2 border-b-4 border-primary">SQL</li>
                <li data-aos="fade-left" className="w-full px-4 py-2 border-b-4 border-primary">Selenium</li>
                <li data-aos="fade-right" className="w-full px-4 py-2 border-b-4 border-primary">Cucumber</li>
                <li data-aos="fade-left" className="w-full px-4 py-2 border-b-4 border-primary">Rest Assured</li>
                <li data-aos="fade-right" className="w-full px-4 py-2 rounded-b-lg">SDLC</li>
            </ul>
          </div>

        </div>

      </div>
    </>
  )
}

export default AboutPage
