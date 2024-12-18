import { useQuery } from "@tanstack/react-query";

// Import the booking API
const { getAllBookings } = require("@/server");

// Fetch all bookings
const fetchAllBookings = async () => {
  const allBookings = await getAllBookings();
  return allBookings;
};

// Export the booking query hook
export const getBookingMutation = () => {
  return useQuery({
    queryKey: ["GetBooking"],
    queryFn: fetchAllBookings,
    enabled: true, // Automatically fetch data
  });
};
