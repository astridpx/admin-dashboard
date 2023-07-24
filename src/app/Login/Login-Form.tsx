"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import { ILogin } from "../../../typings";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [data, setData] = useState<ILogin>({
    email: "",
    password: "",
    role: "",
  });

  const HandleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      ...data,
      redirect: false,
      callbackUrl: "/",
    });

    console.log(res);
    if (!res?.error) {
      toast.success("Login Success");

      router.push("/");
    }
    if (res?.error) {
      toast.error(res?.error);
    }
  };

  return (
    <>
      <form
        className="w-3/5  p-4 space-y-4 relative bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-gray-100"
        onSubmit={(e) => HandleLogin(e)}
      >
        <h1 className="text-center font-semibold text-3xl mb-12">Login</h1>

        <Select
          name="role"
          required
          onValueChange={(e) => {
            setData({ ...data, role: e });
          }}
        >
          <SelectTrigger className="text-center bg-white">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Roles</SelectLabel>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="employee">Employee</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="space-y-2">
          <label htmlFor="uname" className="ml-2">
            Email
          </label>
          <Input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            // className="input input-bordered input-info w-full max-w-xs logininput "
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="ml-2">
            Password
          </label>
          <Input
            type="password"
            name="password"
            required
            placeholder="Enter your password"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            // className="input input-bordered input-info w-full max-w-xs logininput"
          />
        </div>
        <Button className="w-full" type="submit">
          Login
        </Button>
      </form>
    </>
  );
}
