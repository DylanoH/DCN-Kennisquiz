import React, { createContext, useState, useEffect } from 'react'

export const ApiContext = createContext()

const ApiContextProvider = (props) => {
  const [nierFalen, setNierFalen] = useState([])
  const [copd, setCopd] = useState([])
  const [diabetes, setDiabetes] = useState([])

  const siteUrl1 = 'https://joanneye.nl/kennisquiz-dcn/wp-json/wp/v2/nierfalen'
  const siteUrl2 = 'https://joanneye.nl/kennisquiz-dcn/wp-json/wp/v2/copd'
  const siteUrl3 = 'https://joanneye.nl/kennisquiz-dcn/wp-json/wp/v2/diabetes'

  useEffect(() => {
    async function loadcopd() {
      const response = await fetch(siteUrl2)
      console.log('hallo')
      if (!response.ok) {
        console.log('error')
        return
      }

      const posts = await response.json()
      console.log(posts)

      setCopd(posts)
    }
    async function loadnierfalen() {
      const response = await fetch(siteUrl1)
      if (!response.ok) {
        console.log('error')
        return
      }

      const posts = await response.json()
      console.log(posts)
      setNierFalen(posts)
    }
    async function loaddiabetes() {
      const response = await fetch(siteUrl3)
      if (!response.ok) {
        console.log('error')
        return
      }

      const posts = await response.json()
      console.log(posts)
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
