import TiltedCard from '@/components/TiltedCard';

const Whatth = () => {
  return (
    <section className="w-full py-20 px-6 bg-gray-900 text-white flex flex-col items-center">
      {/* Yuqori qism: Sarlavha va Tavsif */}
      <div className="max-w-4xl text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What is <span className="text-blue-400">TOTC?</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          TOTC is a platform that allows educators to create online classes whereby they can 
          store the course materials online; manage assignments, quizzes and exams; monitor 
          due dates; grade results and provide students with feedback all in one place.
        </p>
      </div>

      {/* Pastki qism: Ikkita Tilted Karta */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl justify-items-center">
        
        {/* O'qituvchilar uchun TiltedCard */}
        <TiltedCard
          imageSrc="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
          altText="For Instructors"
          captionText="Instructors Dashboard"
          containerHeight="400px"
          containerWidth="100%"
          imageHeight="400px"
          imageWidth="100%"
          rotateAmplitude={10}
          scaleOnHover={1.03}
          showMobileWarning={false}
          displayOverlayContent
          overlayContent={
            <div className="flex flex-col items-center justify-center h-full bg-black/40 rounded-3xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wider text-white">
                For Instructors
              </h3>
              <button className="px-8 py-3 border-2 border-white/50 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium text-white">
                Enter access code
              </button>
            </div>
          }
        />

        {/* Talabalar uchun TiltedCard */}
        <TiltedCard
          imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
          altText="For Students"
          captionText="Students Learning"
          containerHeight="400px"
          containerWidth="100%"
          imageHeight="400px"
          imageWidth="100%"
          rotateAmplitude={10}
          scaleOnHover={1.03}
          showMobileWarning={false}
          displayOverlayContent
          overlayContent={
            <div className="flex flex-col items-center justify-center h-full bg-black/40 rounded-3xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wider text-white">
                For Students
              </h3>
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300 font-medium text-white">
                Start a class today
              </button>
            </div>
          }
        />

      </div>
    </section>
  );
};

export default Whatth;