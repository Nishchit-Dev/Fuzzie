import ProfileForm from "@/components/forms/profile-form";
import React from "react";
import ProfilePicture from "./_components/profile-picture";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

type Props = {};
const Settings = async (props: Props) => {
  const authUser = await currentUser();
  if (!authUser) return null;

  const user = await db.user.findUnique({
    where: { clerkId: authUser.id },
  });
  const updateUserInfo = async (name: string) => {
    "use server";

    const updateUser = await db.user.update({
      where: { clerkId: authUser.id },
      data: { name },
    });

    return updateUser;
  };
  const removeProfileImage = async () => {
    "use server";
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: "",
      },
    });
    return response;
  };

  const uploadProfileImage = async (image: string) => {
    "use server";
    console.log("server callled for saving file");
    const res = await db.user.update({
      where: { clerkId: authUser.id },
      data: {
        profileImage: image,
      },
    });
  };
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Settings
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User profile</h2>
          <p className="text-base text-white/50">
            add or update your information
          </p>
        </div>
        <ProfilePicture
          onDelete={removeProfileImage}
          userImage={user?.profileImage || ""}
          onUpload={uploadProfileImage}
        />
        <ProfileForm user={user} onUpdate={updateUserInfo}/>
      </div>
    </div>
  );
};

export default Settings;
