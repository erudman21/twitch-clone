import { PROFILE_COLORS } from "./../constants";

export const pickColor = () => {
  const index = Math.floor(Math.random() * PROFILE_COLORS.length);

  return PROFILE_COLORS[index];
};
