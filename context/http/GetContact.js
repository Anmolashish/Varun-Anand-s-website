import { useQuery } from "@tanstack/react-query";

// Import the contact API
const { getAllContacts } = require("@/server");

// Fetch all contacts
const fetchAllContacts = async () => {
  const allContacts = await getAllContacts();
  return allContacts;
};

// Export the contact query hook
export const getContactMutation = () => {
  return useQuery({
    queryKey: ["GetContact"],
    queryFn: fetchAllContacts,
    enabled: true, // Automatically fetch data
  });
};
