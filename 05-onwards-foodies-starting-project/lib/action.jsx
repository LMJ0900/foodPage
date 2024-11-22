'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./meal"
import { revalidatePath } from "next/cache"

  function isInvaildText(text){
    return !text || text.trim() === ''
  }

export async function shareMeal(prevState,formData) {

    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instruction: formData.get('instruction'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
    }
    if(isInvaildText(meal.title) || isInvaildText(meal.summary) ||
    isInvaildText(meal.instruction) || isInvaildText(meal.creator) ||
    isInvaildText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image || meal.image.size === 0){
      return {
        message : 'Invalid Input'
      }
      }

    await saveMeal(meal)
    revalidatePath('meals/')
    redirect('/meals')
  }