'use client'
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export interface FilterType {
  name: string;
  slug: string;
  id: string
}

export interface FiltersProps {
  productCategories: FilterType[]
  productSizes: FilterType[]
}

const Filters = ({ productCategories, productSizes }: FiltersProps) => {
  const searchParams = useSearchParams();

  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [size, setSize] = useState(searchParams.get('size') || '');

  const router = useRouter();

  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <h4>Department</h4>

        {category && <div className="mb-3">
          <button className="btn btn-danger btn-sm"
            onClick={() => {
              setCategory('')
              if (size) {
                router.push(`?size=${size}`)
                return;
              }
              router.push('/shop')
            }}
          >
            Clear filter <span className="ml-1">&#10005;</span>
          </button>
        </div>}

        {productCategories.map(({ name, slug, id }) =>
          <div className="sidebar__item__size" key={id}
            onClick={() => {
              setCategory(slug);
              if (size) {
                router.push(`?category=${slug}&size=${size}`)
                return;
              }
              router.push(`?category=${slug}`)
            }}
          >

            <label className={category === slug ? 'active' : ""}
            >
              {name}
              <input type="radio" name="product-categories" />
            </label>
          </div>
        )}

      </div>
      <div className="sidebar__item">
        <h4>Popular Size</h4>

        {size && <div className="mb-3">
          <button className="btn btn-danger btn-sm"
            onClick={() => {
              setSize('')
              if (category) {
                router.push(`?category=${category}`)
                return;
              }
              router.push('/shop')
            }}>
            Clear filter <span className="ml-1">&#10005;</span>
          </button>
        </div>}

        {productSizes.map(({ name, id, slug }) =>
          <div className="sidebar__item__size" key={id}
            onClick={() => {
              setSize(slug);
              if (category) {
                router.push(`?size=${slug}&category=${category}`)
                return;
              }
              router.push(`?size=${slug}`)
            }}
          >

            <label className={size === slug ? 'active' : ""}>
              {name}
              <input type="radio" name="product-sizes" />
            </label>
          </div>
        )}

      </div>
    </div>
  );
};

export default Filters;
