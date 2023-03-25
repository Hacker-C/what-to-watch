const CreateHeader = () => {
  return (
    <div className='font-sans'>
      {/* TODO contentEditable 兼容性在一些低版本浏览器上不兼容 */}
      <h1
        contentEditable suppressContentEditableWarning={true}
        font='bold title' text='[18px]' mt='2' p='y-1'
      >
        《命运石之门》
      </h1>
      <p
        contentEditable suppressContentEditableWarning={true}
        className='font-italic pl-3 text-base pt-2'
      >
        “世界上有两种人，没看过命运石之门的和看过命运石之门的。”
      </p>
      <p
        contentEditable suppressContentEditableWarning={true}
        className='font-italic' text='right base'>
        ——Murphy Chen
      </p>
    </div>
  )
}

export default CreateHeader
