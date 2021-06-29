import React, { createContext, useState, useEffect } from 'react'

export const ApiContext = createContext()

const ApiContextProvider = (props) => {
  const [nierFalen, setNierFalen] = useState([])
  const [copd, setCopd] = useState([])
  const [diabetes, setDiabetes] = useState([])

  const siteUrl1 = 'https://joanneye.nl/kennisquizcms/wp-json/wp/v2/nierfalen'
  const siteUrl2 = 'https://joanneye.nl/kennisquizcms/wp-json/wp/v2/copd'
  const siteUrl3 = 'https://joanneye.nl/kennisquizcms/wp-json/wp/v2/diabetes'

  useEffect(() => {
    async function loadcopd() {
      const response = await fetch(siteUrl2)
      if (!response.ok) {
        console.log('error')
        return
      }

      const posts = await response.json()
      console.log(posts)
      setCopd(posts)
    }
    async function loadnierfalen() {
      const response = await fetch(siteUrl1, { mode: 'no-cors' })
      if (!response.ok) {
        console.log('error')
        return
      }

      const posts = await response.json()
      setNierFalen(posts)
    }
    async function loaddiabetes() {
      const response = await fetch(siteUrl3, { mode: 'no-cors' })
      if (!response.ok) {
        console.log('error')
        return
      }

      const posts = await response.json()
      setDiabetes(posts)
    }

    loadcopd()
    loadnierfalen()
    loaddiabetes()
  }, [])

  return (
    <ApiContext.Provider value={{ nierFalen, copd, diabetes }}>
      {props.children}
    </ApiContext.Provider>
  )
}

export default ApiContextProvider
