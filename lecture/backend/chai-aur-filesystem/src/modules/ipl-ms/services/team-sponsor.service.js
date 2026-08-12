import ApiError from "../../../common/utils/api-error.js";
import Team from "../models/team.model.js";
import Sponsor from "../models/sponsor.model.js";
import TeamSponsor from "../models/team-sponsor.model.js";

const attachSponsor = async ({ teamId, sponsorId }) => {
  const team = await Team.findById(teamId);
  if (!team) {
    throw ApiError.notFound("Team not found");
  }

  const sponsor = await Sponsor.findById(sponsorId);
  if (!sponsor) {
    throw ApiError.notFound("Sponsor not found");
  }

  const existing = await TeamSponsor.findOne({ teamId, sponsorId });

  if (existing) {
    throw ApiError.conflict("Sponsor already attached to this team");
  }

  const teamSponsor = await TeamSponsor.create({ teamId, sponsorId });

  return teamSponsor;
};

const detachSponsor = async ({ teamId, sponsorId }) => {
  const team = await Team.findById(teamId);
  if (!team) {
    throw ApiError.notFound("Team not found");
  }

  const sponsor = await Sponsor.findById(sponsorId);
  if (!sponsor) {
    throw ApiError.notFound("Sponsor not found");
  }

  const existing = await TeamSponsor.findOneAndDelete({ teamId, sponsorId });

  if (!existing) {
    throw ApiError.notFound(
      `${sponsor.name} not sponsoring this team ${team.name}`,
    );
  }
};

const getAllTeamSponsors = async () => {
  const teamSponsors = await TeamSponsor.find();

  return teamSponsors;
};

const getSponsorsByTeam = async ({ teamId }) => {
  const team = await Team.findById(teamId);

  if (!team) {
    throw ApiError.notFound("Team not found");
  }

  const teamSponsors = await TeamSponsor.find({ teamId });

  if (teamSponsors.length === 0 && !teamSponsors) {
    throw ApiError.notFound(`Team ${team.name} not sponsors by any Sponsor`);
  }

  return teamSponsors;
};

const getTeamsBySponsor = async ({ sponsorId }) => {
  const sponsor = await Sponsor.findById(sponsorId);

  if (!sponsor) {
    throw ApiError.notFound("Sponsor not found");
  }

  const teamSponsors = await TeamSponsor.find({ sponsorId });

  if (teamSponsors.length === 0 && !teamSponsors) {
    throw ApiError.notFound(`Sponsor ${sponsor.name} not sponsoring any team`);
  }

  return teamSponsors;
};

export {
  attachSponsor,
  detachSponsor,
  getAllTeamSponsors,
  getSponsorsByTeam,
  getTeamsBySponsor,
};
