import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button.tsx"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

type TFormData = {
  name: string,
  email: string,
  password: string
}

const Register = () => {
  const [formData, setFormData] = useState<TFormData>({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('FormData Submitted:', formData);
    setFormData({
      name: '',
      email: '',
      password:
        ''
    })
  }
  return (
    <Card className="max-w-[316px] mt-2 bg-transparent backdrop-blur-[10px] border-none text-white">
      <CardHeader>
        <CardTitle>Create Your Account</CardTitle>
        <CardDescription className="text-neutral-400">Get organized with ease. Sign up to start managing your tasks effortlessly.

        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Asad"
            required
            className="mt-1 mb-4 text-black"
          />

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="asad@gmail.com"
            required
            className="mt-1 mb-4 text-black"
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="mt-1 text-black"
          />

        </CardContent>

        <CardFooter className="w-full">
          <Button type="submit" className="w-full ">Register</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default Register