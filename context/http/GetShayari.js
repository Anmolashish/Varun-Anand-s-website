import { useQuery } from "@tanstack/react-query";

const { getAllShayri } = require("@/server");

const getAllShayries = async () => {
  const allShayries = await getAllShayri();
  return allShayries;
};

export const getShayriMutation = () => {
  return useQuery({
    queryKey: ["GetShayari"],
    queryFn: getAllShayries,
    enabled: true,
  });
};
