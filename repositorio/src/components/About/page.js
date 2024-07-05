import Image from "next/image";

const About = () => {
  return (
    <>
      <h1
        className="text-4xl font-semibold text-gray-800 text-center mb-8"
        id="about"
      >
        About Me
      </h1>
      <div
        className="container mx-auto py-8 px-4 md:px-8 lg:flex lg:items-center"

      >
        <div className="lg:w-1/2 mb-4 md:mb-0">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Hi, I'm Willian! I work as a front-end developer and one of
              the most challenging projects I have ever worked on was the
              development of an MVP of an app. I like to be up to date and be
              informed of the latest trends in the field so I'm very active on
              the dedicated communities on WhatsApp, Discord, and LinkedIn. I
              also keep an eye on technology news in Webnoticiários.  Along with my skills in HTML, CSS, JavaScript, and
              React, I even have some understanding of Python and Linux. Apart
              from my academic and competitive programming experience, I am a
              lifelong learner and am continually seeking to expand my knowledge
              and skills in the world of  
front-end development.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-20 lg:flex lg:justify-center lg:items-center">
          <div className="relative w-500 h-500 flex items-center justify-center">
            <Image
              src="/myFace.jpeg"
              alt="Photo"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
