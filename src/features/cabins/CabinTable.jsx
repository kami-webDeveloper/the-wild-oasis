/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, cabins, error } = useCabins();

  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resource="Cabins" />;

  // Filtering cabins
  const discountValue = searchParams.get("discount") || "all";
  let filteredCabins;

  if (discountValue === "no-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);

  if (discountValue === "with-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount > 0);

  if (discountValue === "all") filteredCabins = cabins;

  // Sorting Cabins
  const sortValue = searchParams.get("sortBy") || "startDate-asc";
  const [sortField, direction] = sortValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins?.sort(
    (a, b) => (a[sortField] - b[sortField]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
