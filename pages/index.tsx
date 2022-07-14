import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/Carousel/Carousel'
import Pacient from '../components/Pacient/Pacient'
import styles from '../styles/Home.module.css'

type CardsType = {
  adult: Array<string>
  child: Array<string>
}

const cards: CardsType = {
  adult: [
    'Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.',
    'По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.',
    'По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.',
  ],
  child: [
    'Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность в отношении наличия СМА.',
    'Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются дегенерации при прогрессировании заболевания',
  ],
}
const Main: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MirVrach</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>А вдруг СМА?</h1>
        <p className={styles.description}>Выберите, кто Ваш пациент:</p>
        <div className={styles.pacients}>
          <Pacient title="Взрослый" adult cards={cards.adult} />{' '}
          <Pacient title="Ребенок" cards={cards.child} />
        </div>
        <p className={styles.more}>
          Сообщает ли один из ваших пациентов о следующих симптомах?
        </p>
        <Carousel />
      </main>
    </div>
  )
}

export default Main
