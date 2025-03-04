import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../../../Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src='https://github.com/GuilhermeAG015.png' hasBorder={false} />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Alexandre</strong>
              <time title='03 de Março às 8:13h' dateTime='2025-03-03 08:13:30'>Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário" type='button'>
              <Trash size={24} />
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