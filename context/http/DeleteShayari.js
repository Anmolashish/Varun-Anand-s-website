import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteShayari } from "@/server"; // API function for DELETE request

export const useDeleteShayariMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      return await deleteShayari(id); // Call backend API
    },
    onSuccess: () => {
      console.log("Shayari deleted successfully, refetching data...");
      queryClient.invalidateQueries({ queryKey: ["GetShayari"] });
    },
    onError: (error) => {
      console.error("Error deleting Shayari:", error.message);
    },
  });
};
