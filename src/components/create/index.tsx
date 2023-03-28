import { Link } from 'react-router-dom'
import html2canvas from 'html2canvas'
import type { LegacyRef } from 'react'
import { useRef } from 'react'
import CreateList from './CreateList'
import MTip from '@/components/common/MTip'
import CreateHeader from '@/components/create/CreateHeader'
import { MButton } from '@/components/common/MButton'
import { useList, useMedias } from '@/context'
import { isContentEditableSupported } from '@/utils'

function Create() {
  const { list, updateList } = useList()
  const { updateMedias } = useMedias()
  const clearList = () => {
    updateList({
      type: 'clear'
    })
    updateMedias({
      type: 'deselected-all'
    })
  }
  const listRef = useRef<HTMLDivElement>()
  const download = () => {
    html2canvas(listRef.current as HTMLDivElement, {
      ignoreElements: element => element.id === 'no-convert'
    }).then((canvas) => {
      const image = canvas.toDataURL()
      const aDownloadLink = document.createElement('a')
      aDownloadLink.download = 'canvas_image.png'
      aDownloadLink.href = image
      aDownloadLink.click()
    })
  }

  return (
    <div className='w-[320px] h-center p-[1px]'>
      <h1
        text='primary lt-sm:2xl sm:3xl center'
        className='font-bold font-title my-5'
      >
        What to Watch today
      </h1>
      <div className='flex justify-around my-2 sticky top-2'>
        <Link to='/'>
          <MButton htmlType='button'>返回搜索</MButton>
        </Link>
        <MButton htmlType='button' onClick={download}>保存图片</MButton>
        <MButton htmlType='button' onClick={clearList}>清空列表</MButton>
      </div>
      {
        isContentEditableSupported()
          ? <div text='center'>
              <MTip>点击相应文字即可修改文案</MTip>
            </div>
          : <MTip type='danger'>该浏览器不支持修改文案，请换浏览器再试！</MTip>
      }
      {
        list.length === 0
          ? <p
            font='sans' text='lt-sm:base sm:lg center gray-400'
            className='flex flex-center items-center'
            style={{ height: 'calc(100vh - 120px)' }}
          >
            请先选择影视
          </p>
          : <div p='t-4 x-2' ref={listRef as LegacyRef<HTMLDivElement>}>
            <CreateHeader />
            <CreateList />
            <div className='text-[15px] font-sans text-gray-600 pb-8 pl-2'>
              <p>制作你的影视推荐清单</p>
              <a
                href="https://github.com/hacker-c/what-to-watch" target="_blank"
                className='flex items-center underline'
              >
                Hacker-C/What-to-Watch
              </a>
            </div>
          </div>
      }

    </div>
  )
}

export default Create
