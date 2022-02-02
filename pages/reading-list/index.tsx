import remarkHtml from "remark-html"
import remarkParse from "remark-parse"
import styled from "styled-components"
import { read } from "to-vfile"
import { unified } from "unified"

import App from "../../components/App"
import getContentFromPath from "../../lib/getContentFromPath"
import markdownToHtml from "../../lib/markdownToHtml"

interface Props {
    builtOn: Date;
    html: string;
}
const ReadingList: React.FC<Props> = ({ builtOn, html }) => {
    return (
        <App title={"Ollie Mansell | Reading List"} builtOn={builtOn}>
            <h1>Reading List</h1>

            <Main
                dangerouslySetInnerHTML={{ __html: html }}
            ></Main>
        </App>)
}

export default ReadingList


export const getStaticProps = async () => {
    const { content } = getContentFromPath('reading-list');

    return {
        props: {
            builtOn: new Date().toISOString(),
            html: await markdownToHtml(content)
        }

    }
}

const Main = styled.main`
    color: var(--text);
`