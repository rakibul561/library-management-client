import { useBorrowBookMutation } from "@/api/bookApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// ✅ Form value types
interface BorrowFormValues {
  quantity: number;
  dueDate: string;
}

// ✅ Props type
interface AddBorrowBookProps {
  bookId: string;
}

export function AddBorrowBook({ bookId }: AddBorrowBookProps) {
  const form = useForm<BorrowFormValues>({
    defaultValues: {
      quantity: 1,
      dueDate: "",
    },
  });

  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const onSubmit = async (data: BorrowFormValues) => {
    try {
      const payload = {
        book: bookId,
        quantity: data.quantity, // ✅ already a number
        dueDate: data.dueDate,
      };

      console.log("Borrow Payload:", payload);

      await borrowBook(payload).unwrap();
      toast.success("Book borrowed successfully!");
      form.reset();
    } catch (error) {
      toast.error("Failed to borrow book.");
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-green-600 text-white">
          Borrow Book
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Quantity */}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      value={field.value}
                      onChange={(e) =>
                        field.onChange(e.target.valueAsNumber)
                      } // ✅ parse number
                      min={1}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Due Date */}
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Borrowing..." : "Borrow Book"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
