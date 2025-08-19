import React from "react";
import StyledButton from "../styles/StyledButton"; // adjust if path differs

const cardStyle = {
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  padding: "16px",
  textAlign: "center",
  maxWidth: "300px",
  width: "100%",
  border: "1px solid #e5e7eb",
};

const imgWrapStyle = {
  width: "100%",
  maxWidth: "250px",
  height: "192px", // ~h-48
  overflow: "hidden",
  margin: "0 auto 8px",
  borderRadius: "8px",
  background: "#f7f7f7",
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const titleStyle = { fontSize: "18px", fontWeight: 600, margin: "6px 0" };
const textMuted = { fontSize: "14px", color: "#6b7280", margin: "2px 0" };
const textDefault = { fontSize: "14px", color: "#374151", margin: "6px 0" };

const PetCard = ({ pet }) => {
  const img =
    pet?.photoUrl || pet?.imageUrl || pet?.photo || pet?.image || "/placeholder.png";

  return (
    <div style={cardStyle}>
      <div style={imgWrapStyle}>
        <img src={img} alt={pet?.name || "Pet"} style={imgStyle} />
      </div>

      <h2 style={titleStyle}>{pet?.name || "Unnamed"}</h2>
      <p style={textMuted}>Breed: {pet?.breed || pet?.type || "Unknown"}</p>
      <p style={textMuted}>Age: {pet?.age ?? "—"}</p>
      <p style={textDefault}>{pet?.description || ""}</p>
      <p style={{ fontSize: "14px" }}>
        Gender: {pet?.gender === "male" ? "♂️" : pet?.gender === "female" ? "♀️" : "—"}
      </p>

      <div style={{ marginTop: 12 }}>
        <StyledButton to={`/apply/${pet?._id || pet?.id}`}>Adopt Me</StyledButton>
      </div>
    </div>
  );
};

export default PetCard;
