import type { NextPage } from "next"
import Link from "next/link"

import App from "../components/App/App"
import { useRotatingInterests } from "../lib/useRotatingInterests"

interface Props {
  builtOn: Date;
}

const Home: NextPage<Props> = ({ builtOn }) => {

  const interest = useRotatingInterests()

  return (
    <App title={"Ollie Mansell"} builtOn={builtOn}>
      <article className='prose prose-slate'>

        <h1 className='dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-pink-600 dark:to-yellow-400 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-400'>Ollie Mansell</h1>
        <p>👋 Hi! Welcome. I'm a developer currently working with <span className='font-bold'>{`${interest}`}.</span></p>
        <p>This is where I maintain a list of what I'm reading, work projects I've been involved with, my CV, and—one day—write some blog posts</p>
        <h2>Now</h2>
        <p>Software Engineer at <strong>StoneX.</strong>{" "}<span><Link href={"/developer-experience"}>See developer experience</Link></span></p>

        <h2>Before</h2>
        <p>Award-winning physics teacher, coffee chemist, and technical safety and risk engineer (nuclear, oil and gas) <span><Link href={"/developer-experience"}>See work history</Link></span></p>
        <h2>Education</h2>
        <p>Masters degree in physics and astronomy <span><Link href={"/education"}>See education</Link></span></p>

        <h2>Currently Reading <small><span><Link href={"/reading-list"}>See reading list</Link></span></small></h2>

        <ul>
          <li>Paul Beatty - <em>The Sellout</em></li>
          <li>Michael J Sandel - <em>{`What's the right thing to do?`}</em></li>
          <li>Designing Data Intensive Applications - <em>Martin Kleppmann</em></li>
        </ul>
      </article>
    </App >
  )
}

export default Home

export const getStaticProps = async () => {
  return {
    props: {
      builtOn: new Date().toISOString()
    }

  }
}



