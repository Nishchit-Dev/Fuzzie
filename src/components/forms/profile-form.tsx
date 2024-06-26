"use client";
import { EditUserProfileSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import {
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
  useForm,
} from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

type Props = { user: any; onUpdate?: any };

const ProfileForm = ({ user, onUpdate }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: "onChange",
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const handleSubmit = async (
    values: z.infer<typeof EditUserProfileSchema>
  ) => {
    setIsLoading(true);
    await onUpdate(values.name);
    setIsLoading(false);

    return "";
  };
  useEffect(() => {
    form.reset({ name: user.name, email: user.email });
  }, [user]);
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          disabled={isLoading }
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-lg">Username</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <FormField
          
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-lg">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" disabled={true} {...field} />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <Button
          type="submit"
          className="self-start text-black hover:bg-violet hover:text-white hover:border-[1px]"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 2-4 animate-spin" />
              Saving
            </>
          ) : (
            "Save user Settings"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
