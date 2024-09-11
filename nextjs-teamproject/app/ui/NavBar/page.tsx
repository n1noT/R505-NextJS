import Link from 'next/link';


export default function NavBar() {

    return (

<nav
  className="flex-no-wrap relative flex h-full w-full items-center justify-between bg-black py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3 "> 
   
    <div className="list-style-none me-auto flex flex-col ps-0  text-white space-x-10 gap-8">
  
        <div className="list-style-none me-auto flex flex-col ps-0 gap-4 text-white">
          <Link className="mb-4 lg:mb-0 lg:pe-2 text-[#BBA]" href="/team/ourTeam/crash">Our Teams</Link>
          <Link className="mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]" href="/team/ourTeam/sales">Sales</Link>
          <Link className="mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]" href="/team/ourTeam/webdesign">Webdesign</Link>
          <Link className="mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]" href="/team/ourTeam/development">Development</Link>
        </div>
        <div className="list-style-none me-auto flex flex-col ps-0  text-white space-x-10">
          <Link className="ml-15 mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]" href="/team/buy">Buy</Link>
          <Link className="mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]" href="/team//about">?</Link>
        </div>
          
    </div>
    
  </div>
</nav>
    );

}

