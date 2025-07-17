
import { BrowserRouter, Route, Routes } from 'react-router'
import { GifExpertApp } from '../GifApp/GifExpertApp'
import Landing from '../components/Landing'

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Landing/>}/>
        <Route path={'/gif'} element={<GifExpertApp/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter