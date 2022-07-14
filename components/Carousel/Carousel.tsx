import pict1 from '../../public/carousel-img/pict1.png'
import pict2 from '../../public/carousel-img/pict2.png'
import pict3 from '../../public/carousel-img/pict3.png'
import pict4 from '../../public/carousel-img/pict4.png'
import pict5 from '../../public/carousel-img/pict5.png'
import pict6 from '../../public/carousel-img/pict6.png'
import pict7 from '../../public/carousel-img/pict7.png'
import pict8 from '../../public/carousel-img/pict8.png'
import adult from '../../public/adult_circle.png'
import Image from 'next/image'
import style from './Carousel.module.css'
import Plus from '../Plus/Plus'
import { SyntheticEvent } from 'react'
const Carousel: React.FC = () => {
  const handleClick = (e: SyntheticEvent) => {
    console.log(e)
    let p = e.currentTarget.querySelectorAll('p')
    p[0].hidden = !p[0].hidden
  }
  return (
    <div className={style.carouselContainer}>
      <ul className={style.carousel}>
        <div className={style.carouselMainPict}>
          <Image src={adult} />
          <span className={style.pacient}>Взрослый</span>
        </div>
        <li className={style.deg0} onClick={(e) => handleClick(e)}>
          <Image src={pict3} />
          <Plus />
          <p hidden style={{ left: '170px' }}>
            Нарушения жевания и глотания
          </p>
        </li>
        <li className={style.deg45} onClick={(e) => handleClick(e)}>
          <Image src={pict4} />
          <Plus />
          <p hidden style={{ left: '200px' }}>
            Дыхательная недостаточность/ респираторная дисфункция
          </p>
        </li>
        <li className={style.deg90} onClick={(e) => handleClick(e)}>
          <Image src={pict5} />
          <Plus />
          <p hidden style={{ top: '170px' }}>
            Неспособность бегать, изменение походки
          </p>
        </li>
        <li className={style.deg135} onClick={(e) => handleClick(e)}>
          <Image src={pict6} />
          <Plus />
          <p
            hidden
            style={{ left: '-80px', textAlign: 'right', width: '110px' }}
          >
            Контрактура суставов
          </p>
        </li>
        <li className={style.deg180} onClick={(e) => handleClick(e)}>
          <Image src={pict7} />
          <Plus />
          <p hidden style={{ left: '-80px' }}>
            Вывих бедра
          </p>
        </li>
        <li className={style.deg225} onClick={(e) => handleClick(e)}>
          <Image src={pict8} />
          <Plus />
          <p hidden style={{ left: '-80px' }}>
            Утомляемость
          </p>
        </li>
        <li className={style.deg270} onClick={(e) => handleClick(e)}>
          <Image src={pict1} />
          <Plus />
          <p hidden style={{ top: '-20px' }}>
            Сколиоз
          </p>
        </li>
        <li className={style.deg315} onClick={(e) => handleClick(e)}>
          <Image src={pict2} />
          <Plus />
          <p hidden style={{ left: '250px', width: '240px' }}>
            Ограниченная способность поднимать руки и переносить предметы
          </p>
        </li>
      </ul>
    </div>
  )
}
export default Carousel
