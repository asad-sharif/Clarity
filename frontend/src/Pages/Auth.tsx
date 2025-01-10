import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link, Outlet } from "react-router-dom"

const Auth = () => {
  return (
    <div className='max-w-[320px] lg:max-w-[400px] mx-auto h-[100vh] flex flex-col justify-center items-center'>


        <Tabs 
        defaultValue="login" 
        className="w-full h-screen md:h-[90%] lg:h-[80%] flex flex-col justify-center items-center py-12 rounded-xl shadow-lg sm:border-2 sm:border-neutral-500/30 bg-transparent backdrop-blur-[10px]">
          <TabsList className="w-[90%] bg-black">
            <Link to='.' className="w-1/2 text-center">
              <TabsTrigger value="login" className="w-full">Login</TabsTrigger>
            </Link>
            <Link to='register' className="w-1/2 text-center">
              <TabsTrigger value="register" className="w-full">Register</TabsTrigger>
            </Link>
          </TabsList>

          <Outlet />
        </Tabs>

    </div>
  )
}

export default Auth