import { getShayriMutation } from "@/context/http/GetShayari";

export default function ShayariTable() {
  const { data: shayriData, isLoading, isError, error } = getShayriMutation();

  if (isLoading) {
    return (
      <div className="loader-container">
        <svg viewBox="25 25 50 50" className="loading">
          <circle className="loader" r="20" cy="50" cx="50"></circle>
        </svg>
      </div>
    );
  }
  return (
    <tbody className="dashboard-table-body">
      {shayriData?.map((item, index) => (
        <tr key={item.id || index} className="table-row">
          <td className="table-cell">{index + 1}</td>
          <td className="table-cell">{item.heading || "—"}</td>
          <td className="table-cell">
            {Array.isArray(item.keywords)
              ? item.keywords.join(", ")
              : item.keywords || "—"}
          </td>
          <td className="table-cell">{item.hindiShayari || "—"}</td>
          <td className="table-cell">{item.urduShayari || "—"}</td>
          <td className="table-cell"> X </td>
        </tr>
      ))}
    </tbody>
  );
}
