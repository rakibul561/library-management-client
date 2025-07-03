import App from "@/App";
import Home from "@/components/HomePage/Home";
import AddBook from "@/pages/AddBook";
import AllBooks from "@/pages/AllBooks";
import { BorrowSummary } from "@/pages/BorrowSummary";
import { createBrowserRouter } from "react-router";



  const router = createBrowserRouter([
         {
            path: '/',
           Component: App,
           children: [
            {
               path: '/',
               Component:Home,
            },
            {
                path: 'add-books',
                Component: AddBook
            },
            {
                path: 'all-books',
                Component: AllBooks
            },
            {
                path: 'borrow-summary',
                Component: BorrowSummary
            }
           ]
         }
  ])



  export default router ;