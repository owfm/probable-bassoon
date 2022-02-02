import App from "../../components/App/App"

interface Props {
    builtOn: Date;
}
const DeveloperExperience: React.FC<Props> = ({ builtOn }) => {
    return (<App title={"Dev Experience"} builtOn={builtOn}>
        <p>dev experience</p>
    </App>)
}

export default DeveloperExperience

export const getStaticProps = async () => {
    return {
        props: {
            builtOn: new Date().toISOString()
        }

    }
}



// export async function getStaticProps() {


// }