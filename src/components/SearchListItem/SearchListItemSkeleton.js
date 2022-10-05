import React from "react";
import {
  FavoriteButtonsContainer,
  FavoriteIconSkeleton,
  LabelItemSkeleton,
  LabelsRow,
  PriceSkeleton,
  SearchItemAddress,
  SearchItemFilters,
  SearchItemImageSkeleton,
  SearchItemTitle,
  SearchListItemWrapper,
  TextColumn,
} from "./SearchListItem.styles";
import { map } from "lodash";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonLayout from "../SkeletonLayout";

const SearchListItemSkeleton = () => {
  return (
    <SkeletonLayout>
      <SearchListItemWrapper>
        <Skeleton height={180} wrapper={SearchItemImageSkeleton} />
        <FavoriteButtonsContainer>
          <Skeleton wrapper={FavoriteIconSkeleton} width={50} height={49} />
        </FavoriteButtonsContainer>
        <TextColumn>
          <Skeleton wrapper={SearchItemTitle} />
          <Skeleton wrapper={SearchItemAddress} />
          <Skeleton wrapper={SearchItemFilters} />
          <LabelsRow>
            {map([1, 2, 3], (label) => {
              return (
                <Skeleton width={80} key={label} wrapper={LabelItemSkeleton} />
              );
            })}
          </LabelsRow>
          <Skeleton wrapper={SearchItemAddress} />
          <Skeleton width={50} height={30} wrapper={PriceSkeleton} />
        </TextColumn>
      </SearchListItemWrapper>
    </SkeletonLayout>
  );
};

export default SearchListItemSkeleton;
