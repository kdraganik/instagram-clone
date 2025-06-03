import { Navbar } from '../components/navbar';

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children } : Props) => {
    return (
        <div className='flex bg-[#f4f4fa]'>
            <Navbar />
            <div className="ml-72 flex-1">
                {children}
            </div>
        </div>
    )
}

export default Layout;