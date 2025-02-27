import styles from './QAndA.module.css'

const QAs = [
    {
        q: "Are you a fraud?",
        a: "I'm afraid not."
    },
    {
        q: "Who are you?",
        a: "Though I was a music student, I recognized later that I wanted to be a writer. And as a writer, I research many things. Coding is simply one of them. But I get quite carried away by it. I know that this is weird and unconventional. I think so as well."
    },
    {
        q: "You do this for money?",
        a: "I'm not very special and my answer is 'yes'. Anyway, the main reason is that I want to learn."
    },
    {
        q: "(no one asks)",
        a: "I started learning how to code without any specific expectation. At the beginning, I often laughed, feeling that I was suck, and simply gave up whenever I was baffled by JavaScript. But it became more and more serious and now I have a feeling that my code journey might be a very long one."
    }
]

export default function QAndA() {
    return (
        <div className={styles.container}>
            <h2>Questions that probably occur to you</h2>
            <div className={styles['qa-container']}>
                {QAs.map((obj, i) => (
                    <details key={i} className={styles.details}>
                        <summary className={styles.summary}>{obj.q}</summary>
                        <div>
                            <p>{obj.a}</p>
                        </div>
                    </details>
                ))}
            </div>
        </div>
    )
}