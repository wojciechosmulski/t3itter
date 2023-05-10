import { VscRefresh } from "react-icons/vsc"

type LoadingAnimationProps = {
  big?: boolean
}

export function LoadingAnimation({ big = false }: LoadingAnimationProps) {
  const sizeClasses = big ? "h-16 w-16" : "h-10 w-10"
  return (
    <div className="flex justify-center p-2">
      <VscRefresh className={`animate-spin ${sizeClasses}`} />
    </div>
  )
}