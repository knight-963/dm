import Link from 'next/link';
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nv}>

            <a href=""><img src="logo.png" className="h-[80px]" alt="" /></a>

            <ul className='flex justify-center items-center gap-[40px]'>
                <Link href="/"><h1 className="text-xl">Home</h1></Link>
                <Link href="/Page"><h1 className='text-xl'>Brendlar</h1></Link>
                <Link href=""><h1 className='text-xl'>Tadqiq qiling</h1></Link>
                <Link href=""><h1 className='text-xl'>Ko'rgazma zali</h1></Link>
                <Link href=""><h1 className='text-xl'>Kredit simulyatsiyasi</h1></Link>
                <Link href=""><h1 className='text-xl'>Biz bilan bog'lanish</h1></Link>
            </ul>

            <button className="w-[150px] h-[50px] rounded-[10px] text-white bg-[#FA3C45]"><Link href="/About">Ro'yhatdan o'tish</Link></button>

        </nav>
    );
  }
  