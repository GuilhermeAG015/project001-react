import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import styles from './Post.module.css'
import { Comment } from './SubComponents/Comment'

export function Post({ author, content, publishedAt }) {
  const formattedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={formattedDate} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p>{item.content}</p>
          // biome-ignore lint/style/noUselessElse: <explanation>
          } else if (item.type === 'link') {
            return <p><a href='./'>{item.content}</a></p>
          }
        })}
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