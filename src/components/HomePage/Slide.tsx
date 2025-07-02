interface SlideProps {
  image: string;
}

const Slide = ({ image }: SlideProps) => {
  return (
    <div
      className="bg-center bg-cover h-[38rem]  relative"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-black/70  px-6">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-500 leading-snug drop-shadow-md">
            📚 Welcome to the Digital Library
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 font-medium leading-relaxed">
            A world of knowledge at your fingertips. Browse thousands of books,
            track borrowed items, and manage your reading journey — all in one place.
          </p>

          <p className="mt-4 text-[#34D399] text-base md:text-lg font-semibold tracking-wide">
            📖 Read Anywhere | 🕒 24/7 Access | 📚 Learn More
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
