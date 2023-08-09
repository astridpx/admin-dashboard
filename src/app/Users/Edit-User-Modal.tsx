"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
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
import editUserStore from "@/lib/zustand/UserPage-store/Edit-User-Data-Store";
import { UpdateUser } from "./APIs/api";

export default function EditUserModal() {
  const queryClient = useQueryClient();
  const { userEditData, showEditUserModal, setShowEditModal, editUserId } =
    editUserStore();
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    address: "",
  });

  useEffect(() => {
    if (userEditData) {
      setUserData({
        first_name: userEditData.first_name,
        last_name: userEditData.last_name,
        email: userEditData.email,
        gender: userEditData.gender,
        address: userEditData.address,
      });
    }
  }, [userEditData]);

  const updateUserMutation = useMutation({
    // mutationFn: UpdateUser(),
    mutationFn: () => UpdateUser({ ...userData }, editUserId),
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setUserData({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        address: "",
      });

      toast.success(data?.message);
      setShowEditModal(!showEditUserModal);
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateUserMutation.mutate();
  };

  return (
    <>
      <section
        className={`${
          showEditUserModal ? "flex" : "hidden"
        } h-screen w-screen  bg-black/75 bg-opacity-95 items-center justify-center absolute z-20`}
      >
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="h-max w-5/6 border border-gray-900/10 shadow-md rounded bg-white  p-4"
        >
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Edit Personal Information
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
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
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
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
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
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
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
                  value={userData.gender}
                  onValueChange={(e) => setUserData({ ...userData, gender: e })}
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
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    })
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
              disabled={updateUserMutation?.isLoading}
              onClick={() => setShowEditModal(!showEditUserModal)}
              // className="bg-red-500 hover:bg-red-600"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={updateUserMutation?.isLoading}
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
