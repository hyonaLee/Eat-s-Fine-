import axios from 'axios'
import { response } from 'express'
import React, {useEffect} from 'react'

function Keep({item}) {
  useEffect(() => {
    axios.post('/api/keep/keepNumber')
      .then(response => {
        if(response.data.success){

        } else {

        }
      })
  }, [])

  return (
    <div>
      <button>찜하기</button>
    </div>
  )
}

export default Keep
