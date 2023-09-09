import { useEffect } from 'react'
import { useCreateInfo } from '@/context'
import type { ICreateInfo } from '@/interfaces'

interface HeaderProps {
  title: string
}

const CreateHeader = ({ title }: HeaderProps) => {
  const { info, update } = useCreateInfo()
  const updateInfo = (newObj: Partial<ICreateInfo>) => {
    update({
      type: 'update-info',
      payload: newObj
    })
  }
  useEffect(() => {
    if (info.title) return
    updateInfo({
      title,
      desc: `世界上有两种人，没看过和看过${title}的。`,
      author: 'Murphy Chen'
    })
  }, [])
  return (
    <div className='font-sans'>
      {/* TODO contentEditable 兼容性在一些低版本浏览器上不兼容 */}
      <h1
        contentEditable
        suppressContentEditableWarning={true}
        onBlur={e => updateInfo({ title: (e.currentTarget.textContent as string).slice(1, -1) })}
        font='bold title'
        text='[18px]'
        mt='2'
        p='y-1'
      >
        《{info.title}》
      </h1>
      <p
        contentEditable
        suppressContentEditableWarning={true}
        onBlur={e => updateInfo({ desc: e.currentTarget.textContent as string })}
        className='pl-3 text-base pt-2'
      >
        {info.desc}
      </p>
      <p text='right base'>
        ——
        <span
          contentEditable
          suppressContentEditableWarning={true}
          onBlur={e => updateInfo({ author: e.currentTarget.textContent as string })}
          className='inline-block px3 px2'
        >
          {info.author}
        </span>
      </p>
    </div>
  )
}

export default CreateHeader
