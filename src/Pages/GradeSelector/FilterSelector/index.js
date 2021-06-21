import React, { useState } from 'react';
import styled from 'styled-components/macro';

export default function FilterSelector(props) {
  const [sort, setSort] = useState('추천순 정렬');

  function handleDropdownInput(e) {
    setSort(`${e.target.id}`);
  }

  function handleSort(e) {
    e.preventDefault();
    const prev = props.flightLists;
    const curr =
      (sort === '낮은 가격 순' && prev.sort((a, b) => a.price - b.price)) ||
      (sort === '높은 가격 순' && prev.sort((a, b) => b.price - a.price)) ||
      (sort === '잔여 좌석 순' &&
        prev.sort((a, b) => a.seat_stock - b.seat_stock));
    props.setFlightLists(curr);
    props.toggleDropdown();
  }

  return (
    <FilterLists>
      <FilterList>
        <FilterBtn type="button" onClick={props.toggleDropdown}>
          {sort}
        </FilterBtn>
        <FilterModal show={props.isDropdownActive}>
          <FilterFormModal>
            <FilterTitle>정렬 기준 선택</FilterTitle>
            <FilterPara>
              <form onSubmit={handleSort}>
                <FIlterOption>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      id="낮은 가격 순"
                      onChange={handleDropdownInput}
                    />
                    낮은 가격 순
                  </label>
                </FIlterOption>
                <FIlterOption>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      id="높은 가격 순"
                      onChange={handleDropdownInput}
                    />
                    높은 가격 순
                  </label>
                </FIlterOption>
                <FIlterOption>
                  <label>
                    <input
                      type="radio"
                      name="sort"
                      id="잔여 좌석 순"
                      onChange={handleDropdownInput}
                    />
                    잔여 좌석 순
                  </label>
                </FIlterOption>
                <ApplyBtn>적용</ApplyBtn>
              </form>
              <ClosedBtn onClick={props.toggleDropdown}></ClosedBtn>
            </FilterPara>
          </FilterFormModal>
        </FilterModal>
      </FilterList>
    </FilterLists>
  );
}

const FilterLists = styled.ul`
  display: flex;
  width: auto;
`;

const FilterList = styled.li`
  position: relative;
  margin-right: 8px;
`;

const FilterBtn = styled.button`
  position: relative;
  display: inline-block;
  padding: 0 38px 0 12px;
  text-indent: 0;
  outline: 0;
  width: auto;
  height: 40px;
  background: 0 0;
  border-radius: 2px;
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #d9dbe1;
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 12px;
    right: 12px;
    width: 16px;
    height: 16px;
    background: url('/images/downArrow.svg') 50% 50% / 16px 16px no-repeat;
  }
`;

const FilterModal = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  left: 0;
  width: 320px;
  height: auto;
  background-color: #fff;
  z-index: 10;
`;

const FilterFormModal = styled.div`
  position: relative;
  width: 320px;
  min-height: 100%;
  padding: 24px 20px;
  border: 1px solid #00256c;
  border-radius: 2px;
  overflow: visible;
`;

const FilterTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  line-height: 1.56;
  font-weight: 700;
`;

const FilterPara = styled.div`
  margin: 12px 0 0;
`;

const FIlterOption = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 12px;
  position: relative;
  z-index: 1;

  label {
    display: inline-block;
    position: relative;
    font-size: 16px;
    line-height: 1.5;

    input {
      margin-right: 12px;
      width: 1.25em;
      height: 1.25em;
    }
  }
`;

const ApplyBtn = styled.button`
  display: block;
  width: 100%;
  height: 48px;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 2px;
  background-color: #00256c;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  appearance: none;
`;

const ClosedBtn = styled.button`
  overflow: hidden;
  white-space: nowrap;
  display: block;
  position: absolute;
  top: 12px;
  right: 8px;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 2px;
  background: url('/images/closeBtn.svg') 50% 50% / 24px 24px no-repeat;
`;
