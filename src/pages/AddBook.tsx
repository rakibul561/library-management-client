import { AddTaskModel } from "./books/AddBooksModal";
import books from "../../src/assets/books.jpg";
export default function AddBook() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-[calc(108vh-200px)]">
      <header>
        <div
          className="w-full bg-center bg-cover h-[38rem]"
          style={{
            backgroundImage: `url(${books})`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow">
                📚 Build a Community, One Book at a Time
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 drop-shadow">
                Add your books and help others discover amazing stories.
              </p>

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
