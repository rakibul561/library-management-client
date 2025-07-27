import { AddTaskModel } from "./books/AddBooksModal";

export default function AddBook() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-[calc(108vh-200px)]">
      <header>
        <div
          className="w-full bg-center bg-cover h-[38rem]"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/GQ22pcSN/Shelves-CC.jpg')",
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl space-y-4 p-4 font-semibold text-white lg:text-4xl">
                Add your first <span className="text-red-500">Book</span> and
                begin <br />{" "}
                <span className="text-yellow-400">
                  Organizing your Reading World
                </span>
                .
              </h1>

              <div className="mt-12">
                <AddTaskModel />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}