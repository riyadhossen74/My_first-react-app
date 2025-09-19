
import { Suspense } from 'react'
import './App.css'
import Countries from './assets/componets/Countries/Countries'

const CountriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json())

function App() {
 

  return (
    <>
   <Suspense fallback={<p>hi wait</p>}>
    <Countries CountriesPromise={CountriesPromise}></Countries>
   </Suspense>
      
    </>
  )
}

export default App
