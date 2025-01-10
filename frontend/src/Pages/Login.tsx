import React from 'react'
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
  email: string,
  password: string
}

const Login:React.FC = () => {
  const [formData, setFormData] = React.useState<TFormData>({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('FormData Submitted:', formData)
    setFormData({
      email: '',
      password: ''
    })
  }

  return (
    <Card className="max-w-[316px] mt-2 bg-transparent backdrop-blur-[10px] border-none text-white">
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
        <CardDescription className="text-neutral-400">Please enter your credentials to access your tasks.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name='email'
            placeholder="asad@gmail.com"
            required
            className="mt-1 mb-4 text-black"
            value={formData.email}
            onChange={handleChange}
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name='password'
            placeholder="Password"
            required
            className="mt-1 text-black"
            value={formData.password}
            onChange={handleChange}
          />


        </CardContent>

        <CardFooter className="w-full">
          <Button type='submit' className="w-full">Login</Button>
        </CardFooter>
      </form>
    </Card >
  )
}

export default Login