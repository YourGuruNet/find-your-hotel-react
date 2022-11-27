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
        </TextColumn>
      </SearchListItemWrapper>
    </SkeletonLayout>
  );
};

export default SearchListItemSkeleton;
