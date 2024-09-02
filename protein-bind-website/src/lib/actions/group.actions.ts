"use server";
import mongoose from "mongoose";
import Group from "../database/models/group.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
export async function createGroup(
  groupName: string,
  creatorId: string,
  memberIds: string[] = []
) {
  try {
    await connectToDatabase();
    const members = Array.from(
      new Set([
        creatorId,
        ...memberIds.map((id) => new mongoose.Types.ObjectId(id)),
      ])
    );
    const newGroup = await Group.create({
      name: groupName,
      createdBy: creatorId,
      members,
    });
    return JSON.parse(JSON.stringify(newGroup));
  } catch (error) {
    console.error("Error creating group: ", error);
    handleError(error);
  }
}
