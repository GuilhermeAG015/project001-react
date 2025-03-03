import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'

import styles from './App.module.css'
import { Post } from './components/Post'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Guilherme Alexandre"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi dolorum assumenda temporibus debitis. Aliquid similique nesciunt quo quia neque repellendus nobis suscipit, totam harum voluptatum velit laboriosam dolore ex!"
          />
        </main>
      </div>
    </div>
  )
}

export default App
