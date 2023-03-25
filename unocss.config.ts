import { defineConfig, presetUno,presetAttributify, presetWind, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        title: ['Times'],
        sans: ['sans-serif', 'Infer']
      }
    })
  ],
  theme: {
    colors: {
      primary: '#319795'
    }
  },
  shortcuts: {
    'pos-center': 'relative left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]',
    'btn-primary': 'bg-primary rounded mt-5 text-white py-1 px-4',
    'flex-center': 'flex justify-center items-center'
  }
})
