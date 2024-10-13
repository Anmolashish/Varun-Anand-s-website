const TwitterFeed = () => {
  return (
    <div style={{ position: "relative" }}>
      <img width="100%" src="Images/main-image.jpg" />
      <img
        width="100%"
        style={{ position: "absolute", top: "0", left: "0", zIndex: "2" }}
        src="Images/image.png"
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "1",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>
    </div>
  );
};

export default TwitterFeed;
