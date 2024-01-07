import styles from './style.module.scss'

interface CardsProps {
    title: string
    value: number
}

export const Cards: React.FC<CardsProps> = ({title, value}) => {
    return (
        <article className={styles.stats_card}>
            <h2>{title}</h2>
            <span>{value}</span>
        </article>
    )
}