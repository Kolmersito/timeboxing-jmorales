import React from 'react';

const styles = {
  container: {
    backgroundColor: '#a7ffeb',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100vw', // Asegura que abarque todo el ancho
    color: '#333',
    boxSizing: 'border-box' as 'border-box',
  },
  card: {
    border: '1px solid #333',
    padding: '2rem',
    width: '100%',
    maxWidth: '400px',
    boxSizing: 'border-box' as 'border-box',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center' as 'center',
  },
  inputGroup: {
    marginBottom: '1.2rem',
    display: 'flex',
    flexDirection: 'column' as 'column',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #333',
    backgroundColor: 'transparent',
    outline: 'none',
    boxSizing: 'border-box' as 'border-box',
    width: '100%',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#333',
    color: '#a7ffeb',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem',
  }
};

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Timeboxing App</h1>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input type="email" placeholder="tu@email.com" style={styles.input} />
        </div>
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Contraseña</label>
          <input type="password" placeholder="••••••••" style={styles.input} />
        </div>
        
        <button style={styles.button} onClick={onLogin}>
          Entrar al Planificador
        </button>
      </div>
    </div>
  );
};