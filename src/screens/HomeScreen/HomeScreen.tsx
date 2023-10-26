import { SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header/Header';
import { Categories } from '../../components/Categories/Categories';
import { FeaturedRow } from '../../components/FeaturedRow/FeaturedRow';
import sanityClient from '../../../sanity';
import { FeaturedCategory } from '../../types/types';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState<
    FeaturedCategory[]
  >([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] {
      ..., restaurants[] ->{
        ...,dished[]->
          }   
    }`
      )
      .then((data) => setFeaturedCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Header />
      <ScrollView className="bg-gray-100">
        <Categories />
        {featuredCategories?.map((category, index) => (
          <FeaturedRow
            key={`${category._id}${index}`}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
