import { getShayriMutation } from "@/context/http/GetShayari";
import { useDeleteShayariMutation } from "@/context/http/DeleteShayari";
import Image from "next/image";

export default function ShayariTable() {
  const { data: shayriData, isLoading, isError, error } = getShayriMutation();
  const deleteMutation = useDeleteShayariMutation();

  const handleDelete = async (id) => {
    try {
      console.log(`Attempting to delete Shayari with ID: ${id}`);
      await deleteMutation.mutateAsync(id);
      console.log("Shayari deleted successfully!");
    } catch (err) {
      console.error("Error deleting Shayari:", err.message);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
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
          <td
            className="table-cell delete-btn"
            onClick={() => handleDelete(item._id)}
            style={{ cursor: "pointer", textAlign: "center" }}
          >
            <Image
              width="82"
              height="82"
              src="/Images/delete.png"
              alt="Varun Anand"
              className="shayari-delete-image"
              priority
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
