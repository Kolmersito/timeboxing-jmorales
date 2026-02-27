import React from 'react';

const hours = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

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
  backButton: {
    marginBottom: '1rem', 
    background: 'transparent', 
    border: 'none', 
    cursor: 'pointer', 
    fontWeight: 'bold', 
    fontSize: '1rem',
    padding: '0',
    color: '#333',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: 'minmax(300px, 1fr) 2fr',
    gap: '2rem',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  sectionTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  priorityInput: {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #333',
    boxSizing: 'border-box' as 'border-box',
    backgroundColor: 'transparent',
    marginBottom: '0.5rem',
    outline: 'none',
  },
  brainDump: {
    width: '100%',
    height: '400px',
    padding: '1rem',
    border: '1px solid #333',
    boxSizing: 'border-box' as 'border-box',
    backgroundColor: 'transparent',
    resize: 'none' as 'none',
    outline: 'none',
  },
  timeboxGrid: {
    border: '1px solid #333',
    boxSizing: 'border-box' as 'border-box',
  },
  gridHeader: {
    display: 'grid',
    gridTemplateColumns: '50px 1fr 1fr',
    borderBottom: '1px solid #333',
  },
  labelHeader: {
    fontWeight: 'bold',
    padding: '0.5rem',
    textAlign: 'center' as 'center',
    borderLeft: '1px solid #333',
  },
  timeRow: {
    display: 'grid',
    gridTemplateColumns: '50px 1fr 1fr',
    borderBottom: '1px solid #333',
  },
  timeLabel: {
    padding: '0.5rem',
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'right' as 'right',
  },
  timeSlot: {
    border: 'none',
    borderLeft: '1px solid #333',
    padding: '0.5rem',
    backgroundColor: 'transparent',
    outline: 'none',
    boxSizing: 'border-box' as 'border-box',
  },
};

// Definimos las propiedades que recibe esta página: el nombre del proyecto y la función de volver
interface PlannerPageProps {
  projectName: string;
  onBack: () => void;
}

export const PlannerPage: React.FC<PlannerPageProps> = ({ projectName, onBack }) => {
  return (
    <div style={styles.container}>
      
      {/* ¡Aquí está el botón para regresar! */}
      <button style={styles.backButton} onClick={onBack}>
        ← Volver al Panel
      </button>

      <div style={styles.header}>
        {/* Usamos el nombre del proyecto como título dinámico */}
        <h1 style={styles.title}>{projectName}</h1>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span>Date:</span>
          <input type="text" placeholder="____ / ____ / ____" style={{ border: 'none', borderBottom: '1px solid #333', backgroundColor: 'transparent', padding: '0 0.5rem', outline: 'none' }} />
        </div>
      </div>

      <div style={styles.mainContent}>
        <div style={styles.leftColumn}>
          <div>
            <h2 style={styles.sectionTitle}>Top Priorities</h2>
            <input type="text" placeholder="Priority 1" style={styles.priorityInput} />
            <input type="text" placeholder="Priority 2" style={styles.priorityInput} />
            <input type="text" placeholder="Priority 3" style={styles.priorityInput} />
          </div>
          <div>
            <h2 style={styles.sectionTitle}>Brain Dump</h2>
            <textarea placeholder="Type your ideas here..." style={styles.brainDump} />
          </div>
        </div>

        <div style={styles.timeboxGrid}>
          <div style={styles.gridHeader}>
            <div style={{ padding: '0.5rem' }}></div>
            <div style={styles.labelHeader}>:00</div>
            <div style={styles.labelHeader}>:30</div>
          </div>

          {hours.map((hour, index) => (
            <div key={index} style={styles.timeRow}>
              <div style={styles.timeLabel}>{hour}</div>
              <input type="text" style={styles.timeSlot} />
              <input type="text" style={styles.timeSlot} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};