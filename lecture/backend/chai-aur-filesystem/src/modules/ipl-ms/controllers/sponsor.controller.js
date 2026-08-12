import ApiError from "../../../common/utils/api-error.js";
import ApiResponse from "../../../common/utils/api-response.js";
import * as sponsorServices from "../services/sponsor.service.js";

const createSponsor = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw ApiError.badRequest("Sponsor name is required");
  }

  const sponsor = await sponsorServices.createSponsor(name);

  ApiResponse.created(res, "Sponsor created successfully", sponsor);
};

const getAllSponsors = async (req, res) => {
  const sponsors = await sponsorServices.getAllSponsors();

  ApiResponse.ok(res, "All sponsors fetched successfully", sponsors);
};

const getSponsorById = async (req, res) => {
  const sponsor = await sponsorServices.getSponsorById(req.params.id);

  ApiResponse.ok(res, "Sponsor fetched successfully", sponsor);
};

const updateSponsor = async (req, res) => {
  const sponsor = await sponsorServices.updateSponsor(
    req.params.id,
    req.body.name,
  );

  ApiResponse.ok(res, "Sponsor updated  successfully", sponsor);
};

const deleteSponsor = async (req, res) => {
  await sponsorServices.deleteSponsor(req.params.id);

  ApiResponse.ok(res, "Sponsor deleted successfully");
};

export {
  createSponsor,
  getAllSponsors,
  getSponsorById,
  updateSponsor,
  deleteSponsor,
};
