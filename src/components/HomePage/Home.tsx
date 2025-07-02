import AllBooks from "@/pages/AllBooks";
import Carosel from "./Carosel";

export default function Home() {
  return (
    <div>
      <Carosel />
      <div>
        <div className="text-center justify-center mt-8 mb-8 ">
          <h2 className="text-3xl font-bold">All Books</h2>
          <hr />
          <p className="text-xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto <br />
            repellendus, quam consectetur sapiente repellat recusandae est
            voluptas error vero quos.
          </p>
        </div>
        <AllBooks />
      </div>
    </div>
  );
}
