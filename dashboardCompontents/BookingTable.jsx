import { getBookingMutation } from "@/context/http/GetBooking";

export default function BookingTable() {
  const { data: bookingData, isLoading, isError, error } = getBookingMutation();

  if (isLoading) {
    return (
      <div className="loader-container">
        <svg viewBox="25 25 50 50" className="loading">
          <circle className="loader" r="20" cy="50" cx="50"></circle>
        </svg>
      </div>
    );
  }

  if (isError) {
    return <div className="error-message">Error: {error.message}</div>;
  }

  return (
    <tbody className="dashboard-table-body">
      {bookingData?.map((item, index) => (
        <tr key={item.id || index} className="table-row">
          <td className="table-cell">{index + 1}</td>
          <td className="table-cell">{item.fullName || "—"}</td>
          <td className="table-cell">{item.email || "—"}</td>
          <td className="table-cell">{item.phone || "—"}</td>
          <td className="table-cell">
            {item.eventDate
              ? new Date(item.eventDate).toLocaleDateString()
              : "—"}
          </td>
          <td className="table-cell">{item.location || "—"}</td>
          <td className="table-cell">{item.message || "—"}</td>
          <td className="table-cell">
            {item.agreeToTerms ? "Agreed" : "Not Agreed"}
          </td>
          <td className="table-cell"> X </td>
        </tr>
      ))}
    </tbody>
  );
}
