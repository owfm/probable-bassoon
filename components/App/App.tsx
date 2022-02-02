import { formatDistance } from "date-fns";
import Head from "next/head";
import { ReactChild } from "react";

import Footer from "../Footer";
import Menu from "../Menu";

interface Props {
    children: ReactChild | ReactChild[];
    title: string;
    builtOn: Date;
}

const App: React.FC<Props> = ({ children, title = "Ollie Mansell", builtOn }) => {
    return (
        <section className='flex flex-col grow min-h-full p-8 pb-1'>
            <Head>
                <title>Ollie Mansell | {title}</title>
                <meta name="description" content="Ollie Mansell Developer Personal Site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />
            {children}

            <Footer builtOn={builtOn} />
        </section>
    )
}

export default App;
