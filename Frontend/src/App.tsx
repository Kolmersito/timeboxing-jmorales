import { useState } from 'react'
import { LoginPage } from './components/LoginPage'
import { DashboardPage } from './components/DashboardPage'
import { PlannerPage } from './components/PlannerPage'

type ViewState = 'login' | 'dashboard' | 'planner';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('login');
  
  // Nuevo estado para guardar el nombre del proyecto seleccionado
  const [activeProject, setActiveProject] = useState<string>('');

  // Esta función se ejecuta al hacer clic en una tarjeta o en el botón principal
  const handleOpenPlanner = (projectName: string) => {
    setActiveProject(projectName);
    setCurrentView('planner');
  };

  return (
    <div>
      {currentView === 'login' && (
        <LoginPage onLogin={() => setCurrentView('dashboard')} />
      )}
      
      {currentView === 'dashboard' && (
        <DashboardPage onOpenPlanner={handleOpenPlanner} />
      )}
      
      {currentView === 'planner' && (
        <PlannerPage 
          projectName={activeProject} 
          onBack={() => setCurrentView('dashboard')} 
        />
      )}
    </div>
  )
}

export default App