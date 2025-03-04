import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

export default function Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden px-4">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-background to-blue-500/20 animate-pulse" />

      {/* Floating Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-50"
          style={{
            background: `radial-gradient(circle, ${i === 0 ? 'rgba(168, 85, 247, 0.2)' : i === 1 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(236, 72, 153, 0.2)'} 0%, transparent 70%)`,
            left: `${i * 35}%`,
            top: `${i * 25}%`,
          }}
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Authentication Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <Card className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-semibold text-white">Welcome Back</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 bg-white/10 p-1 rounded-lg">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              {/* Login Form */}
              <TabsContent value="login">
                <form className="space-y-4">
                  <Input placeholder="Email" type="email" className="bg-white/10 border-white/20 focus:border-primary text-white" />
                  <Input placeholder="Password" type="password" className="bg-white/10 border-white/20 focus:border-primary text-white" />
                  <Button className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 hover:opacity-90">
                    Login
                  </Button>
                </form>
              </TabsContent>

              {/* Register Form */}
              <TabsContent value="register">
                <form className="space-y-4">
                  <Input placeholder="Name" className="bg-white/10 border-white/20 focus:border-primary text-white" />
                  <Input placeholder="Email" type="email" className="bg-white/10 border-white/20 focus:border-primary text-white" />
                  <Input placeholder="Password" type="password" className="bg-white/10 border-white/20 focus:border-primary text-white" />
                  <Button className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 hover:opacity-90">
                    Register
                  </Button>
                </form>
              </TabsContent>

              {/* Social Login */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Button variant="outline" className="w-full border-white/20 bg-white/10 hover:bg-white/20 text-white">
                  <FaGoogle className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="w-full border-white/20 bg-white/10 hover:bg-white/20 text-white">
                  <FaFacebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="w-full border-white/20 bg-white/10 hover:bg-white/20 text-white">
                  <FaGithub className="w-5 h-5" />
                </Button>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
