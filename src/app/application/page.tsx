
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Trabaja con nosotros</h1>
        <p className="text-gray-500 dark:text-gray-400">Fill out the form below to submit your application.</p>
      </div>
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 555-5555" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="resume">Resume</Label>
          <Input id="resume" type="file" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cover-letter">Cover Letter</Label>
          <Textarea
            id="cover-letter"
            placeholder="Tell us about your experience and why you're a good fit for this role."
            className="min-h-[150px]"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Submit Application
        </Button>
      </form>
    </div>
  )
}