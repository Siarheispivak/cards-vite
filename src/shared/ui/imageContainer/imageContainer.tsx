import { ChangeEvent } from 'react'

import { Button, Icon, InputFile, Typography } from '@/shared/ui'

import s from './imageContainer.module.scss'

type Props = {
  handleDeleteCover: () => void
  handleSaveFile: (file: File | undefined) => void
  imageUrl: File | null | string | undefined
}
export const ImageContainer = ({ handleDeleteCover, handleSaveFile, imageUrl }: Props) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSaveFile(e.target.files?.[0])
  }

  return (
    <>
      {imageUrl && (
        <div className={s.imageWrapper}>
          <img alt={'cover'} className={s.coverImage} src={imageUrl as string} />
          <div className={s.icon} onClick={handleDeleteCover}>
            <Icon iconId={'trash_outline'} />
          </div>
        </div>
      )}
      <label className={s.buttonWrapper}>
        <Button className={s.button} fullWidth type={'button'} variant={'secondary'}>
          <Icon iconId={'image_outline'} />
          <Typography variant={'subtitle2'}>
            {imageUrl ? 'Change Image' : 'Upload Image'}
          </Typography>
        </Button>
        <InputFile handleFileChange={handleFileChange} />
      </label>
    </>
  )
}
