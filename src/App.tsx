import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Slides } from './components/Slides';
import './App.scss'
import {Section, PageState} from './types'


function App() {
  
  const initialPage: PageState = {
    section: Section.Main
  }
  const [page, setPage] = useState<PageState>(initialPage)
  
  return (
    <div className="App">

      <Sidebar pageMethod={setPage} pageState={page}/>
      <Slides pageMethod={setPage} pageState={page}/>
    </div>
  );
}

export default App;
