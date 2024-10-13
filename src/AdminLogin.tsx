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

const AdminLogin = () => {
  return (
    <div className="h-screen w-full open-sans">
      <Header />
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
                  <Input id="name" type="email" placeholder="Your email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Password</Label>
                  <Input
                    id="name"
                    type="password"
                    placeholder="Your password"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Clear</Button>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
