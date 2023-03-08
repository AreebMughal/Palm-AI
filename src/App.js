import Search from './pages/search/Search';
import PageHeader from './components/page_header/pageHeader';
import Sidebar from 'components/sidebar/sidebar';
import { IconHambuger } from 'assets/imgs';
import { useRef } from 'react';
import New from 'components/sidebar/new';
import Nw from 'components/sidebar/nw';

// import 'antd/dist/antd.css';
import Output from './pages/output/output';

function App() {
  const sideRef = useRef();
  const openSidebar = () => {
    console.log(sideRef.current.classList);
    if (sideRef.current.classList.value.includes('max-md:hidden'))
      sideRef.current.classList.remove('max-md:hidden')
    else
      sideRef.current.classList.add('max-md:hidden')
  }

  return (
    <div>
      {/* <Sidebar />
      <PageHeader
        title="Search"
      /> */}

      {/* <New /> */}
      <Output />

      {/* <Nw /> */}
      {/* <div className='grid grid-cols-11'>
        <span className='hambuger hidden max-md:flex max-md:col-span-11 '>
          <img src={IconHambuger} alt='hamburger Icon' width={'50px'} height='50px' onClick={openSidebar} className='m-2 cursor-pointer' />
        </span>
        <div className='col-span-2 max-md:hidden max-md:col-span-5 max-sm:col-span-4 border-black'
          ref={sideRef}>
          <Sidebar />
        </div>
        <div className='col-span-9 max-md:col-span-11 max-sm:col-span-11  max-md:ml-1 ml-5 pl-2 '>
          <PageHeader
            title="Search"
          />
          <Search />
        </div>
      </div> */}
    </div>
  );
}

export default App;

