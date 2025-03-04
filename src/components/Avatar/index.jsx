import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }) {
  return (
    <img 
      src={src}
      alt='avatar-img' 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  )
}