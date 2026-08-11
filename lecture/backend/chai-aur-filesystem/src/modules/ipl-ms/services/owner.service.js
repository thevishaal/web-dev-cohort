import ApiError from "../../../common/utils/api-error.js";
import Owner from "../models/owner.model.js";

const createOwner = async ({ name, company, email }) => {
  const existingOwner = await Owner.findOne({ email });

  console.log(existingOwner);
  if (existingOwner) {
    throw ApiError.conflict(`Owner already exist with this email ${email}`);
  }

  const owner = await Owner.create({ name, company, email });
  return owner;
};

const getAllOwners = async () => {
  const owners = await Owner.find();

  return owners;
};

const getOwnerById = async (id) => {
  const owner = await Owner.findById(id);

  if (!owner) {
    throw ApiError.notFound("Owner not found");
  }

  return owner;
};

const updateOwner = async (id, { name, company }) => {
  const owner = await Owner.findByIdAndUpdate(
    id,
    { name, company },
    { new: true, runValidators: true },
  );

  if (!owner) {
    throw ApiError.notFound("Owner not found");
  }

  return owner;
};

const deleteOwner = async (id) => {
  const owner = await Owner.findByIdAndDelete(id);
  if (!owner) {
    throw ApiError.notFound("Owner not found");
  }
  return owner;
};

export { createOwner, getAllOwners, getOwnerById, updateOwner, deleteOwner };
