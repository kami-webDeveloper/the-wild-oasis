/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { BOOKING_ITEMS_AMOUNT as ITEMS_AMOUNT } from "../utils/config";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Pagination({ numResults }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const amountPages = Math.ceil(numResults / ITEMS_AMOUNT);

  if (amountPages <= 1) return null;

  const handlePagination = function (pagination = "next") {
    if (pagination === "next" && currentPage === amountPages) return;

    if (pagination === "previous" && currentPage === 1) return;

    searchParams.set(
      "page",
      pagination === "previous" ? currentPage - 1 : currentPage + 1
    );
    setSearchParams(searchParams);
  };

  const handleNext = () => handlePagination();
  const handlePrevious = () => handlePagination("previous");

  return (
    <StyledPagination>
      <P>
        Showing <span>{(currentPage - 1) * ITEMS_AMOUNT}</span> to{" "}
        <span>
          {currentPage === amountPages
            ? numResults
            : currentPage * ITEMS_AMOUNT}
        </span>{" "}
        of <span>{numResults}</span> results
      </P>
      <Buttons>
        <PaginationButton onClick={handlePrevious} disabled={currentPage === 1}>
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>
        <PaginationButton
          onClick={handleNext}
          disabled={currentPage === amountPages}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
