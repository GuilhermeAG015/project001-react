import { Avatar } from '../Avatar'
import styles from './Post.module.css'
import { Comment } from './SubComponents/Comment'

export function Post({ author, content, publishedAt }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/GuilhermeAG015.png' />
          <div className={styles.authorInfo}>
            <strong>Guilherme Alexandre</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='03 de Março às 8:13h' dateTime='2025-03-03 08:13:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href='/'>jane.design/doctorcare</a></p>
        <p>
          <a href='/'>#novoprojeto</a>{' '}
          <a href='/'>#nlw</a>{' '}
          <a href='/'>#rocketseat</a>
        </p>
      </div>
      
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
      
        <textarea 
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}