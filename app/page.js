// import Image from 'next/image'
'use client'
import Main from './components/Main'
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Grid } from "@mui/material"
import store from './store'
import {Provider} from 'react-redux'

export default function Home() {

  return (
      <>
      <Provider store = {store}>
        <Grid container className='wrapper'>
            <Grid item xs={12} className='header'>
              <Header/>
            </Grid>

            <Grid item xs={12} className='main'>
                <Main/>
            </Grid>
            <Grid item xs={12} className='footer'>
              <Footer/>
            </Grid>
        </Grid>
      </Provider>
      </>
  )
}
