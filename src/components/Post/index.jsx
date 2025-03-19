import React, { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import styles from './Post.module.css'
import { Comment } from './SubComponents/Comment'

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([ 'Post muito bom!!!' ])
  const [newCommentText, setNewCommentText] = useState('')
  const formattedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleNewCommentChange = (e) => {
    setNewCommentText(e.target.value)
  }

  const handleCreateNewComment = () => {
    event.preventDefault()

    setComments([ ...comments, newCommentText ])
    setNewCommentText('')
  }

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
            return <p key={item.content}>{item.content}</p>
          // biome-ignore lint/style/noUselessElse: <explanation>
          } else if (item.type === 'link') {
            return <p key={item.content}><a href='./'>{item.content}</a></p>
          }
        })}
      </div>
      
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
      
        <textarea
          id='comment'
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} />
        })}
      </div>
    </article>
  )
}