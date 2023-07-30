import Image from 'next/image'
import styles from './page.module.css'

import Upload from './upload'
import Player from './player'

// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching

//i'd use this if i wanna fetch data... which i do
async function getData() {
  const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

export default async function Home() {

  // const data = await getData()



  return (
    <main className={styles.main}>
      <div >
        <h1>
          GAMMA THRONES INTERNET APP
         
        </h1>

        <Upload />
        <Player />

        <div>
          <a
            href="https:matthewwilson.website"
            target="_blank"
            rel="noopener noreferrer"
          >
           
            <Image
              src="/yin.svg"
              alt="Sick Yin Yang"
             
              width={100}
              height={48}
              priority //priority indicates whether lazy loading should be turned off, and this should be pre loaded
            />
          </a>
        </div>
      </div>

    
    </main>
  )
}
