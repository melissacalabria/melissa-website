// src/app/recipes/page.tsx

import { Metadata } from 'next';
import RecipesClient from './RecipesClient';
import recipesData from '../../data/recipes.json';

export const metadata: Metadata = {
  title: 'Recipes - MyTown',
  description: 'Delicious vegan recipes from our community.',
};

type Recipe = {
  id: number;
  title: string;
  image: string;
  shortDescription: string;
  instructions: string;
};

export default function RecipesPage() {
  const recipes: Recipe[] = recipesData;

  return <RecipesClient recipes={recipes} />;
}
