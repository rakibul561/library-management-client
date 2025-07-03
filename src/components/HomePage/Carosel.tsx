export default function Carosel() {
  return (
    <div>
      <div className="min-h-[calc(108vh-200px)]">
        <header>
          <div
            className="w-full bg-center bg-cover h-[38rem]"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/GQRgjLcZ/book3.jpg')",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="text-center">
                <h1 className="text-3xl  font-semibold text-white lg:text-4xl">
                   📚 Welcome to the <span className="text-yellow-400">BookNest</span> Library <br />
                  <span className="text-yellow-400">
                 
                  </span>
                  .
                </h1>
               
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
