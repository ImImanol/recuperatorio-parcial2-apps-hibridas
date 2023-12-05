import React from "react";
import "./perfil.css";

const Perfil = ({ userData, onLogout }) => {
  const { name, email } = userData || {};

  return (
    <div className="profile-container">
      <h2>Perfil de Usuario</h2>
      {name && (
        <p>
          <strong>Nombre:</strong> {name}
        </p>
      )}
      {email && (
        <p>
          <strong>Correo Electrónico:</strong> {email}
        </p>
      )}
      <button onClick={onLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Perfil;
