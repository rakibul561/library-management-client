
import BookCard from "@/components/ui/Card/BookCard";
import { selectBooks } from "@/redux/features/BookSlice";
import { useAppSelector } from "@/redux/hook"


export default function AllBooks() { 
   
  const books = useAppSelector(selectBooks);
  console.log(books);
  


  return (
    <div className=" max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 p-4">

     {
       books.map((book) => <BookCard key={book._id} book= {book} />)
     }
    </div>
  )
}
