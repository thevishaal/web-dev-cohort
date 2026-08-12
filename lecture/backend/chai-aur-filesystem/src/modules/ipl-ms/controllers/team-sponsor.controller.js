import * as teamSponsorServices from "../services/team-sponsor.service.js";
import ApiResponse from "../../../common/utils/api-response.js";

const attachSponsor = async (req, res) => {
  const teamSponsor = await teamSponsorServices.attachSponsor(req.body);

  ApiResponse.created(res, "Team sponsor attach successfully", teamSponsor);
};

const detachSponsor = async (req, res) => {
  await teamSponsorServices.detachSponsor(req.body);

  ApiResponse.ok(res, "Team sponsor detach successfully");
};

const getAllTeamSponsors = async (req, res) => {
  const teamSponsors = await teamSponsorServices.getAllTeamSponsors();

  ApiResponse.ok(res, "All TeamSponsors fetched successfully", teamSponsors);
};

const getSponsorsByTeam = async (req, res) => {
  const sponsorsByTeam = await teamSponsorServices.getSponsorsByTeam(req.body);

  ApiResponse.ok(res, "All sponsors by Team", sponsorsByTeam);
};

const getTeamsBySponsor = async (req, res) => {
  const teamsBySponsor = await teamSponsorServices.getTeamsBySponsor(req.body);

  ApiResponse.ok(res, "All teams by sponsor", teamsBySponsor);
};

export {
  attachSponsor,
  detachSponsor,
  getAllTeamSponsors,
  getSponsorsByTeam,
  getTeamsBySponsor,
};
