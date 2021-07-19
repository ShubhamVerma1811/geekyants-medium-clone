import React, { useState } from 'react'
import RichTextEditor from 'react-rte'
import { convertFromRaw, convertToRaw } from 'draft-js'

const PostEditor = () => {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue())

  console.log(value.toString('raw'))

  return (
    <div>
      This is the Post Editor
      <RichTextEditor value={value} onChange={(value) => setValue(value)} />
    </div>
  )
}

export default PostEditor
