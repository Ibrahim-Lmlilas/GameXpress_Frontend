import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff } from "lucide-react"

export default function AuthForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <form>
              <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-login">Email</Label>
                  <Input id="email-login" type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-login">Password</Label>
                  <div className="relative">
                    <Input id="password-login" type={showPassword ? "text" : "password"} required />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400 hover:text-gray-500"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="remember" className="text-sm font-normal">
                      Remember me
                    </Label>
                  </div>
                  <Button variant="link" className="px-0 font-normal">
                    Forgot password?
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Sign in</Button>
              </CardFooter>
            </form>
          </TabsContent>

          <TabsContent value="register">
            <form>
              <CardHeader>
                <CardTitle className="text-2xl">Create an account</CardTitle>
                <CardDescription>Enter your information to create an account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-register">Email</Label>
                  <Input id="email-register" type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-register">Password</Label>
                  <div className="relative">
                    <Input id="password-register" type={showPassword ? "text" : "password"} required />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400 hover:text-gray-500"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <div className="relative">
                    <Input id="confirm-password" type={showConfirmPassword ? "text" : "password"} required />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400 hover:text-gray-500"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      <span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    required
                  />
                  <Label htmlFor="terms" className="text-sm font-normal">
                    I agree to the{" "}
                    <Button variant="link" className="h-auto p-0 font-normal">
                      Terms of Service
                    </Button>{" "}
                    and{" "}
                    <Button variant="link" className="h-auto p-0 font-normal">
                      Privacy Policy
                    </Button>
                  </Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Create account</Button>
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
