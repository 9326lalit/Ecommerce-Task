


import React from "react";

const MyAccount = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Account</h2>
      <div style={styles.card}>
        <p style={styles.createdBy}>Created by:</p>
        <img
          src="https://avatars.githubusercontent.com/u/90741749?v=4" // Replace with actual profile image URL
          alt="Profile"
          style={styles.profileImage}
        />
        <h3 style={styles.name}>lalit khairnar</h3>
        <a href="#" style={styles.username}>
          @techwizlalit<span style={styles.pointer}>👆</span>
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "auto",
    width:"auto",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f9f9f9",
    paddingTop: "60px",
    
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "1px",
    boxShadow: "0px 4px 15px rgba(210, 207, 207, 0.1)",
    textAlign: "center",
    width: "350px",
    border: "1px solid #eee",

  },
  createdBy: {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "10px",
    color: "#666",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
    border: "2px solid #ddd",
  },
  name: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#222",
    marginBottom: "5px",
  },
  username: {
    fontSize: "16px",
    color: "#0073e6",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s",
  },
  usernameHover: {
    color: "#0056b3",
  },
  pointer: {
    marginLeft: "5px",
  },
};

export default MyAccount;
