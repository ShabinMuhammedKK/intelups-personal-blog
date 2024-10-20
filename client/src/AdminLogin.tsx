import Header from "./components/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import adminBg from "/assets/admin-bg.jpg";
import { useState } from "react";
import { ADMIN_LOGIN_URL } from "./constants";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch(ADMIN_LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
        credentials: "include",
      });

      if(response.ok && document.cookie){
       
        navigate("/admin/dashboard")
      }
    } catch (error) {
      console.error("error during login", error);
    }
  };

  return (
    <div className="h-screen w-full open-sans">
      <Header isAdmin={false}/>
      <div
        className="flex justify-center  h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${adminBg})` }}
      >
        <Card className="w-[350px] h-fit rounded-[4px] mt-20 xl:mt-60">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>
              Effortlessly manage and publish your blogs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    placeholder="Your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Clear</Button>
            <Button onClick={handleSubmit}>Login</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
