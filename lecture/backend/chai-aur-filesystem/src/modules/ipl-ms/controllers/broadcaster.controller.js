import ApiResponse from "../../../common/utils/api-response.js";
import * as broadcasterServices from "../services/broadcaster.service.js";

const createBroadcaster = async (req, res) => {
  const broadcaster = await broadcasterServices.createBroadcaster(req.body);

  ApiResponse.created(res, "Broadcaster created successfully", broadcaster);
};

const getAllBroadcasters = async (req, res) => {
  const broadcasters = await broadcasterServices.getAllBroadcasters();

  ApiResponse.ok(res, "All Broadcasters fetched successfully", broadcasters);
};

const getBroadcasterById = async (req, res) => {
  const broadcaster = await broadcasterServices.getBroadcasterById(
    req.params.id,
  );

  ApiResponse.ok(res, "Broadcaster fetched successfully", broadcaster);
};

const updateBroadcaster = async (req, res) => {
  const broadcaster = await broadcasterServices.updateBroadcaster(
    req.params.id,
    req.body,
  );

  ApiResponse.ok(res, "Broadcaster updated successfully", broadcaster);
};

const deleteBroadcaster = async (req, res) => {
  await broadcasterServices.deleteBroadcaster(req.params.id);

  ApiResponse.ok(res, "Broadcaster fetched successfully");
};

export {
  createBroadcaster,
  getAllBroadcasters,
  getBroadcasterById,
  updateBroadcaster,
  deleteBroadcaster,
};
