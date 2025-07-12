import React, {useState} from 'react'
import './../styles/PopularProducts.css'
import { FaHeart } from 'react-icons/fa';
import cleaner from './../images/cleaner.webp'
import dyson from './../images/Dyson.webp'
import LG from './../images/DoorCooling.webp'
import KettlePro from './../images/Kettle Pro.webp'
import EcoBubble from './../images/EcoBubble.jpeg'
import Redmond from './../images/Redmond.webp'
import Philips from './../images/Philips.webp'
import one from './../images/1.webp'
import bookbag from './../images/bookbag.jpg'
import bosch from './../images/Bosch.jpg'
import fial from './../images/fjal.jpg'
import even from './../images/Even.webp'

function PopularProducts({Header}) {
    const [iconHeart, seticonHeart] = useState(0);

    const [like, setLike] = useState(0);
    
    return (
    <div className='Products'>
        {/* <h1>Популярные продукты</h1> */}
        <div className="cards1">
            <div className="card1">
                <FaHeart onClick={() => setLike (like + 1)} className='icon1'/>
                <img src = {cleaner}></img>
                <h1 id='1'>Товар 1</h1>
                <p>Мощный и компактный пылесос для ежедневной уборки дома. Deerma DX115C сочетает ... {/*в себе функциональность вертикального и ручного пылесоса, что делает его идеальным помощником в любом доме.*/}</p>
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {dyson}></img>
                <h1 id='2'>Товар 2</h1>
                <p>Описание: Беспроводной пылесос с мощной турбощеткой и интеллектуальной ... {/*системой очистки. Подходит для уборки ковров, ламината и мебели.*/}</p>
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {LG}></img>
                <h1 id='3'>Товар 3</h1>
                <p>Описание: Современный холодильник с равномерным ... {/*охлаждением и системой защиты от запахов. Вместительный и энергоэффективный.*/}</p>
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {KettlePro}></img>
                <h1 id='4'>Товар 4</h1>
                <p>Описание: Умный чайник с цифровым дисплеем и точной ... {/*настройкой температуры. Быстро кипятит воду и сохраняет тепло.*/}</p>
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {EcoBubble}></img>
                <h1 id='5'>Товар 5</h1>
                <p>Описание: Стиралка с пузырьковой технологией, экономит ... {/* воду и бережно стирает даже деликатные ткани.*/}</p>
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {Redmond}></img>
                <h1 id='6'>Товар 6</h1>
                <p>Описание: Многофункциональная мультиварка с ... {/*45 программами приготовления. Идеальна для готовки супов, каш и выпечки.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {Philips}></img>
                <h1 id='7'>Товар 7</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {bookbag}></img>
                <h1 id='8'>Товар 8</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {cleaner}></img>
                <h1 id='9'>Товар 9</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {one}></img>
                <h1 id='10'>Товар 10</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {LG}></img>
                <h1 id='11'>Товар 11</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {EcoBubble}></img>
                <h1 id='12'>Товар 12</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {Philips}></img>
                <h1 id='13'>Товар 13</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card12">
                <FaHeart className='icon1'/>
                <img src = {bosch}></img>
                <h1 id='14'>Товар 14</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {KettlePro}></img>
                <h1 id='15'>Товар 15</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {dyson}></img>
                <h1 id='16'>Товар 16</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {Redmond}></img>
                <h1 id='17'>Товар 17</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {bookbag}></img>
                <h1 id='18'>Товар 18</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {cleaner}></img>
                <h1 id='19'>Товар 19</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {Philips}></img>
                <h1 id='20'>Товар 20</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {one}></img>
                <h1 id='21'>Товар 21</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {fial}></img>
                <h1 id='22'>Товар 22</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {even}></img>
                <h1 id='23'>Товар 23</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {Redmond}></img>
                <h1 id='24'>Товар 24</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {EcoBubble}></img>
                <h1 id='25'>Товар 25</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {LG}></img>
                <h1 id='26'>Товар 26</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {KettlePro}></img>
                <h1 id='27'>Товар 27</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {dyson}></img>
                <h1 id='28'>Товар 28</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {Philips}></img>
                <h1 id='29'>Товар 29</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
            <div className="card1">
                <FaHeart className='icon1'/>
                <img src = {cleaner}></img>
                <h1 id='30'>Товар 30</h1>
                <p>Описание: Мощный стационарный блендер для смузи, соусов ... {/*и измельчения льда. Надежный помощник на кухне.*/}</p>                
                <div className="buttons">
                    <h2>2 379 сом</h2>
                    <button className='basket'>В Корзину</button>
                </div>
            </div>
        </div>
        </div>
  )
}

export default PopularProducts