import React from 'react';

const styles = {
  container: {
    backgroundColor: '#a7ffeb',
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    minHeight: '100vh',
    width: '100vw',
    boxSizing: 'border-box' as 'border-box',
    color: '#333',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    borderBottom: '1px solid #333',
    paddingBottom: '1rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  },
  card: {
    border: '1px solid #333',
    padding: '1.5rem',
    backgroundColor: 'transparent',
    boxSizing: 'border-box' as 'border-box',
    cursor: 'pointer', // ¡Esto hace que parezca un botón!
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    borderBottom: '1px solid #333',
    paddingBottom: '0.5rem',
  },
  listItem: {
    marginBottom: '0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#a7ffeb',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    cursor: 'pointer',
  }
};

interface DashboardPageProps {
  // Ahora la función recibe el nombre del proyecto al que le dimos clic
  onOpenPlanner: (projectName: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onOpenPlanner }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Panel General</h1>
        <span>Semana en curso</span>
      </div>

      <div style={styles.grid}>
        {/* Al hacer clic, enviamos el nombre del proyecto */}
        <div style={styles.card} onClick={() => onOpenPlanner('Proyecto Qpon')}>
          <h2 style={styles.cardTitle}>Proyecto Qpon</h2>
          <div style={styles.listItem}><span>Frontend en React</span> <span>En progreso</span></div>
          <div style={styles.listItem}><span>Integración API</span> <span>Pendiente</span></div>
        </div>

        <div style={styles.card} onClick={() => onOpenPlanner('CoffeeLine')}>
          <h2 style={styles.cardTitle}>CoffeeLine</h2>
          <div style={styles.listItem}><span>Arquitectura NestJS</span> <span>Revisión</span></div>
          <div style={styles.listItem}><span>Modelos de BD</span> <span>OK</span></div>
        </div>

        <div style={styles.card} onClick={() => onOpenPlanner('Universidad Tecnológica')}>
          <h2 style={styles.cardTitle}>Universidad Tecnológica</h2>
          <div style={styles.listItem}><span>QA y Testing</span> <span>Esta semana</span></div>
          <div style={styles.listItem}><span>Ecuaciones Diferenciales</span> <span>Viernes</span></div>
        </div>
      </div>

      <button style={styles.button} onClick={() => onOpenPlanner('Planificador Diario General')}>
        Abrir Planificador de Hoy →
      </button>
    </div>
  );
};