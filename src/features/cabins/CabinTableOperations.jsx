import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "no-discount", label: "No discount" },
    { value: "with-discount", label: "With discount" },
  ];

  const sortOptions = [
    { value: "name-asc", label: "Sort by Name (A-Z)" },
    { value: "name-desc", label: "Sort by Name (Z-A)" },
    { value: "regularPrice-asc", label: "Sort by Price (Low to high)" },
    { value: "regularPrice-desc", label: "Sort by Price (High to low)" },
    { value: "maxCapacity-asc", label: "Sort by Capacity (Low to high)" },
    { value: "maxCapacity-desc", label: "Sort by Capacity (High to low)" },
  ];

  return (
    <TableOperations>
      <Filter filterField="discount" options={filterOptions} />
      <SortBy options={sortOptions} />
    </TableOperations>
  );
}

export default CabinTableOperations;
