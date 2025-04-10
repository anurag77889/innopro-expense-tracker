"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { db } from "@/utils/dbConfig.jsx";
import { Budgets } from "@/utils/schema";
import * as Dialog from "@radix-ui/react-dialog";

function CreateBudget({ refreshData }) {
  const [emojiIcon, setEmojiIcon] = useState("😊");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const { user } = useUser();

  const onCreateBudget = async () => {
    const result = await db
      .insert(Budgets)
      .values({
        name: name,
        amount: amount,
        icon: emojiIcon,
        createdBy: user?.primaryEmailAddress?.emailAddress,
      })
      .returning({ insertedId: Budgets.id });

    if (result) {
      refreshData();
      toast("New Budget Created!");
    }
  };

  return (
    <div className="mt-5">
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 cursor-pointer border-dashed hover:shadow-md">
            <h2 className="text-3xl">+</h2>
            <h2>Create New Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription></DialogDescription>
            <div className="mt-5">
              <Button
                variant={"outline"}
                onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                className={"cursor-pointer text-lg"}
                size="lg"
              >
                {emojiIcon}
              </Button>

              {openEmojiPicker && (
                <div className="absolute z-50">
                  <EmojiPicker
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji);
                      setOpenEmojiPicker(false);
                    }}
                  />
                </div>
              )}

              <div className="mt-2">
                <label className="text-black font-medium my-1 block">
                  Budget Name
                </label>
                <Input
                  placeholder="e.g. Home Decor"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <label className="text-black font-medium my-1 block">
                  Budget Amount
                </label>
                <Input
                  placeholder="e.g. &#8377;5000"
                  type="number"
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
            </div>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!(name && amount)}
                className={"mt-5 w-full cursor-pointer"}
                onClick={onCreateBudget}
              >
                Create New Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateBudget;
