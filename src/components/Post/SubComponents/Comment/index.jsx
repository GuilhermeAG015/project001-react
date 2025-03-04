import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img 
        src='https://github.com/GuilhermeAG015.png'
        alt='profile-img' 
        className={styles.avatar}
      />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Alexandre</strong>
              <time title='03 de Março às 8:13h' dateTime='2025-03-03 08:13:30'>Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário" type='button'>
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button type='button'>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}