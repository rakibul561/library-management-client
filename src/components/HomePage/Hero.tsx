import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero -mt-16">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            Welcome to
            <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient">
              {" "}
              BookNest
            </span>
          </h1>
          <p className="py-6">
            BookNest is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>
          <div className="flex gap-2 justify-center">
            {/* Read Book Button */}
            <Link
              to="/all-books"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-pink-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-pink-500 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500"></span>
              <span className="relative text-black group-hover:text-white">
                Read Books
              </span>
            </Link>

            {/* Bookmarks Button */}
            <Link
              to="/borrow-summary"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-pink-500 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500"></span>
              <span className="relative text-black group-hover:text-white">
                Borrow Book
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
