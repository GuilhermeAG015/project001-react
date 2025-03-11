import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'

import styles from './App.module.css'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/GuilhermeAG015.png',
      name: 'Guilherme Alexandre',
      role: 'Developer @compass.uol'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: newDate('2025-03-11'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/GuilhermeAG015.png',
      name: 'Guilherme Alexandre',
      role: 'Developer @compass.uol'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: newDate('2025-03-10'),
  },
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
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
