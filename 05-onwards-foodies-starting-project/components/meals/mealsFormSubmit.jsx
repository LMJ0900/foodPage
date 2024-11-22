'use client'

import { useFormStatus } from "react-dom"

export default function MealsFormSubmit(){
    const { pending } = useFormStatus()

    return(<>
    <button disabled={pending}>{pending ? '제출중입니다...' : 'Share Meal'}</button>
    </>)
}