import { useSession } from "next-auth/react";
import { Button } from "./Button";
import { ProfilePicture } from "./ProfilePicture";
import { FormEvent, useCallback, useLayoutEffect, useRef, useState } from "react";
import { api } from "~/utils/api";

function updateTextareaSize(textarea?: HTMLTextAreaElement) {
  if (textarea == null) return
  textarea.style.height = "0"
  textarea.style.height = `${textarea.scrollHeight}px`
}

export function NewTweet() {
  const session = useSession()
  if(session.status !== "authenticated") return null

  return <Form />
}

function Form() {
  const session = useSession()
  const [inputValue, setInputValue] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>()
  const inputRef = useCallback((textarea: HTMLTextAreaElement) => {
    updateTextareaSize(textarea)
    textareaRef.current = textarea
  }, [])


  useLayoutEffect(() => {
    updateTextareaSize(textareaRef.current)
  }, [inputValue])

  const createTweet = api.tweet.create.useMutation({ onSuccess: (newTweet) => {
    console.log(newTweet)
    setInputValue("")
  },
})


  if (session.status !== "authenticated") return null

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    createTweet.mutate({ content: inputValue })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 border-b px-4 py-2">
      <div className="flex gap-4">
        <ProfilePicture src={session.data.user.image} />
        <textarea 
        ref={inputRef}
        style={{ height: 0}}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
        placeholder="What's up?"/>
      </div>
      <Button className="self-end">Tweet</Button>
    </form>
  )
}
