import Link from 'next/link';
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nv}>

            <a href=""><img src="logo.png" className="h-[80px]" alt="" /></a>

            <ul className='flex justify-center items-center gap-[50px]'>
                <Link href="/"><h1 className="text-xl">Home</h1></Link>
                <Link href="/Brendlar"><h1 className='text-xl'>Бренды</h1></Link>
                <Link href="/Isledovat"><h1 className='text-xl'>Исследовать</h1></Link>
                <Link href="/Kredit"><h1 className='text-xl'>Кредитное моделирование</h1></Link>
                <Link href="/Svz"><h1 className='text-xl'>связаться с нами</h1></Link>
            </ul>

            <button className="w-[160px] h-[55px] rounded-[10px] text-xl text-white bg-[#ff3640]"><Link href="/Registratsiya"><h1 className='mt-[-5px]'>регистрация</h1></Link></button>

        </nav>
    );
  }
  