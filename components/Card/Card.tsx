import style from './Card.module.css'
type PropsType = {
  text: string
}
const Card: React.FC<PropsType> = (props) => {
  return <p className={style.card}>{props.text}</p>
}
export default Card
