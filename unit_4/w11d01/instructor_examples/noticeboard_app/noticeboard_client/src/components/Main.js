import React from 'react'
import Notices from './Notices.js'

function Main(props) {
  const { notices, handleDelete, handleUpdate } = props
    return (
      <main>
        <Notices
        notices={notices}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      </main>
    )
}

export default Main
