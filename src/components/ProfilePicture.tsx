import Image from "next/image"

type ProfilePictureProps = {
  src?: string | null
  className?: string
}

export function ProfilePicture({ src, className = "" }:
ProfilePictureProps) {
  return (
    <div className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}>
      {src == null ? null : <Image src={src} alt="Profile Picture" quality={100} fill />}
    </div>
  )
}