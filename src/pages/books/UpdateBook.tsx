import { useUpdateBookMutation } from "@/api/bookApi";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, type SubmitHandler, type FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useEffect } from "react";

interface UpdateBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues: any; // the book object to update
}

export function UpdateBookModal({ isOpen, onClose, defaultValues }: UpdateBookModalProps) {
  const form = useForm({
    defaultValues: {
      title: "",
      author: "",
      image: "",
      genre: "",
      isbn: "",
      copies: 0,
      available: true,
      description: "",
    },
  });

  const [updateBook, { isLoading }] = useUpdateBookMutation();

  useEffect(() => {
    if (defaultValues) {
      form.reset(defaultValues);
    }
  }, [defaultValues, form]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await updateBook({ id: defaultValues._id, updatedData: data }).unwrap();
      toast.success("Book updated successfully!");
      onClose(); 
    } catch (error) {
      toast.error("Failed to update book");
      console.error("Update error:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Book</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <FormField control={form.control} name="title" render={({ field }) => (
              <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
            )} />

            {/* Author */}
            <FormField control={form.control} name="author" render={({ field }) => (
              <FormItem><FormLabel>Author</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
            )} />

            {/* Image */}
            <FormField control={form.control} name="image" render={({ field }) => (
              <FormItem><FormLabel>Image</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
            )} />

            {/* Genre */}
            <FormField control={form.control} name="genre" render={({ field }) => (
              <FormItem>
                <FormLabel>Genre</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="w-full">
                    <SelectTrigger><SelectValue placeholder="Select Genre" /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="FICTION">FICTION</SelectItem>
                    <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                    <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                    <SelectItem value="HISTORY">HISTORY</SelectItem>
                    <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                    <SelectItem value="FANTASY">FANTASY</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )} />

            {/* ISBN */}
            <FormField control={form.control} name="isbn" render={({ field }) => (
              <FormItem><FormLabel>ISBN</FormLabel><FormControl><Input {...field} /></FormControl></FormItem>
            )} />

            {/* Copies */}
            <FormField control={form.control} name="copies" render={({ field }) => (
              <FormItem>
                <FormLabel>Copies</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    value={field.value}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
              </FormItem>
            )} />

        

            {/* Description */}
            <FormField control={form.control} name="description" render={({ field }) => (
              <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} /></FormControl></FormItem>
            )} />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Updating..." : "Update"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

 