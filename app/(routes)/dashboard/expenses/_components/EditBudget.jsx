"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Budgets } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";
import { db } from "@/utils/dbConfig.jsx";

function EditBudget({ budgetInfo, refreshData }) {
  const [emojiIcon, setEmojiIcon] = useState("💰");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  // Sync incoming prop data into local state
  useEffect(() => {
    if (budgetInfo) {
      setEmojiIcon(budgetInfo.icon || "💰");
      setName(budgetInfo.name || "");
      setAmount(budgetInfo.amount || 0);
    }
  }, [budgetInfo]);

  const onUpdateBudget = async () => {
    if (!budgetInfo?.id) return;

    const result = await db
      .update(Budgets)
      .set({
        name: name,
        amount: amount,
        icon: emojiIcon,
      })
      .where(eq(Budgets.id, budgetInfo.id))
      .returning();

    if (result?.length > 0) {
      refreshData();
      toast("Budget Updated!");
    } else {
      toast("Something went wrong while updating.");
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex gap-2 cursor-pointer">
            <Pen />
            Edit
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Budget</DialogTitle>
            <DialogDescription></DialogDescription>

            <div className="mt-5">
              <Button
                variant="outline"
                onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                className="cursor-pointer text-lg"
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <label className="text-black font-medium my-1 block">
                  Budget Amount
                </label>
                <Input
                  placeholder="e.g. ₹5000"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
            </div>
          </DialogHeader>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!name || !amount}
                className="mt-5 w-full cursor-pointer"
                onClick={onUpdateBudget}
              >
                Update Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditBudget;
