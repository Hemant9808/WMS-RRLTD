import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"
import { useState } from "react"

export default function AddNoteDialog() {
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState("12-05--ID Number")
  const [detail, setDetail] = useState("")

  const handleSubmit = () => {
    console.log({ title, detail })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Note</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md rounded-xl">
        <DialogHeader className="relative">
          <DialogTitle className="text-gray-800 text-lg">Add Note</DialogTitle>
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-black"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <div>
            <label className="text-sm text-gray-700">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Note Detail</label>
            <Textarea
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              placeholder="Type"
              rows={4}
              className="mt-1"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-2 border-t mt-4">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="text-gray-700 border-gray-300"
            >
              Cancel
            </Button>
            <Button
              className="bg-green-700 hover:bg-green-800 text-white"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
