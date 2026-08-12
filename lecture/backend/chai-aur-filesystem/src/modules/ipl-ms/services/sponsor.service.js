import ApiError from "../../../common/utils/api-error.js";
import Sponsor from "../models/sponsor.model.js";

const createSponsor = async (name) => {
  const sponsor = await Sponsor.create({ name });

  return sponsor;
};

const getAllSponsors = async () => {
  const sponsors = await Sponsor.find();

  return sponsors;
};

const getSponsorById = async (sponsorId) => {
  const sponsor = await Sponsor.findById(sponsorId);

  console.log(sponsor);

  if (!sponsor) {
    throw ApiError.notFound("Sponsor not found");
  }

  return sponsor;
};

const updateSponsor = async (sponsorId, name) => {
  const sponsor = await Sponsor.findByIdAndUpdate(
    sponsorId,
    { name },
    { new: true, runValidators: true },
  );

  if (!sponsor) {
    throw ApiError.notFound("Sponsor not found");
  }

  return sponsor;
};

const deleteSponsor = async (sponsorId) => {
  const sponsor = await Sponsor.findByIdAndDelete(sponsorId);

  if (!sponsor) {
    throw ApiError.notFound("Sponsor not found");
  }
};

export {
  createSponsor,
  getAllSponsors,
  getSponsorById,
  updateSponsor,
  deleteSponsor,
};
