import styles from "./Meditation.module.css"

type Props = {
  slug: string
  title: string
  duration: number
  tags: string[]
}
export default function Meditation({ slug, title, duration, tags }: Props) {
  return (
    <div className={styles.meditation}>
      <div className={styles.placeholder}></div>
      <div className={styles.duration}>{duration}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <div key={tag} className={styles.tag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}
