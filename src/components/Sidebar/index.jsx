import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        src='https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='alt-image-01'
      />
      <div className={styles.profle}>
        <strong>Guilherme Alexandre</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href='#'>Editar seu perfil</a>
      </footer>
    </aside>
  )
}