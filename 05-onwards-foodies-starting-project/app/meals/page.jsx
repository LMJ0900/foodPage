import { Suspense } from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/meals/mealsGrid'
import { getMeals } from '@/lib/meal'

export const metadata = {
    title: 'All Meals',
    description: '커뮤니티에서 공유한 맛있는 식사를 둘러보세요',
  };

async function Meals(){
    const meals = await getMeals();
    return (<MealsGrid meals={meals}></MealsGrid>)
}

export default function MealsPage(){

    return(<>
    <header className={classes.header}>
    <h1>
        Delicious meals, created <span className={classes.highlight}>by you</span>
    </h1>
    <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
    <p className={classes.cta}>
        <Link href={"/meals/share"}>Share Your Favorite Recipe</Link>
    </p>
    </header>
    <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
       <Meals></Meals>
       </Suspense>
    </main>
    </>)
}