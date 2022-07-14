import { createReadStream } from 'fs'
import Image from 'next/image'
import adult from '../../public/adult.png'
import child from '../../public/child.png'
import Card from '../Card/Card'
import style from './Pacient.module.css'
type PropsType = {
  adult?: boolean
  cards: Array<string>
  title: string
}
const Pacient: React.FC<PropsType> = (props) => {
  return (
    <div className={style.pacient}>
      <h3 className={style.title}>{props.title}</h3>
      <Image src={props.adult ? adult : child} alt={props.title} />
      {props.cards.map((crd, index) => {
        return <Card key={`card_${index}`} text={crd} />
      })}
    </div>
  )
}
export default Pacient
