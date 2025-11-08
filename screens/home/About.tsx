import Image from "next/image";

export default function About() {
  return (
    <section className="sm:min-h-screen w-full bg-[#0c0c0c] text-gray-100 flex items-center justify-center lg:py-20 z-2">
      <div className="bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[20px_20px] flex relative flex-col lg:flex-row items-center justify-between w-full gap-12 md:gap-16 md:py-20 max-sm:px-8 sm:px-30">
        
        <div className="max-md:pt-12 flex-1 text-left space-y-6 sm:space-y-8 z-2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gray-100">
            Hello,
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 sm:font-light">
            I’m Yathartha, a developer based in Bangalore, India.
          </p>

          <div className="space-y-4 sm:space-y-5 max-w-2xl text-gray-400 leading-relaxed text-[0.95rem] sm:text-base">
            <p>
              I'm passionate about creating products that solve real world problems. I enjoy hands-on projects and learning by doing.
            </p>

            <p>
              I'm a <span className="text-gray-300">Computer Science</span> student at <span className="text-gray-300">PES University</span>, specialising in <span className="text-gray-300">AI and Machine Learning</span>. 
              Though I've spent most of my time working on web applications, I'm also very interested in other domains like DevOps, Cloud Computing, and AIML.
            </p>

            <p>
              Outside of work, I love hiking, sports, and video games. I'm always eager to connect with like-minded individuals, so feel free to reach out!
            </p>
          </div>

          
        </div>

        <div className="flex-1 flex justify-center md:justify-end max-md:hidden">
          <div className="w-64 h-64 md:w-72 md:h-72 lg:w-64 lg:h-64 xl:w-96 xl:h-96 rounded-lg overflow-hidden border border-gray-800 bg-[#0a0a0a]">
            <Image
              width={800}
              height={800}
              src="/profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover transition duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
