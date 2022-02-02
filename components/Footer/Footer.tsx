import { formatDistance } from "date-fns";

interface Props {
    builtOn: Date;
}

const Footer: React.FC<Props> = ({ builtOn }) => (<footer className="flex flex-col align-middle justify-center mt-auto text-center text-xs pt-6">
    <p className=''><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> {new Date().getFullYear()} Ollie Mansell. Made with ☕ in London. Death before Decaf.</p>
    <p className=''>This page was built {formatDistance(new Date(builtOn), new Date(), { addSuffix: true })}.</p>
</footer>
)

export default Footer;