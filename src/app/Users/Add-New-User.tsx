"use client";

import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import toast from "react-hot-toast";
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
import addUserModalStore from "@/lib/zustand/UserPage-store/AddNew-Modal-store";
import { addNewUser } from "./APIs/api";

export default function AddNewUser() {
  const queryClient = useQueryClient();
  const { toggleShowUserForm, showAddUserForm } = addUserModalStore();
  const [userData, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    address: "",
    password: "",
  });

  const userMutation: any = useMutation({
    mutationFn: addNewUser,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setData({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        address: "",
        password: "",
      });
      toggleShowUserForm(!showAddUserForm);
      console.log("success bro!");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
  });

  const HandleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (
      userData.first_name.trim() === "" ||
      userData.last_name.trim() === "" ||
      userData.email.trim() === "" ||
      userData.gender.trim() === "" ||
      userData.address.trim() === "" ||
      userData.password.trim() === ""
    ) {
      return toast.error("All field must be filled up.");
    }

    await userMutation.mutate({ ...userData });
  };

  return (
    <>
      <section
        className={`${
          showAddUserForm ? "block" : "hidden"
        } h-screen w-screen  bg-black/75 bg-opacity-95 flex items-center justify-center absolute z-20`}
      >
        <form className="h-max w-5/6 border border-gray-900/10 shadow-md rounded bg-white  p-4">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="first_name"
                  required
                  value={userData.first_name}
                  placeholder="Enter your first name"
                  onChange={(e) =>
                    setData({ ...userData, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="last_name"
                  required
                  value={userData.last_name}
                  placeholder="Enter your last name"
                  onChange={(e) =>
                    setData({ ...userData, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>

            {/* <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                />
              </div>
            </div> */}

            {/* <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <Select>
                <SelectTrigger name="country" className="text-center bg-white">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Country</SelectLabel>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="employee">Employee</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div> */}

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <Input
                  type="email"
                  name="email"
                  required
                  value={userData.email}
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setData({ ...userData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <Select
                  onValueChange={(e) => setData({ ...userData, gender: e })}
                >
                  <SelectTrigger name="gender" className="text-center bg-white">
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gender</SelectLabel>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* <Input
                  type="text"
                  name="gender"
                  required
                  value={userData.gender}
                  placeholder="Enter your gender"
                  onChange={(e) =>
                    setData({ ...userData, [e.target.name]: e.target.value })
                  }
                /> */}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="address"
                  required
                  value={userData.address}
                  placeholder="Enter your address"
                  onChange={(e) =>
                    setData({ ...userData, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>

            {/*  */}
            <div className="col-span-full">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <Input
                  type="password"
                  name="password"
                  required
                  value={userData.password}
                  placeholder="Enter your password"
                  onChange={(e) =>
                    setData({ ...userData, [e.target.name]: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* BUTTON FOOTER */}
          <div className=" flex justify-end space-x-4 mt-8">
            <Button
              variant="outline"
              type="button"
              onClick={() => {
                toggleShowUserForm(!showAddUserForm);
                setData({
                  first_name: "",
                  last_name: "",
                  email: "",
                  gender: "",
                  address: "",
                  password: "",
                });
              }}
              // className="bg-red-500 hover:bg-red-600"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={(e) => HandleSubmit(e)}
              // className="bg-blue-500 hover:bg-blue-600"
            >
              Save
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
