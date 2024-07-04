import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-8 lg:flex lg:items-center">
      <div className="lg:w-1/2 mb-4 md:mb-0">
        <div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
            magna ac arcu sodales placerat. Aenean eros felis, ultricies et
            finibus sit amet, molestie vel sapien.
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
  );
};

export default About;
