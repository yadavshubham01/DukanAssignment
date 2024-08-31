
import './App.css'
import { BlueCard } from './components/Bluecard'
import { Overview } from './components/Overview'
import { RenvneCard } from './components/RenvneCard'
import { Sidebar } from './components/Sidebar'
import { Table } from './components/Table'
import { Tabletop } from './components/TableTop'
import { TopBar } from './components/TopBar'
import { Transaction } from './components/Transactions'

function App() {
  return (
    <div className='bg-white'>
      <Sidebar/>
      <div className='border-b bottom-black sm:pl-64 bg-white-500'>
        <TopBar/>
      </div>

      <div className='m-5 mb-0 sm:ml-64 grid gap-8'>
        <Overview/>
        <div className='grid gap-6'>
          <Transaction/>
          <Table/>
        </div>
      </div>
    </div>
  )
}



export default App

