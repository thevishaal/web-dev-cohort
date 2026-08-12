import Broadcaster from "../models/broadcaster.model.js";
import ApiError from "../../../common/utils/api-error.js";

const createBroadcaster = async ({ name }) => {
  const broadcaster = await Broadcaster.create({ name });

  return broadcaster;
};

const getAllBroadcasters = async () => {
  const broadcasters = await Broadcaster.find();
  return broadcasters;
};

const getBroadcasterById = async (broadcasterId) => {
  const broadcaster = await Broadcaster.findById(broadcasterId);

  if (!broadcaster) {
    throw ApiError.notFound("Broadcaster not found");
  }

  return broadcaster;
};

const updateBroadcaster = async (broadcasterId, { name }) => {
  const broadcaster = await Broadcaster.findByIdAndUpdate(
    broadcasterId,
    { name },
    { new: true, runValidators: true },
  );

  if (!broadcaster) {
    throw ApiError.notFound("Broadcaster not found");
  }

  return broadcaster;
};

const deleteBroadcaster = async (broadcasterId) => {
  const broadcaster = await Broadcaster.findByIdAndDelete(broadcasterId);

  if (!broadcaster) {
    throw ApiError.notFound("Broadcaster not found");
  }
};

export {
  createBroadcaster,
  getAllBroadcasters,
  getBroadcasterById,
  updateBroadcaster,
  deleteBroadcaster,
};
