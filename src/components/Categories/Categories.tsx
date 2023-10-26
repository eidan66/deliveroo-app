import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CategoriesCard } from './CategoriesCard';
import sanityClient, { urlFor } from '../../../sanity';
import { Category } from '../../types/types';

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == 'category']`)
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categories?.map((category, index) => (
        <CategoriesCard
          key={`${category._id}${index}`}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};
